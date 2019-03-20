using Microsoft.EntityFrameworkCore.Migrations;

namespace ValidStatusMonitor.Migrations
{
    public partial class AddSlotSetting_StatusTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SLOT_SETTING",
                table: "InstallationStatus",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SLOT_SETTING",
                table: "InstallationStatus");
        }
    }
}
