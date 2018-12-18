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

        [HttpDelete]
        [Route("api/Customer/Delete/{id}")]
        public int Delete(int id)
        {
            return objValidStatusMonitor.DeleteCustomer(id);
        }

        [HttpGet]
        [Route("api/Installations")]
        public IEnumerable<InstallationAssets> AllInstallations()
        {
            return objValidStatusMonitor.GetAllAssets();
        }

        [HttpGet]
        [Route("api/Installations/{uid}")]
        public InstallationAssets AssetDetails(Guid uid)
        {
            return objValidStatusMonitor.GetAsset(uid);
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
