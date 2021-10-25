using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.Services
{
    public class BuyerService
    {
        private readonly AppDbContext _context;
        public BuyerService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Buyer> Getbuyers()
        {
            var buyers = _context.Buyers;
            return buyers;
        }

        public void AddBuyers(Buyer buyer)
        {
            var _buyer = new Buyer()
            {
                Hickname = buyer.Hickname,
                Name = buyer.Name,
                Surname = buyer.Surname,
                Password = buyer.Password,
                Email = buyer.Email,
                Image = buyer.Image,
            };

            _context.Buyers.Add(_buyer);
            _context.SaveChanges();
        }
    }
}
