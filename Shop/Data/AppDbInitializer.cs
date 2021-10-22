using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data
{
    public class AppDbInitializer
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<AppDbContext>();

                if (!context.Games.Any())
                {
                    Genre genre1 = new Genre() { Name = "Шутер" };
                    Genre genre2 = new Genre() { Name = "MMORPG" };
                    Genre genre3 = new Genre() { Name = "BattleRoyale" };
                    Genre genre4 = new Genre() { Name = "Стратегія" };

                    Platform platform1 = new Platform() { Name = "XBox" };
                    Platform platform2 = new Platform() { Name = "PC" };
                    Platform platform3 = new Platform() { Name = "PS4" };
                    Platform platform4 = new Platform() { Name = "flex" };

                    context.Genres.AddRange(genre1, genre2, genre3, genre4);
                    context.Platforms.AddRange(platform1, platform2, platform3, platform4);
                  
                    context.SaveChanges();
                }
            }
        }
    }
}




