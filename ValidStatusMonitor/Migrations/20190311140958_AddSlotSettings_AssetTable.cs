using Microsoft.EntityFrameworkCore.Migrations;

namespace ValidStatusMonitor.Migrations
{
    public partial class AddSlotSettings_AssetTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "HttpResponseE2eTest",
                table: "InstallationStatus",
                newName: "HTTP_RESPONSE_E2E_TEST");

            migrationBuilder.RenameColumn(
                name: "EndpointTestUri",
                table: "InstallationAssets",
                newName: "ENDPOINT_TEST_URI");

            migrationBuilder.AlterColumn<string>(
                name: "ENDPOINT_TEST_URI",
                table: "InstallationAssets",
                maxLength: 255,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SLOT_SETTING",
                table: "InstallationAssets",
                maxLength: 32,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SLOT_SETTING",
                table: "InstallationAssets");

            migrationBuilder.RenameColumn(
                name: "HTTP_RESPONSE_E2E_TEST",
                table: "InstallationStatus",
                newName: "HttpResponseE2eTest");

            migrationBuilder.RenameColumn(
                name: "ENDPOINT_TEST_URI",
                table: "InstallationAssets",
                newName: "EndpointTestUri");

            migrationBuilder.AlterColumn<string>(
                name: "EndpointTestUri",
                table: "InstallationAssets",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 255,
                oldNullable: true);
        }
    }
}
