using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ValidStatusMonitor.Migrations
{
    public partial class AddFkStatusToAssetId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<Guid>(
                name: "ID",
                table: "InstallationStatus",
                nullable: false,
                oldClrType: typeof(Guid),
                oldDefaultValueSql: "(newid())");

            migrationBuilder.AddForeignKey(
                name: "FK_InstallationStatus_InstallationAssets_ID",
                table: "InstallationStatus",
                column: "ID",
                principalTable: "InstallationAssets",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InstallationStatus_InstallationAssets_ID",
                table: "InstallationStatus");

            migrationBuilder.AlterColumn<Guid>(
                name: "ID",
                table: "InstallationStatus",
                nullable: false,
                defaultValueSql: "(newid())",
                oldClrType: typeof(Guid));
        }
    }
}
