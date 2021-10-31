using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.ViesModel
{
    public class GameVM
    {
        public int Id_Game { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
        public string Developer { get; set; }
        public string Publisher { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public DateTime ReleaseDate { get; set; }

        public string Min_OS { get; set; }
        public string Min_Processor { get; set; }
        public string Min_Memory { get; set; }
        public string Min_Storage { get; set; }
        public string Min_DirectX { get; set; }
        public string Min_Graphics { get; set; }

        public string Rec_OS { get; set; }
        public string Rec_Processor { get; set; }
        public string Rec_Memory { get; set; }
        public string Rec_Storage { get; set; }
        public string Rec_DirectX { get; set; }
        public string Rec_Graphics { get; set; }


        public virtual ICollection<int> GenreIds { get; set; }
        public virtual ICollection<int> PlatformIds { get; set; }
    }
}
