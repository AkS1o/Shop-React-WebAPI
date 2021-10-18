using Microsoft.AspNetCore.Mvc;
using Shop.Data.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        public GamesService _gamesService;

        public GamesController(GamesService gamesService)
        {
            _gamesService = gamesService;
        }

        [HttpGet("get-games")]
        public IActionResult GetGames()
        {
            var gamse = _gamesService.GetGames();
            return Ok(gamse);
        }
    }
}
