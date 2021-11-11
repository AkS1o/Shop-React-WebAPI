using Shop.Data.Models;
using Shop.Data.ViesModel;
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

        public IEnumerable<BuyerVM> GetbuyersVM()
        {
            var buyers = _context.Buyers;
            var buyersList = buyers.ToList();
            List<BuyerVM> buyerListVM = new List<BuyerVM>();
            foreach (var item in buyersList)
            {
                BuyerVM buyer = new BuyerVM()
                {
                    Buyer_Id = item.Id,
                    Name = item.Name,
                    Surname = item.Surname,
                    Nickname = item.Nickname,
                    Email = item.Email,
                    Password = item.Password,
                    Image = item.Image,
                    isAdmin = item.isAdmin,
                    GamesIds = new List<int>(),
                };
                buyerListVM.Add(buyer);
            }

            return buyerListVM;
        }

        public void AddBuyers(Buyer buyer)
        {
            var _buyer = new Buyer()
            {
                Nickname = buyer.Nickname,
                Name = buyer.Name,
                Surname = buyer.Surname,
                Password = buyer.Password,
                Email = buyer.Email,
                Image = buyer.Image,
                isAdmin = buyer.isAdmin,
            };

            _context.Buyers.Add(_buyer);
            _context.SaveChanges();
        }
    }
}
