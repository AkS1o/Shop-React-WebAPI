using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop.Migrations
{
    public partial class changeBuyer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isAdmin",
                table: "Buyers",
                type: "bit",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isAdmin",
                table: "Buyers");
        }
    }
}
