using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ValidStatusMonitor.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ValidStatusMonitor.Controllers
{
    //[Route("api/[controller]")]
    [Authorize]
    public class InstallationStatusController : Controller
    {
        private ValidStatusDataAccessLayer objValidStatusMonitor = new ValidStatusDataAccessLayer();

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

        ////Get a particular status with customer info
        //[HttpGet]
        //[Route("api/Installations/Status/{uid}/Cust")]

        //public InstallationStatus DetailsWithCust(Guid uid)
        //{
        //    return objValidStatusMonitor.GetStatusWithCust(uid);
        //}
    }
}
