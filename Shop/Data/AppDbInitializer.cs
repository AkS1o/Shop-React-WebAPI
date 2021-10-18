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
                    Genre WyterGenre = new Genre() { Name = "Шутер" };
                    context.Genres.Add(WyterGenre);
                    Genre StrategyGenre = new Genre() { Name = "Стратегія" };
                    context.Genres.Add(StrategyGenre);
                    Genre MMORPGGenre = new Genre() { Name = "MMORPG" };
                    context.Genres.Add(MMORPGGenre);
                    Genre BattleRoyaleGenre = new Genre() { Name = "BattleRoyale" };
                    context.Genres.Add(BattleRoyaleGenre);
                    context.SaveChanges();

                    //context.Games.Add(
                    Game game1 = new Game()
                    {
                        Name = "FIFA 22",
                        ShortDescription = "Максимальное время ожидания ключа - до 5 часов. Если вы приобрели продукт с 21.00 до 10.00 по Московскому времени, то ваш заказ будет укомплектован после 10.00.",
                        Description = "Встречайте 2022 год криками с трибун! Один из самых популярнейших видов спорта обрёл своё виртуальное воплощение в новой игре от Electronic Arts! Спешите купить FIFA 22 и построить захватывающую футбольную карьеру теперь и с поддержкой геймпадов DUALSHOCK 4 и контроллеров от Xbox! С каждым годом серия FIFA хорошеет, как внешне, так и технически, поражая воображение всякого поклонника яркой и правдоподобной картинки, не говоря уж о достойном воплощении физических возможностей игрового движка! Новый сезон гарантирует вам достойные испытания, широкие возможности кастомизации, а также старый добрый товарищеский дух соревнований в сетевых играх! И помните, это всё лишь только начало!",
                        Rating = 0,
                        Price = 3339,
                        Publisher = "Electronic Arts",
                        Date = new DateTime(30, 09, 2021),
                        Image = ""
                    };
                    game1.Genres.Add(WyterGenre);
                    game1.Genres.Add(MMORPGGenre);
                    context.Games.Add(game1);
                    context.SaveChanges();

                    Game game2 = new Game()
                    {
                        Name = "FIFA 22",
                        ShortDescription = "Максимальное время ожидания ключа - до 5 часов. Если вы приобрели продукт с 21.00 до 10.00 по Московскому времени, то ваш заказ будет укомплектован после 10.00.",
                        Description = "Встречайте 2022 год криками с трибун! Один из самых популярнейших видов спорта обрёл своё виртуальное воплощение в новой игре от Electronic Arts! Спешите купить FIFA 22 и построить захватывающую футбольную карьеру теперь и с поддержкой геймпадов DUALSHOCK 4 и контроллеров от Xbox! С каждым годом серия FIFA хорошеет, как внешне, так и технически, поражая воображение всякого поклонника яркой и правдоподобной картинки, не говоря уж о достойном воплощении физических возможностей игрового движка! Новый сезон гарантирует вам достойные испытания, широкие возможности кастомизации, а также старый добрый товарищеский дух соревнований в сетевых играх! И помните, это всё лишь только начало!",
                        Rating = 0,
                        Price = 3339,
                        Publisher = "Electronic Arts",
                        Date = new DateTime(30, 09, 2021),
                        Image = ""
                    };
                    game2.Genres.Add(WyterGenre);
                    game2.Genres.Add(BattleRoyaleGenre);
                    context.Games.Add(game2);
                    context.SaveChanges();

                    Game game3 = new Game()
                    {
                        Name = "FIFA 22",
                        ShortDescription = "Максимальное время ожидания ключа - до 5 часов. Если вы приобрели продукт с 21.00 до 10.00 по Московскому времени, то ваш заказ будет укомплектован после 10.00.",
                        Description = "Встречайте 2022 год криками с трибун! Один из самых популярнейших видов спорта обрёл своё виртуальное воплощение в новой игре от Electronic Arts! Спешите купить FIFA 22 и построить захватывающую футбольную карьеру теперь и с поддержкой геймпадов DUALSHOCK 4 и контроллеров от Xbox! С каждым годом серия FIFA хорошеет, как внешне, так и технически, поражая воображение всякого поклонника яркой и правдоподобной картинки, не говоря уж о достойном воплощении физических возможностей игрового движка! Новый сезон гарантирует вам достойные испытания, широкие возможности кастомизации, а также старый добрый товарищеский дух соревнований в сетевых играх! И помните, это всё лишь только начало!",
                        Rating = 0,
                        Price = 3339,
                        Publisher = "Electronic Arts",
                        Date = new DateTime(30, 09, 2021),
                        Image = ""
                    };
                    game3.Genres.Add(WyterGenre);
                    game3.Genres.Add(BattleRoyaleGenre);
                    context.Games.Add(game3);
                    context.SaveChanges();

                    Game game4 = new Game()
                    {
                        Name = "FIFA 22",
                        ShortDescription = "Максимальное время ожидания ключа - до 5 часов. Если вы приобрели продукт с 21.00 до 10.00 по Московскому времени, то ваш заказ будет укомплектован после 10.00.",
                        Description = "Встречайте 2022 год криками с трибун! Один из самых популярнейших видов спорта обрёл своё виртуальное воплощение в новой игре от Electronic Arts! Спешите купить FIFA 22 и построить захватывающую футбольную карьеру теперь и с поддержкой геймпадов DUALSHOCK 4 и контроллеров от Xbox! С каждым годом серия FIFA хорошеет, как внешне, так и технически, поражая воображение всякого поклонника яркой и правдоподобной картинки, не говоря уж о достойном воплощении физических возможностей игрового движка! Новый сезон гарантирует вам достойные испытания, широкие возможности кастомизации, а также старый добрый товарищеский дух соревнований в сетевых играх! И помните, это всё лишь только начало!",
                        Rating = 0,
                        Price = 3339,
                        Publisher = "Electronic Arts",
                        Date = new DateTime(30, 09, 2021),
                        Image = ""
                    };
                    game4.Genres.Add(WyterGenre);
                    game4.Genres.Add(BattleRoyaleGenre);
                    context.Games.Add(game4);
                    context.SaveChanges();
                    //new Game()
                    //{
                    //    Name = "Karton Anton",
                    //    Phone = "+1-800-700-9898",
                    //    Email = "ka@gmain.com",
                    //    Status = "Friends",
                    //    Gender = "men",
                    //    Image = 1
                    //},
                    //new Game()
                    //{
                    //    Name = "Anna Lee",
                    //    Phone = "+1-800-800-9898",
                    //    Email = "al@gmain.com",
                    //    Status = "Private",
                    //    Gender = "women",
                    //    Image = 0
                    //},
                    //new Game()
                    //{
                    //    Name = "Olga Verdnam",
                    //    Phone = "+1-800-900-9898",
                    //    Email = "ov@gmain.com",
                    //    Status = "Family",
                    //    Gender = "women",
                    //    Image = 1

                    //});
                    //new Game()
                    //{
                    //    Name = "Olga Verdnam",
                    //    Phone = "+1-800-900-9898",
                    //    Email = "ov@gmain.com",
                    //    Status = "Family",
                    //    Gender = "women",
                    //    Image = 1

                    //});
                    //new Game()
                    //{
                    //    Name = "Olga Verdnam",
                    //    Phone = "+1-800-900-9898",
                    //    Email = "ov@gmain.com",
                    //    Status = "Family",
                    //    Gender = "women",
                    //    Image = 1

                    //});
                    //new Game()
                    //{
                    //    Name = "Olga Verdnam",
                    //    Phone = "+1-800-900-9898",
                    //    Email = "ov@gmain.com",
                    //    Status = "Family",
                    //    Gender = "women",
                    //    Image = 1

                    //});
                    context.SaveChanges();
                }
            }
        }
    }
}
