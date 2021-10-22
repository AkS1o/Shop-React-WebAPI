using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.Models
{
    public class GamePlatform
    {
        public int Id { get; set; }
        public int GameId { get; set; }
        public Game Game;
        public int PlatformId { get; set; }
        public Platform Platform;

    }

}
