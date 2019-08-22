using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ValidStatusMonitor.Migrations
{
    public partial class AddedPdfTronLicenceInformation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PDFTRON_LICENCE",
                table: "InstallationStatus",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "PDFTRON_LICENCE_EXPIRY_DATE",
                table: "InstallationStatus",
                nullable: true,
                defaultValueSql: "(getdate())");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PDFTRON_LICENCE",
                table: "InstallationStatus");

            migrationBuilder.DropColumn(
                name: "PDFTRON_LICENCE_EXPIRY_DATE",
                table: "InstallationStatus");
        }
    }
}
