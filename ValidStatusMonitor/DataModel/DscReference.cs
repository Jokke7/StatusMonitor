    using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ValidStatusMonitor.DataModel
{
    public partial class DscReference
    {
        public int Id { get; set; }
        public DateTime LastUpdate { get; set; }
        [StringLength(100)]
        public string Environment { get; set; }
        [StringLength(100)]
        public string DscAppEnvironment { get; set; }
        [StringLength(100)]
        public string DscAppVersion { get; set; }
        [StringLength(100)]
        public string DscAppMinServiceLevel { get; set; }
        [StringLength(100)]
        public string DscMinStorageServiceLevel { get; set; }
        [StringLength(100)]
        public int? DscMaxStorageBlobSizeMb { get; set; }
        [StringLength(100)]
        public string DscDbServerEnvironment { get; set; }
        [StringLength(100)]
        public string DscDbVersion { get; set; }
        public int? DscDbMaxSettingSizeMb { get; set; }
        public int? DscDbMaxSettingDtu { get; set; }
        [StringLength(100)]
        public string DscDbMinServiceLevel { get; set; }
        [StringLength(100)]
        public string DscPdfViewerSetting { get; set; }
        [StringLength(100)]
        public string Dsc3dViewerSetting { get; set; }
    }
}
