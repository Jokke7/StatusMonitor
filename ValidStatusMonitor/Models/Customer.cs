using System;
using System.Collections.Generic;

namespace ValidStatusMonitor.Models
{
    public partial class Customer
    {
        public Customer()
        {
            InstallationAssets = new HashSet<InstallationAssets>();
            InstallationStatus = new HashSet<InstallationStatus>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Email { get; set; }
        public string Description { get; set; }

        public virtual ICollection<InstallationAssets> InstallationAssets { get; set; }
        public virtual ICollection<InstallationStatus> InstallationStatus { get; set; }
    }
}
