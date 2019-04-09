using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using Newtonsoft.Json.Serialization;
using System;
using System.Diagnostics;
using System.Threading.Tasks;
using ValidStatusMonitor.Controllers;
using ValidStatusMonitor.Models;
using ValidStatusMonitor.Security;

namespace ValidStatusMonitor
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

        }

        public IConfiguration Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            
            // Require HTTPS
            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new RequireHttpsAttribute());
            });
            
            services.AddMvc(options =>
            {
                options.Filters.Add(typeof(AdalTokenAcquisitionExceptionFilter));
                options.OutputFormatters.Add(new XmlDataContractSerializerOutputFormatter());
            })
            .AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());

            services.AddAuthentication(auth =>
            {
                auth.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                auth.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
                auth.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            })
            .AddCookie(options =>
            {
                options.Cookie.Name = Configuration["CookieAuthentication:Name"];
            })
            .AddOpenIdConnect(options =>
            {
                Configuration.GetSection("Authentication").Bind(options);

                options.Events = new OpenIdConnectEvents
                {
                    OnAuthorizationCodeReceived = async context =>
                    {
                        HttpRequest request = context.HttpContext.Request;
                        string currentUri = UriHelper.BuildAbsolute(request.Scheme, request.Host, request.PathBase, request.Path);
                        ClientCredential credential = new ClientCredential(context.Options.ClientId, context.Options.ClientSecret);

                        IDistributedCache distributedCache = context.HttpContext.RequestServices.GetRequiredService<IDistributedCache>();

                        string userId = context.Principal.FindFirst("http://schemas.microsoft.com/identity/claims/objectidentifier").Value;

                        AdalDistributedTokenCache cache = new AdalDistributedTokenCache(distributedCache, userId);

                        AuthenticationContext authContext = new AuthenticationContext(context.Options.Authority, cache);

                        try
                        {
                            // Debug info
                            Trace.WriteLine("View: Auth code received, acquiring tokens:");
                            Trace.WriteLine("Items in cache:" + cache.Count);
                            Trace.WriteLine("Authority:" + context.Options.Authority);
                            Trace.WriteLine("User ID:" + userId);

                            // Get access and refresh tokens for Graph
                            AuthenticationResult result = await authContext.AcquireTokenByAuthorizationCodeAsync(
                                context.ProtocolMessage.Code, new Uri(currentUri), credential, context.Options.Resource);

                            Trace.WriteLine("Access token for API: " + result.AccessToken);

                            context.HandleCodeRedemption(result.AccessToken, result.IdToken);

                        }
                        catch (Exception ex)
                        {
                            Trace.WriteLine("View: Access token acquisition exception: " + ex.Message);
                        }
                    },
                    OnTicketReceived = (context) =>
                    {
                        // stop by `/Pages/Continue` instead of going directly to the ReturnUri
                        // to work around Safari's issues with SameSite=lax session cookies not being
                        // returned on the final redirect of the authentication flow.
                        context.ReturnUri = "/Pages/Continue?returnUrl=" + System.Net.WebUtility.UrlEncode(context.ReturnUri ?? "/");
                        return Task.CompletedTask;
                    }

                };
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddSingleton(Configuration);

            services.AddDbContext<ValidStatusMonitorContext>(
                options => options.UseSqlServer(Configuration.GetConnectionString("ValidStatusMonitor")));

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            services.AddTransient<IAuthorizationHandler, ApiKeyRequirementHandler>();
            services.AddAuthorization(authConfig =>
            {
                authConfig.AddPolicy("ApiKeyPolicy",
                    policyBuilder => policyBuilder
                        .AddRequirements(new ApiKeyRequirement(new[] { "hemmelig-api-key" })));
            });

            //Workaround for prevent bug with authentication on iOS12-devices.
            //services.ConfigureExternalCookie(options =>
            //{
            //    // Other options
            //    options.Cookie.SameSite = SameSiteMode.None;
            //}); services.ConfigureApplicationCookie(options =>
            //{
            //    // Other options
            //    options.Cookie.SameSite = SameSiteMode.None;
            //});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddAzureWebAppDiagnostics();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                IConfigurationRoot configuration = new ConfigurationBuilder()
               .SetBasePath(System.IO.Directory.GetCurrentDirectory())
               .AddJsonFile("appsettings.Development.json")
               .Build();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();

                IConfigurationRoot configuration = new ConfigurationBuilder()
               .SetBasePath(System.IO.Directory.GetCurrentDirectory())
               .AddJsonFile("appsettings.Production.json")
               .Build();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.Use(async (context, next) =>
            {
                ILogger _logger = loggerFactory.CreateLogger("Logger");
                _logger.LogTrace("context trace identifier: ", context.TraceIdentifier);
                _logger.LogTrace("context to-string", context.User.Identity.ToString());
                // Challenge authentication before SPA is loaded if user is not authenticated
                if (!context.User.Identity.IsAuthenticated) { 
                   _logger.LogTrace("ChallangeAsync() called");
                    await context.ChallengeAsync();
                }
                else
                {
                    _logger.LogTrace("next() called");
                    await next();
                }
                    
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
