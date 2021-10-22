using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.Models
{
    public class Platform
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<GamePlatform> GamePlatforms { get; set; }
    }
}
