using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shop.Data;
using Shop.Data.Models;
using Shop.Data.Services;
using Shop.Data.ViesModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Shop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
      
        private readonly JwtService _jwtService;
        public readonly AuthService _authService;      
        private readonly AppDbContext _context;
  
        public AuthController(AuthService authService, AppDbContext context, JwtService jwtService)
        {
            _authService = authService;
            _context = context;
            _jwtService = jwtService;
        }

        [HttpGet("get-buyers")]
        public IActionResult Getbuyers()
        {
            var buyers = _authService.GetBuyers();
            return Ok(buyers);
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] Buyer buyer)
        {
            _authService.Register(buyer);
            return Ok();
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] Buyer buyer)
        {
            var user = _context.Buyers.FirstOrDefault(b => b.Email == buyer.Email);
            if (user is null)
            {
                return BadRequest("Invalid login or password");
            }
            if (!BCrypt.Net.BCrypt.Verify(buyer.Password, user.Password))
            {
                return BadRequest("Invalid login or password");
            }
            //_authService.Login(buyer);

            //var user = _context.Buyers.FirstOrDefault(b => b.Email == buyer.Email);

            var jwt = _jwtService.Generate(user.Id);

            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true
            });

            return Ok();
        }

        [HttpGet("user")]
        public IActionResult User()
        {
            try
            {
                var jwt = Request.Cookies["jwt"];
                var token = _jwtService.Virify(jwt);
                var userId = int.Parse(token.Issuer);
                var user = _context.Buyers.FirstOrDefault(u=> u.Id == userId);
                return Ok(user);
            }
            catch (Exception)
            {
                return Unauthorized();
            }
        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");
            return Ok(new
            {
                message = "Success"
            });
        }


        [HttpPut("update-buyer")]
        public IActionResult СhangeNews([FromBody] Buyer buyer)
        {
            var updatenews = _authService.СhangeBuyer(buyer);
            return Ok(updatenews);
        }

    }
}
