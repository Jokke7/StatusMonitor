using Microsoft.EntityFrameworkCore.Migrations;

namespace ValidStatusMonitor.Migrations
{
    public partial class AddLicenceSerialServer_StatusTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "LICENCE_NUMBER",
                table: "InstallationStatus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LICENCE_SERVER",
                table: "InstallationStatus",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LICENCE_NUMBER",
                table: "InstallationStatus");

            migrationBuilder.DropColumn(
                name: "LICENCE_SERVER",
                table: "InstallationStatus");
        }
    }
}
