using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop.Migrations
{
    public partial class addIntroImage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "IntroImage",
                table: "Games",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IntroImage",
                table: "Games");
        }
    }
}
