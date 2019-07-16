using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using ValidStatusMonitor.Security;

namespace ValidStatusMonitor.Controllers
{
    public class AuthController : Controller
    {
        private readonly ILogger _logger;
        private readonly IDistributedCache _cache;
        private readonly IConfiguration Configuration;

        public AuthController(ILogger<AuthController> logger, IDistributedCache cache, IConfiguration config)
        {
            _logger = logger;
            _cache = cache;
            Configuration = config;
        }

        public IActionResult TriggerChallenge(string redirecturi)
        {
            return Challenge(new AuthenticationProperties { RedirectUri = redirecturi });
        }

        public IActionResult SignInOpenIdConnect()
        {
            return View();
        }

        public async Task<JsonResult> IsAuthenticated()
        {
            try
            {
                AuthenticationResult result = await GetVnLicenseAccessToken();
                return Json(!(result == null || result.AccessToken.Length == 0));
            }
            catch (Exception)
            {
                return Json(false);
            }
        }

        public async Task<JsonResult> GetUserProfile()
        {
            VnUserProfile userProfile = new VnUserProfile();
            try
            {
                userProfile.Name = User.FindFirst(ClaimTypes.Name).Value;
                userProfile.ObjectId = User.FindFirst("http://schemas.microsoft.com/identity/claims/objectidentifier").Value;
                userProfile.GivenName = User.FindFirst(ClaimTypes.GivenName).Value;
                userProfile.Surname = User.FindFirst(ClaimTypes.Surname).Value;
                userProfile.UserPrincipalName = User.FindFirst(ClaimTypes.Upn).Value;
                userProfile.DisplayName = string.Format("{0} {1}", userProfile.GivenName, userProfile.Surname);
                userProfile.ADGroups = GetAdGroupString(GetADGroupGuids());
                if (userProfile.ADGroups == null)
                {
                    _logger.LogWarning("User has no AD groups");
                }
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                /* return empty profile */
            }

            return Json(userProfile);
        }

        private string GetAdGroupString(Task<string[]> task)
        {
            string groupString = "";
            foreach (string guid in task.Result)
            {
                if (guid == "0bb2a2fa-8028-4b34-9b66-b49e510ba73e")
                {
                    groupString += "P";
                }

                if (guid == "c8d38ee9-98c1-4f37-9fd5-22fe71323059")
                {
                    groupString += "R";
                }

                if (guid == "98f4edfb-1064-4017-8904-3b6562d1f2ca")
                {
                    groupString += "T";
                }
            }
            if (groupString == "")
            {
                _logger.LogWarning("Failed to get correct groupString.");
            }
            return groupString;
        }

        private async Task<string[]> GetADGroupGuids()
        {
            AzureAdTokenResponse tokenResponse = null;

            tokenResponse = await GetAzureAdToken(tokenResponse);
            if (tokenResponse == null)
            {
                return null;
            }

            using (HttpClient httpClient = new HttpClient())
            {
                List<string> ids = new List<string>();
                ADGroups groupIdsToCompare = new ADGroups();

                string requestUri = "https://graph.microsoft.com/v1.0/me/checkMemberGroups";
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", tokenResponse.AccessToken);
                ids.Add("0bb2a2fa-8028-4b34-9b66-b49e510ba73e");
                ids.Add("c8d38ee9-98c1-4f37-9fd5-22fe71323059");
                ids.Add("98f4edfb-1064-4017-8904-3b6562d1f2ca");
                groupIdsToCompare.GroupIds = ids;

                try
                {
                    HttpResponseMessage response = httpClient.PostAsync(requestUri,
                     new StringContent(JsonConvert.SerializeObject(groupIdsToCompare), Encoding.UTF8, "application/json")).Result;

                    if (response.IsSuccessStatusCode)
                    {
                        string responseStr = response.Content.ReadAsStringAsync().Result;
                        ADGroups responseGroups = JsonConvert.DeserializeObject<ADGroups>(responseStr);
                        groupIdsToCompare.GroupIds.AddRange(responseGroups.FromValue);
                    }
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex.Message);
                    return null;
                }

                List<string> userGroups = groupIdsToCompare.GroupIds.GroupBy(x => x)
                                                           .Where(group => group.Count() > 1)
                                                           .Select(group => group.Key).ToList();

                if (userGroups.Count < 1)
                {
                    _logger.LogWarning("Found no user groups.");
                    return null;
                }
                return userGroups.ToArray();
            }
        }

        private async Task<AzureAdTokenResponse> GetAzureAdToken(AzureAdTokenResponse tokenResponse)
        {
            AuthenticationResult result = await GetVnLicenseAccessToken();
            if (result == null)
            {
                return null;
            }
            string token = result.AccessToken;
            using (HttpClient httpClient = new HttpClient())
            {
                string graphUrl = Configuration["Authentication:GraphResource"];
                string clientId = Configuration["Authentication:ApiId"];
                string clientSecret = Configuration["Authentication:ApiSecret"];
                string requestUri = "https://login.microsoftonline.com/" + GetTenantId() + "/oauth2/token";

                string data = "grant_type=" + Uri.EscapeDataString("urn:ietf:params:oauth:grant-type:jwt-bearer") +
                "&resource=" + Uri.EscapeDataString(graphUrl) +
                "&client_id=" + Uri.EscapeDataString(clientId) +
                "&client_secret=" + Uri.EscapeDataString(clientSecret) +
                "&assertion=" + Uri.EscapeDataString(token) +
                "&scope=" + "https://graph.microsoft.com/directory.read.all" +
                "&requested_token_use=on_behalf_of";

                try
                {
                    HttpResponseMessage response = httpClient.PostAsync(requestUri, new StringContent(data, Encoding.UTF8, "application/x-www-form-urlencoded")).Result;
                    if (response.IsSuccessStatusCode)
                    {
                        string responseStr = response.Content.ReadAsStringAsync().Result;
                        tokenResponse = JsonConvert.DeserializeObject<AzureAdTokenResponse>(responseStr);
                    }
                }
                catch (HttpRequestException ex)
                {
                    _logger.LogError(ex.Message);

                }
            }

            return tokenResponse;
        }

        private async Task<AuthenticationResult> GetVnLicenseAccessToken()
        {
            _logger.LogDebug("User.Identity.Name: {0}", User.Identity.Name);
            string tenantId = GetTenantId();
            string userId = GetUserId();

            try
            {
                string authority = Configuration["Authentication:Authority"].Replace("{tenantid}", tenantId);

                AdalDistributedTokenCache cache = new AdalDistributedTokenCache(_cache, userId);
                AuthenticationContext authContext = new AuthenticationContext(authority, cache);

                string clientId = Configuration["Authentication:ClientId"];
                string clientSecret = Configuration["Authentication:ClientSecret"];
                ClientCredential credential = new ClientCredential(clientId, clientSecret);

                string resourceId = Configuration["Authentication:Resource"];

                // Debug info
                _logger.LogDebug("View: GetAccessToken method:");
                _logger.LogDebug("Items in cache: {0}", cache.Count);
                _logger.LogDebug("Authority: {0}", authority);
                _logger.LogDebug("User ID: {0}", userId);

                return await authContext.AcquireTokenSilentAsync(resourceId, credential, new UserIdentifier(userId, UserIdentifierType.UniqueId));
            }
            catch (Exception ex)
            {
                _logger.LogError("View: GetAccessToken exception: {0}", ex.Message);
                _logger.LogError("View: GetAccessToken exception ToString: {0}", ex.ToString());
                return null;
            }
        }

        public VnUserProfile GetUser()
        {
            VnUserProfile userProfile = new VnUserProfile();

            try
            {
                userProfile.Name = User.FindFirst(ClaimTypes.Name).Value;
                userProfile.ObjectId = User.FindFirst("http://schemas.microsoft.com/identity/claims/objectidentifier").Value;
                userProfile.GivenName = User.FindFirst(ClaimTypes.GivenName).Value;
                userProfile.Surname = User.FindFirst(ClaimTypes.Surname).Value;
                userProfile.UserPrincipalName = User.FindFirst(ClaimTypes.Upn).Value;
                userProfile.DisplayName = string.Format("{0} {1}", userProfile.GivenName, userProfile.Surname);
                userProfile.ADGroups = GetAdGroupString(GetADGroupGuids());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return new VnUserProfile();
            }
            return userProfile;
        }
        private string GetTenantId()
        {
            try
            {
                Claim tenantClaim = User.FindFirst("http://schemas.microsoft.com/identity/claims/tenantid");
                return (tenantClaim != null ? tenantClaim.Value : string.Empty);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return string.Empty;
            }
        }

        private string GetUserId()
        {
            try
            {
                Claim userIdClaim = User.FindFirst("http://schemas.microsoft.com/identity/claims/objectidentifier");
                return (userIdClaim != null ? userIdClaim.Value : string.Empty);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return string.Empty;
            }
        }

        /// <summary>
        /// This view is invoked by the OpenIDConnect middleware after setting the authentication ticket
        /// as an intermediate step to make sure that the session cookie is sent
        /// to the returnUrl request in Safari iOS 12/Mojave.
        /// It is marked as AllowAnonymous because this request will look as
        /// unauthenticated on Safari.
        /// </summary>
        [Microsoft.AspNetCore.Authorization.AllowAnonymous]
        public IActionResult Continue(string returnUrl = "/")
        {
            ViewBag.returnUrl = Url.IsLocalUrl(returnUrl) ? returnUrl : "/";
            return View();
        }
    }

    public class ApiKeyRequirement : IAuthorizationRequirement
    {
        public IReadOnlyList<string> ApiKeys { get; set; }

        public ApiKeyRequirement(IEnumerable<string> apiKeys)
        {
            ApiKeys = apiKeys?.ToList() ?? new List<string>();
        }
    }

    public class ApiKeyRequirementHandler : AuthorizationHandler<ApiKeyRequirement>
    {
        public const string API_KEY_HEADER_NAME = "X-API-KEY";

        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, ApiKeyRequirement requirement)
        {
            SucceedRequirementIfApiKeyPresentAndValid(context, requirement);
            return Task.CompletedTask;
        }
        private void SucceedRequirementIfApiKeyPresentAndValid(AuthorizationHandlerContext context, ApiKeyRequirement requirement)
        {
            if (context.Resource is AuthorizationFilterContext authorizationFilterContext)
            {
                var apiKey = authorizationFilterContext.HttpContext.Request.Headers[API_KEY_HEADER_NAME].FirstOrDefault();
                if (apiKey != null && requirement.ApiKeys.Any(requiredApiKey => apiKey == requiredApiKey))
                {
                    context.Succeed(requirement);
                }
            }
        }
    }
}