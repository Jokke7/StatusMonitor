using Microsoft.EntityFrameworkCore.Migrations;

namespace ValidStatusMonitor.Migrations
{
    public partial class MovedPackageOptionsToStatusTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ENABLED_3D",
                table: "InstallationAssets");

            migrationBuilder.DropColumn(
                name: "ENABLED_PDFTRON",
                table: "InstallationAssets");

            migrationBuilder.AlterColumn<bool>(
                name: "ENABLED_PDFTRON_VIEWER",
                table: "InstallationStatus",
                nullable: true,
                oldClrType: typeof(bool));

            migrationBuilder.AlterColumn<bool>(
                name: "ENABLED_3D_VIEWER",
                table: "InstallationStatus",
                nullable: true,
                oldClrType: typeof(bool));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "ENABLED_PDFTRON_VIEWER",
                table: "InstallationStatus",
                nullable: false,
                oldClrType: typeof(bool),
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "ENABLED_3D_VIEWER",
                table: "InstallationStatus",
                nullable: false,
                oldClrType: typeof(bool),
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "ENABLED_3D",
                table: "InstallationAssets",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "ENABLED_PDFTRON",
                table: "InstallationAssets",
                nullable: false,
                defaultValue: false);
        }
    }
}
