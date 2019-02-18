using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ValidStatusMonitor.Migrations
{
    public partial class UpdateDscConfigModel_140219 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DscAppLicenceExpiryDate",
                table: "Dscreference");

            migrationBuilder.DropColumn(
                name: "DscSslExpiryDate",
                table: "Dscreference");

            migrationBuilder.AlterColumn<string>(
                name: "Environment",
                table: "Dscreference",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DscMinStorageServiceLevel",
                table: "Dscreference",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DscDbVersion",
                table: "Dscreference",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DscDbServerEnvironment",
                table: "Dscreference",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DscDbMinServiceLevel",
                table: "Dscreference",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DscAppVersion",
                table: "Dscreference",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DscAppEnvironment",
                table: "Dscreference",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Dsc3dViewerSetting",
                table: "Dscreference",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DscAppMinServiceLevel",
                table: "Dscreference",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DscPdfViewerSetting",
                table: "Dscreference",
                maxLength: 100,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Dsc3dViewerSetting",
                table: "Dscreference");

            migrationBuilder.DropColumn(
                name: "DscAppMinServiceLevel",
                table: "Dscreference");

            migrationBuilder.DropColumn(
                name: "DscPdfViewerSetting",
                table: "Dscreference");

            migrationBuilder.AlterColumn<string>(
                name: "Environment",
                table: "Dscreference",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DscMinStorageServiceLevel",
                table: "Dscreference",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DscDbVersion",
                table: "Dscreference",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DscDbServerEnvironment",
                table: "Dscreference",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DscDbMinServiceLevel",
                table: "Dscreference",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DscAppVersion",
                table: "Dscreference",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DscAppEnvironment",
                table: "Dscreference",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DscAppLicenceExpiryDate",
                table: "Dscreference",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DscSslExpiryDate",
                table: "Dscreference",
                nullable: true);
        }
    }
}
