using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ValidStatusMonitor.DataModel
{
    public partial class DscReference
    {
        public int Id { get; set; }
        public DateTime LastUpdate { get; set; }
        public string Environment { get; set; }
        public string DscAppEnvironment { get; set; }
        public string DscAppVersion { get; set; }
        public DateTime? DscAppLicenceExpiryDate { get; set; }
        public DateTime? DscSslExpiryDate { get; set; }
        public string DscMinStorageServiceLevel { get; set; }
        public int? DscMaxStorageBlobSizeMb { get; set; }
        public string DscDbServerEnvironment { get; set; }
        public string DscDbVersion { get; set; }
        public int? DscDbMaxSettingSizeMb { get; set; }
        public int? DscDbMaxSettingDtu { get; set; }
        public string DscDbMinServiceLevel { get; set; }
    }
}
