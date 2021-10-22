using Shop.Data.Models;
using Shop.Data.ViesModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.Services
{
    public class GamesService
    {
        private readonly AppDbContext _context;
        public GamesService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Game> GetGames()
        {
            var games = _context.Games;
            return games;
        }

        public void AddGame(GameVM game)
        {            
             var _game = new Game()
            {
                Name = game.Name,
                Price = game.Price,
                Description = game.Description,
                Quantity = game.Quantity,
                Developer = game.Developer,
                Publisher = game.Publisher,
                Image = game.Image,
                ReleaseDate = game.ReleaseDate,
                Min_OS = game.Min_OS,
                Min_Processor = game.Min_Processor,
                Min_Memory = game.Min_Memory,
                Min_Storage = game.Min_Storage,
                Min_DirectX = game.Min_DirectX,
                Min_Graphics = game.Min_Graphics,
                Rec_OS = game.Rec_OS,
                Rec_Processor = game.Rec_Processor,
                Rec_Memory = game.Rec_Memory,
                Rec_Storage = game.Rec_Storage,
                Rec_DirectX = game.Rec_DirectX,
                Rec_Graphics = game.Rec_Graphics
             };
            _context.Games.Add(_game);  
            _context.SaveChanges();
            foreach (var id in game.GenreIds)
            {
                var _game_genre = new GameGenre()
                {
                    GameId = _game.Id,
                    GenreId = id
                };
                _context.GameGenres.Add(_game_genre);
                _context.SaveChanges();
            }

            foreach (var id in game.PlatformIds)
            {
                var _game_platform = new GamePlatform()
                {
                    GameId = _game.Id,
                PlatformId = id
                };
                _context.GamePlatforms.Add(_game_platform);
                _context.SaveChanges();
            }

        }

        public void DeleteGame(int id)
        {
            var game = _context.Games.FirstOrDefault(b => b.Id == id);
            if (game != null)
            {

                _context.Games.Remove(game);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception($"Game with id: {id} not found");
            }
        }
        public Game СhangeGame(GameVM game,int id)
        {
            var _game = _context.Games.FirstOrDefault(n => n.Id == id);
            var _genre = _context.GameGenres;
            var _platform = _context.GamePlatforms;

            if (_game != null)
            { 
                _game.Name = game.Name;
                _game.Price = game.Price;
                _game.Description = game.Description;
                _game.Quantity = game.Quantity;
                _game.Developer = game.Developer;
                _game.Publisher = game.Publisher;
                _game.Description = game.Description;
                _game.Image = game.Image;
                _game.ReleaseDate = game.ReleaseDate;
                _game.Min_OS = game.Min_OS;
                _game.Min_Processor = game.Min_Processor;
                _game.Min_Memory = game.Min_Memory;
                _game.Min_Storage = game.Min_Storage;
                _game.Min_DirectX = game.Min_DirectX;
                _game.Min_Graphics = game.Min_Graphics;
                _game.Rec_OS = game.Rec_OS;
                _game.Rec_Processor = game.Rec_Processor;
                _game.Rec_Memory = game.Rec_Memory;
                _game.Rec_Storage = game.Rec_Storage;
                _game.Rec_DirectX = game.Rec_DirectX;
                _game.Rec_Graphics = game.Rec_Graphics;

              
                    foreach (var tx in _genre)
                    {
                        if (tx.GameId == id) { _context.GameGenres.Remove(tx); }
                    }
                    _context.SaveChanges();

                    foreach (var iD in game.GenreIds)
                    {
                        var _game_genre = new GameGenre()
                        {
                            GameId = _game.Id,
                            GenreId = iD
                        };
                        _context.GameGenres.Add(_game_genre);
                    }
                

                _context.SaveChanges();


                foreach (var tx in _platform)
                {
                    if (tx.GameId == id) { _context.GamePlatforms.Remove(tx); }
                }
                _context.SaveChanges();

                foreach (var iD in game.PlatformIds)
                {
                    var _game_platform = new GamePlatform()
                    {
                        GameId = _game.Id,
                        PlatformId = iD
                    };
                    _context.GamePlatforms.Add(_game_platform);
                }
                _context.SaveChanges();
            }
           
            return _game;
        }

    }
}
