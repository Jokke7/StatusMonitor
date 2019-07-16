using Microsoft.EntityFrameworkCore.Migrations;

namespace ValidStatusMonitor.Migrations
{
    public partial class ResourceLinksAdded_statusTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "LICENCE_LINK",
                table: "InstallationStatus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "APP_LINK",
                table: "InstallationStatus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DB_LINK",
                table: "InstallationStatus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "STORAGE_LINK",
                table: "InstallationStatus",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LICENCE_LINK",
                table: "InstallationStatus");

            migrationBuilder.DropColumn(
                name: "APP_LINK",
                table: "InstallationStatus");

            migrationBuilder.DropColumn(
                name: "DB_LINK",
                table: "InstallationStatus");

            migrationBuilder.DropColumn(
                name: "STORAGE_LINK",
                table: "InstallationStatus");
        }
    }
}
