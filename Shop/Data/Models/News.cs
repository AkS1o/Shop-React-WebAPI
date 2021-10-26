using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.Models
{
    public class News
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Publisher { get; set; }
        public string Description { get; set; }
        public string ShortDescription { get; set; }
        public string Image { get; set; }
        public DateTime ReleaseDate { get; set; }

    }
}
