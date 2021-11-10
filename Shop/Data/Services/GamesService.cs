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
                IntroImage = game.IntroImage,
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

            }
            _context.SaveChanges();
            foreach (var id in game.PlatformIds)
            {
                var _game_platform = new GamePlatform()
                {
                    GameId = _game.Id,
                    PlatformId = id
                };
                _context.GamePlatforms.Add(_game_platform);
               
            }
            _context.SaveChanges();
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
        public Game СhangeGame(GameVM game)
        {
            var _game = _context.Games.FirstOrDefault(n => n.Id == game.Id_Game);
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
                _game.IntroImage = game.IntroImage;
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
                    if (tx.GameId == game.Id_Game) { _context.GameGenres.Remove(tx); }
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
                    if (tx.GameId == game.Id_Game) { _context.GamePlatforms.Remove(tx); }
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


        public GamePaginationVM GetGamesPaginations(int pageNumber)
        {

            GamePaginationVM gamePaginationVM = new GamePaginationVM();

            IEnumerable<Game> games = _context.Games.ToArray();



            gamePaginationVM.CountGames = games.Count();

            decimal count = gamePaginationVM.CountGames / 8;
            gamePaginationVM.PageAll = Convert.ToInt32(Math.Ceiling(count));
            gamePaginationVM.PageActive = pageNumber + 1;

            if (pageNumber == 0)
            {
                gamePaginationVM.Games = games.Take(8).ToList();
            }
            else
            {
                gamePaginationVM.Games = games.Skip(8 * pageNumber).Take(8).ToList();
            }

            return gamePaginationVM;
        }


        public GamePaginationVM GetGamesbyGenre(int genreId)
        {

            GamePaginationVM gamePaginationVM = new GamePaginationVM();
            IEnumerable<Game> games = _context.Games.ToArray();
            IEnumerable<GameGenre> gameGenre = _context.GameGenres.ToArray();
            List<Game> sortedGames = new List<Game>();

            foreach (var item1 in games)
            {
                foreach (var item2 in gameGenre)
                {
                    if (item2.GenreId == genreId && item1.Id == item2.GameId) { sortedGames.Add(item1); }
                }
            }

            gamePaginationVM.Games = sortedGames.ToList();

            return gamePaginationVM;
        }


        public GamePaginationVM GetGamesbyPlatform(int platformId)
        {

            GamePaginationVM gamePaginationVM = new GamePaginationVM();
            IEnumerable<Game> games = _context.Games.ToArray();
            IEnumerable<GamePlatform> gameplatform = _context.GamePlatforms.ToArray();
            List<Game> sortedGames = new List<Game>();

            foreach (var item1 in games)
            {
                foreach (var item2 in gameplatform)
                {
                    if (item2.PlatformId == platformId && item1.Id == item2.GameId) { sortedGames.Add(item1); }
                }
            }

            gamePaginationVM.Games = sortedGames.ToList();

            return gamePaginationVM;
        }

        public IEnumerable<GameVM> GetGamesVM()
        {
            var games = _context.Games;
            var gameGenres = _context.GameGenres;
            var gamePlatform = _context.GamePlatforms;
            var gamesList = games.ToList();
            var gameGenresList = gameGenres.ToList();
            var gamePlatformList = gamePlatform.ToList();
            List<GameVM> gamesVM = new List<GameVM>();
            foreach (var item in gamesList)
            {
                var gameVM = new GameVM();
                gameVM.Id_Game = item.Id;
                gameVM.Name = item.Name;
                gameVM.Price = item.Price;
                gameVM.Description = item.Description;
                gameVM.Quantity = item.Quantity;
                gameVM.Developer = item.Developer;
                gameVM.Publisher = item.Publisher;
                gameVM.Image = item.Image;
                gameVM.IntroImage = item.IntroImage;
                gameVM.ReleaseDate = item.ReleaseDate;
                gameVM.Min_OS = item.Min_OS;
                gameVM.Min_Processor = item.Min_Processor;
                gameVM.Min_Memory = item.Min_Memory;
                gameVM.Min_Storage = item.Min_Storage;
                gameVM.Min_DirectX = item.Min_DirectX;
                gameVM.Min_Graphics = item.Min_Graphics;
                gameVM.Rec_OS = item.Rec_OS;
                gameVM.Rec_Processor = item.Rec_Processor;
                gameVM.Rec_Memory = item.Rec_Memory;
                gameVM.Rec_Storage = item.Rec_Storage;
                gameVM.Rec_DirectX = item.Rec_DirectX;
                gameVM.Rec_Graphics = item.Rec_Graphics;

                List<int> _GenreIds = new List<int>();
                foreach (var item2 in gameGenresList)
                {
                    if (item.Id == item2.GameId)
                    {

                        _GenreIds.Add(item2.GenreId);

                    }
                }
                gameVM.GenreIds = _GenreIds;
                List<int> _PlatformIds = new List<int>();
                foreach (var item2 in gamePlatformList)
                {
                    if (item.Id == item2.GameId)
                    {

                        _PlatformIds.Add(item2.PlatformId);

                    }
                }
                gameVM.PlatformIds = _PlatformIds;
                gamesVM.Add(gameVM);
            }
            return gamesVM;
        }




    }
}
