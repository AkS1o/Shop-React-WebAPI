using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        [Range(0, 5)]
        public double Rating { get; set; }
        public int Price { get; set; }
        public string Publisher { get; set; }
        public DateTime Date { get; set; }
        public string Image { get; set; }
        public ICollection<Genre> Genres { get; set; }
    }
}
