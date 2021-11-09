using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop.Migrations
{
    public partial class fixBuyer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Hickname",
                table: "Buyers",
                newName: "Nickname");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Buyers",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Buyers_Email",
                table: "Buyers",
                column: "Email",
                unique: true,
                filter: "[Email] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Buyers_Email",
                table: "Buyers");

            migrationBuilder.RenameColumn(
                name: "Nickname",
                table: "Buyers",
                newName: "Hickname");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Buyers",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);
        }
    }
}
