using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.ViesModel
{
    public class BuyerVM
    {
        public int Buyer_Id { get; set; }
        public string Nickname { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Image { get; set; }

        public virtual ICollection<int> GamesIds { get; set; }
    }
}
