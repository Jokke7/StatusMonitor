using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ValidStatusMonitor.Models;

namespace ValidStatusMonitor.Controllers
{
    //[Route("api/[controller]")]
    [Authorize]
    public class InstallationStatusController : Controller
    {
        private ValidStatusDataAccessLayer objValidStatusMonitor = new ValidStatusDataAccessLayer();
        private readonly IConfiguration config;

        public InstallationStatusController(IConfiguration _config) {
            config = _config;
        }

        //Get all statuses
        [HttpGet]
        [Route("api/Installations/Status/All")]
        public IEnumerable<InstallationStatus> All()
        {
            return objValidStatusMonitor.GetAllStatuses();
        }

        //Get a particular status
        [HttpGet]
        [Route("api/Installations/Status/{uid}")]
        public InstallationStatus Details(Guid uid)
        {
            return objValidStatusMonitor.GetStatus(uid);
        }

        //[Authorize(Policy = "ApiKeyPolicy")]
        [HttpPost]
        [Route("api/Installations/Refresh/{statusKey}")]
        public void UpdateStatus(string statusKey)
        {
            string token = config["WebhookTokens:UpdateStatuses"];
            //var token = ConfigurationManager.AppSettings["UpdateStatusWebhookToken"];
            //UpdateStatusWebhookToken
            try
            {
                string uri = "https://s9events.azure-automation.net/webhooks?token="+token;
                HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(uri);
                string data = string.Empty;
                request.Method = "POST";
                request.ContentType = "text/plain;charset=utf-8";

                UTF8Encoding encoding = new UTF8Encoding();
                byte[] bytes = encoding.GetBytes(data);

                request.ContentLength = bytes.Length;

                using (Stream requestStream = request.GetRequestStream())
                {
                    requestStream.Write(bytes, 0, bytes.Length);
                }

                request.BeginGetResponse((x) =>
                {
                    using (HttpWebResponse response = (HttpWebResponse)request.EndGetResponse(x))
                    {
                        using (Stream stream = response.GetResponseStream())
                        {
                            StreamReader reader = new StreamReader(stream, Encoding.UTF8);
                            String responseString = reader.ReadToEnd();
                            //MessageBox.Show("Webhook Triggered at " + System.DateTime.Now + " \n Job Details : " + responseString);
                        }
                    }
                }, null);
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
