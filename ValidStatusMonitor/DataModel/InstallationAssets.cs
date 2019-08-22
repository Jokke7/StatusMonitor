using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ValidStatusMonitor.Models
{
    public partial class InstallationAssets
    {
        [Key]
        public Guid Id { get; set; }
        public int CustomerId { get; set; }
        public string DatabaseName { get; set; }
        public string DatabaseServer { get; set; }
        public string DatabaseResourceGroup { get; set; }
        public string ApplicationName { get; set; }
        public string ApplicationResourceGroup { get; set; }
        public string ApplicationLicenceId { get; set; }
        public string CustomDomainName { get; set; }
        public string EndpointTestUri { get; set; }
        public string SslThumbprint { get; set; }
        public string StorageAccountKey { get; set; }
        public string InstCode { get; set; }
        public string PlantName { get; set; }
        public string SlotSetting { get; set; }
        public virtual Customer Customer { get; set; }
        public virtual InstallationStatus Status { get; set; }
    }
}
