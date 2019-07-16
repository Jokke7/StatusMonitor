using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ValidStatusMonitor.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ValidStatusMonitor.Controllers
{
    //[Route("api/[controller]")]
    [Authorize]
    public class CustomerInstallationsController : Controller
    {

        ValidStatusDataAccessLayer objValidStatusMonitor = new ValidStatusDataAccessLayer();


        [HttpGet]
        [Route("api/Customer/All")]
        public IEnumerable<Customer> All()
        {
            return objValidStatusMonitor.GetAllCustomers();
        }


        [HttpGet]
        [Route("api/Customer/{id}")]
        public Customer Details(int id)
        {
            return objValidStatusMonitor.GetCustomer(id);
        }

        [HttpPut]
        [Route("api/Customer/Edit")]
        public int Edit([FromBody]Customer customer)
        {
            return objValidStatusMonitor.UpdateCustomer(customer);
        }

        [HttpPost]
        [Route("api/Customer/Post")]
        public string AddCustomer([FromBody] Customer cust)
        {
            Trace.WriteLine(cust.Name);
            return objValidStatusMonitor.AddCustomer(cust) == 1 ? "success" : "error";
        }

        [HttpDelete]
        [Route("api/Customer/Delete/{id}")]
        public int Delete(int id)
        {
            return objValidStatusMonitor.DeleteCustomer(id);
        }

        [HttpGet]
        [Route("api/Installations/All")]
        public IEnumerable<InstallationAssets> AllInstallations()
        {
            return objValidStatusMonitor.GetAllAssets();
        }

        //[HttpGet]
        //[Route("api/Installations/{id}")]
        //public IEnumerable<InstallationAssets> CustomerInstallations(int id)
        //{
        //    return objValidStatusMonitor.GetCustomerAssets(id);
        //}

        [HttpGet]
        [Route("api/Installations/{id}/{installationName}")]
        public InstallationAssets CustomerInstallation(int id, string installationName)
        {
            return objValidStatusMonitor.GetCustomerInstallationAsset(id, installationName);
        }

        [HttpGet]
        [Route("api/Installations/{uid}")]
        public InstallationAssets AssetDetails(Guid uid)
        {
            return objValidStatusMonitor.GetAsset(uid);
        }

        [HttpPost]
        [Route("api/Installations/Post")]
        public string AddAsset([FromBody] InstallationAssets asset)
        {
            //Trace.WriteLine(asset.CustomerId);
            return objValidStatusMonitor.AddAsset(asset) == 1 ? "success" : "error";
        }

        [HttpPut]
        [Route("api/Installations/Edit")]
        public int EditAsset([FromBody]InstallationAssets asset)
        {
            return objValidStatusMonitor.UpdateAsset(asset);
        }

        [HttpDelete]
        [Route("api/Installations/Delete/{uid}")]
        public int DeleteAsset(Guid uid)
        {
            return objValidStatusMonitor.DeleteAsset(uid);
        }

        
    }
}
