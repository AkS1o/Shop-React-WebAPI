using Microsoft.AspNetCore.Mvc;
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
    public class BuyersController : ControllerBase
    {
        public BuyerService _buyersService;

        public BuyersController(BuyerService buyersService)
        {
            _buyersService = buyersService;
        }

        [HttpGet("get-buyers")]
        public IActionResult Getbuyers()
        {
            var buyers = _buyersService.Getbuyers();
            return Ok(buyers);
        }

        [HttpPost("add-buyers")]
        public IActionResult Addbuyer([FromBody] Buyer buyer)
        {
            _buyersService.AddBuyers(buyer);
            return Ok();
        }
    }
}
