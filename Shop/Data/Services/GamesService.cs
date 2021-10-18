using Shop.Data.Models;
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
    }
}
