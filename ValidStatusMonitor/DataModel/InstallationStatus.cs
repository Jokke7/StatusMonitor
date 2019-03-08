using System;

namespace ValidStatusMonitor.Models
{
    public partial class InstallationStatus
    {
        public Guid Id { get; set; }
        public string PlantName { get; set; }
        public DateTime LastUpdate { get; set; }
        public int? CustomerId { get; set; }
        public string Description { get; set; }
        public string Environment { get; set; }
        public string ApplicationName { get; set; }
        public string ApplicationInfo { get; set; }
        public string ApplicationVersion { get; set; }
        public string LicenceNumber { get; set; }
        public string LicenceServer { get; set; }
        public DateTime? LicenceExpiryDate { get; set; }
        public string ApplicationServiceHealth { get; set; }
        public string SslFriendlyName { get; set; }
        public DateTime? SslExpiryDate { get; set; }
        public string SslStatus { get; set; }
        public string StorageServiceHealth { get; set; }
        public string StorageServiceLevel { get; set; }
        public int? StorageBlobNfiles { get; set; }
        public int? StorageBlobSizeMb { get; set; }
        public string DatabaseName { get; set; }
        public string DatabaseServer { get; set; }
        public string DatabaseVersion { get; set; }
        public string DatabaseTemplate { get; set; }
        public string DatabaseServiceHealth { get; set; }
        public int? DatabaseSizeMb { get; set; }
        public string DatabaseServiceLevel { get; set; }

        public bool? EnabledPdfTron { get; set; }
        public bool? Enabled3dViewer { get; set; }

        public string HttpResponseE2eTest { get; set; }
        public string E2eTestUri { get; set; }
        public virtual Customer Customer { get; set; }
    }
}
