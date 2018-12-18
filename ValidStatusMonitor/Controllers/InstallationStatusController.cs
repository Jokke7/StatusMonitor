using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ValidStatusMonitor.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ValidStatusMonitor.Controllers
{
    //[Route("api/[controller]")]
    public class InstallationStatusController : Controller
    {
        ValidStatusDataAccessLayer objValidStatusMonitor = new ValidStatusDataAccessLayer();

        //Get all statuses
        [HttpGet]
        [Route("api/Installations/Status/All")]
        public IEnumerable<InstallationStatus> All()
        {
            return objValidStatusMonitor.GetAllStatuses();
        }

        //Get a particular status
        [HttpGet]
        [Route("api/Installations/{uid}")]
        public InstallationStatus Details(Guid uid)
        {
            return objValidStatusMonitor.GetStatus(uid);
        }

        //Get a particular status
        [HttpGet]
        [Route("api/Installations/Test")]

        public string GetHelloFromAPI() {
            return "Hei fra API!";
        }
    }
}
