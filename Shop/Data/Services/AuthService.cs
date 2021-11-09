using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Shop.Data.Services
{
    public class AuthService : ControllerBase
    {

        private readonly AppDbContext _context;
        private readonly JwtService _jwtService;
        public AuthService(AppDbContext context, JwtService jwtService)
        {
            _context = context;
           _jwtService = jwtService;
        }

        public IEnumerable<Buyer> GetBuyers()
        {
            var buyers = _context.Buyers;
            return buyers;
        }

        public void Register(Buyer buyer)
        {     
            var _buyer = new Buyer()
            {
                Nickname = buyer.Nickname,
                Name = buyer.Name,
                Surname = buyer.Surname,
                Password = BCrypt.Net.BCrypt.HashPassword(buyer.Password),
                Email = buyer.Email,
                Image = buyer.Image,
            };

            _context.Buyers.Add(_buyer);
            _context.SaveChanges();
        }
    }
}
