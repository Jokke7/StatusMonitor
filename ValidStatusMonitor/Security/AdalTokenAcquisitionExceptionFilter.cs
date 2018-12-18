using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System.Diagnostics;

namespace ValidStatusMonitor.Security
{
    public class AdalTokenAcquisitionExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            // Send user to Azure AD to re-authenticate if ADAL failed to acquire access token
            if (context.Exception is AdalSilentTokenAcquisitionException)
            {
                Trace.TraceError(context.Exception.Message);
                context.Result = new ChallengeResult();
            }
        }
    }
}