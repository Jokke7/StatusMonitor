using Microsoft.EntityFrameworkCore.Migrations;

namespace ValidStatusMonitor.Migrations
{
    public partial class Add3DViewAndPdfTronStatus_StatusTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "ENABLED_3D_VIEWER",
                table: "InstallationStatus",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "ENABLED_PDFTRON_VIEWER",
                table: "InstallationStatus",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ENABLED_3D_VIEWER",
                table: "InstallationStatus");

            migrationBuilder.DropColumn(
                name: "ENABLED_PDFTRON_VIEWER",
                table: "InstallationStatus");
        }
    }
}
