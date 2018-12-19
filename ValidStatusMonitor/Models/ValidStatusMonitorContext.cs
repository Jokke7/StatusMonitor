using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace ValidStatusMonitor.Models
{
    public partial class ValidStatusMonitorContext : DbContext
    {
        public ValidStatusMonitorContext() {}

        public ValidStatusMonitorContext(IConfiguration _config) => Configuration = _config;

        public ValidStatusMonitorContext(DbContextOptions<ValidStatusMonitorContext> options)
            : base(options)
        {
        }

        private IConfiguration Configuration;

        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<InstallationAssets> InstallationAssets { get; set; }
        public virtual DbSet<InstallationStatus> InstallationStatus { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
               .SetBasePath(System.IO.Directory.GetCurrentDirectory())
               .AddJsonFile($"appsettings.json", optional: true, reloadOnChange: true)
               .Build();
                optionsBuilder.UseSqlServer(configuration.GetConnectionString("ValidStatusMonitor"));
                //optionsBuilder.UseSqlServer("Server=tcp:valid-prod.database.windows.net,1433;Initial Catalog=ValidStatusMonitor;Persist Security Info=False;User ID=ValidStatusAdmin;Password=Z3KPsGbgrxn9yDDG;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
                base.OnConfiguring(optionsBuilder);
            }

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CreatedDate)
                    .HasColumnName("CREATED_DATE")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description)
                    .HasColumnName("DESCRIPTION")
                    .HasMaxLength(255);

                entity.Property(e => e.Email)
                    .HasColumnName("EMAIL")
                    .HasMaxLength(80);

                entity.Property(e => e.Name)
                    .HasColumnName("NAME")
                    .HasMaxLength(80);
            });

            modelBuilder.Entity<InstallationAssets>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.ApplicationLicenceId)
                    .HasColumnName("APPLICATION_LICENCE_ID")
                    .HasMaxLength(100);

                entity.Property(e => e.ApplicationName)
                    .IsRequired()
                    .HasColumnName("APPLICATION_NAME")
                    .HasMaxLength(50);

                entity.Property(e => e.ApplicationResourceGroup)
                    .IsRequired()
                    .HasColumnName("APPLICATION_RESOURCE_GROUP")
                    .HasMaxLength(80);

                entity.Property(e => e.CustomDomainName)
                    .HasColumnName("CUSTOM_DOMAIN_NAME")
                    .HasMaxLength(255);

                entity.Property(e => e.CustomerId).HasColumnName("CUSTOMER_ID");

                entity.Property(e => e.DatabaseName)
                    .IsRequired()
                    .HasColumnName("DATABASE_NAME")
                    .HasMaxLength(50);

                entity.Property(e => e.DatabaseResourceGroup)
                    .IsRequired()
                    .HasColumnName("DATABASE_RESOURCE_GROUP")
                    .HasMaxLength(50);

                entity.Property(e => e.DatabaseServer)
                    .IsRequired()
                    .HasColumnName("DATABASE_SERVER")
                    .HasMaxLength(100);

                entity.Property(e => e.Enabled3d).HasColumnName("ENABLED_3D");

                entity.Property(e => e.EnabledPdftron).HasColumnName("ENABLED_PDFTRON");

                entity.Property(e => e.InstCode)
                    .HasColumnName("INST_CODE")
                    .HasMaxLength(10);

                entity.Property(e => e.PlantName)
                    .HasColumnName("PLANT_NAME")
                    .HasMaxLength(32);

                entity.Property(e => e.SslThumbprint)
                    .HasColumnName("SSL_THUMBPRINT")
                    .HasMaxLength(255);

                entity.Property(e => e.StorageAccountKey)
                    .HasColumnName("STORAGE_ACCOUNT_KEY")
                    .HasMaxLength(255);

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.InstallationAssets)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Assets_CustomerID");
            });

            modelBuilder.Entity<InstallationStatus>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.ApplicationInfo)
                    .HasColumnName("APPLICATION_INFO")
                    .HasMaxLength(255);

                entity.Property(e => e.ApplicationName)
                    .HasColumnName("APPLICATION_NAME")
                    .HasMaxLength(50);

                entity.Property(e => e.ApplicationServiceHealth)
                    .HasColumnName("APPLICATION_SERVICE_HEALTH")
                    .HasMaxLength(80);

                entity.Property(e => e.ApplicationVersion)
                    .HasColumnName("APPLICATION_VERSION")
                    .HasMaxLength(50);

                entity.Property(e => e.CustomerId).HasColumnName("CUSTOMER_ID");

                entity.Property(e => e.DatabaseName)
                    .HasColumnName("DATABASE_NAME")
                    .HasMaxLength(50);

                entity.Property(e => e.DatabaseServer)
                    .HasColumnName("DATABASE_SERVER")
                    .HasMaxLength(100);

                entity.Property(e => e.DatabaseServiceHealth)
                    .HasColumnName("DATABASE_SERVICE_HEALTH")
                    .HasMaxLength(80);

                entity.Property(e => e.DatabaseServiceLevel)
                    .HasColumnName("DATABASE_SERVICE_LEVEL")
                    .HasMaxLength(50);

                entity.Property(e => e.DatabaseSizeMb).HasColumnName("DATABASE_SIZE_MB");

                entity.Property(e => e.DatabaseTemplate)
                    .HasColumnName("DATABASE_TEMPLATE")
                    .HasMaxLength(80);

                entity.Property(e => e.DatabaseVersion)
                    .HasColumnName("DATABASE_VERSION")
                    .HasMaxLength(50);

                entity.Property(e => e.Description)
                    .HasColumnName("DESCRIPTION")
                    .HasMaxLength(255);

                entity.Property(e => e.Environment)
                    .HasColumnName("ENVIRONMENT")
                    .HasMaxLength(80);

                entity.Property(e => e.LastUpdate)
                    .HasColumnName("LAST_UPDATE")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.LicenceExpiryDate).HasColumnName("LICENCE_EXPIRY_DATE");

                entity.Property(e => e.PlantName)
                    .HasColumnName("PLANT_NAME")
                    .HasMaxLength(80);

                entity.Property(e => e.SslExpiryDate).HasColumnName("SSL_EXPIRY_DATE");

                entity.Property(e => e.SslFriendlyName)
                    .HasColumnName("SSL_FRIENDLY_NAME")
                    .HasMaxLength(120);

                entity.Property(e => e.SslStatus)
                    .HasColumnName("SSL_STATUS")
                    .HasMaxLength(50);

                entity.Property(e => e.StorageBlobNfiles).HasColumnName("STORAGE_BLOB_NFILES");

                entity.Property(e => e.StorageBlobSizeMb).HasColumnName("STORAGE_BLOB_SIZE_MB");

                entity.Property(e => e.StorageServiceHealth)
                    .HasColumnName("STORAGE_SERVICE_HEALTH")
                    .HasMaxLength(80);

                entity.Property(e => e.StorageServiceLevel)
                    .HasColumnName("STORAGE_SERVICE_LEVEL")
                    .HasMaxLength(80);

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.InstallationStatus)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("fk_Status_CustomerID");
            });
        }
    }
}
