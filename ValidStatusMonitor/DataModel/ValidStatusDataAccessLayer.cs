using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ValidStatusMonitor.Models
{
    public class ValidStatusDataAccessLayer
    {
        ValidStatusMonitorContext db = new ValidStatusMonitorContext();

        public IEnumerable<InstallationStatus> GetAllStatuses()
        {
            try
            {
                return db.InstallationStatus
                    .OrderByDescending(x => x.HttpResponseE2eTest)
                    .ToList();
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular customer 
        public InstallationStatus GetStatus(Guid uid)
        {
            try
            {
                InstallationStatus status = db.InstallationStatus.Find(uid);
                return status;
            }
            catch
            {
                throw;
            }
        }

        public IEnumerable<Customer> GetAllCustomers()
        {
            try
            {
                return db.Customer.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new customer record  
        public int AddCustomer(Customer customer)
        {
            try
            {
                db.Customer.Add(customer);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particular customer 
        public int UpdateCustomer(Customer customer)
        {
            try
            {
                db.Entry(customer).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the assets of one customer
        internal IEnumerable<InstallationAssets> GetCustomerAssets(int id)
        {
            List<InstallationAssets> listAssets = new List<InstallationAssets>();
            listAssets = (from AssetList in db.InstallationAssets where AssetList.CustomerId == id select AssetList).ToList();

            return listAssets;
        }

        internal InstallationAssets GetCustomerInstallationAsset(int id, string installationName)
        {
            try
            {
                List<InstallationAssets> listAssets = GetCustomerAssets(id).ToList();

                InstallationAssets asset = listAssets.Find(x => x.ApplicationName.Equals(installationName));
                return asset;
            }
            catch
            {
                throw;
            }
        }


        //Get the details of a particular customer 
        public Customer GetCustomer(int id)
        {
            try
            {
                Customer customer = db.Customer.Find(id);
                return customer;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular customer
        public int DeleteCustomer(int id)
        {
            try
            {
                Customer customer = db.Customer.Find(id);
                db.Customer.Remove(customer);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Get the list of installed assets 
        public List<InstallationAssets> GetAllAssets()
        {
            List<InstallationAssets> listAssets = new List<InstallationAssets>();
            listAssets = (from AssetList in db.InstallationAssets select AssetList).ToList();

            return listAssets;
        }

        //Get the details of a particular asset 
        public InstallationAssets GetAsset(Guid uid)
        {
            try
            {
                InstallationAssets asset = db.InstallationAssets.Find(uid);
                return asset;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particular asset/installation 
        public int UpdateAsset(InstallationAssets asset)
        {
            try
            {
                db.Entry(asset).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular asset
        public int DeleteAsset(Guid uid)
        {
            try
            {
                InstallationAssets asset = db.InstallationAssets.Find(uid);
                db.InstallationAssets.Remove(asset);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
