using Microsoft.EntityFrameworkCore.Migrations;

namespace ValidStatusMonitor.Migrations
{
    public partial class TestEndpointUri : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DscMaxStorageServiceLevel",
                table: "Dscreference",
                newName: "DscMinStorageServiceLevel");

            migrationBuilder.AddColumn<string>(
                name: "EndpointTestUri",
                table: "InstallationAssets",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EndpointTestUri",
                table: "InstallationAssets");

            migrationBuilder.RenameColumn(
                name: "DscMinStorageServiceLevel",
                table: "Dscreference",
                newName: "DscMaxStorageServiceLevel");
        }
    }
}
