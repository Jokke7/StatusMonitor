using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ValidStatusMonitor.Migrations
{
    public partial class AddDscReferencetable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Dscreference",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LastUpdate = table.Column<DateTime>(nullable: false),
                    Environment = table.Column<string>(nullable: true),
                    DscAppEnvironment = table.Column<string>(nullable: true),
                    DscAppVersion = table.Column<string>(nullable: true),
                    DscAppLicenceExpiryDate = table.Column<DateTime>(nullable: true),
                    DscSslExpiryDate = table.Column<DateTime>(nullable: true),
                    DscMaxStorageServiceLevel = table.Column<string>(nullable: true),
                    DscMaxStorageBlobSizeMb = table.Column<int>(nullable: true),
                    DscDbServerEnvironment = table.Column<string>(nullable: true),
                    DscDbVersion = table.Column<string>(nullable: true),
                    DscDbMaxSettingSizeMb = table.Column<int>(nullable: true),
                    DscDbMaxSettingDtu = table.Column<int>(nullable: true),
                    DscDbMinServiceLevel = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dscreference", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Dscreference");
        }
    }
}
