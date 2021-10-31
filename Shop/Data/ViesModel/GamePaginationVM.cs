using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.ViesModel
{
    public class GamePaginationVM
    {
        public int CountGames { get; set; }

        public int PageActive { get; set; }

        public int PageAll { get; set; }

        public List<Game> Games { get; set; }
    }
}
