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
        [HttpPost("add-game")]
        public IActionResult AddGame([FromBody] GameVM game)
        {
            _gamesService.AddGame(game);
            return Ok();
        }

        [HttpDelete("delete-game/{id}")]
        public IActionResult DeleteGame(int id)
        {
            try
            {
                _gamesService.DeleteGame(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update-game")]
        public IActionResult СhangeGame([FromBody] GameVM game)
        {
            var updatedContact = _gamesService.СhangeGame(game);
            return Ok(updatedContact);
        }

        [HttpGet("get-games-pagination")]
        public IActionResult GetGamesPaginations(int pageNumber)
        {
            var gamesPaginations = _gamesService.GetGamesPaginations(pageNumber);
            return Ok(gamesPaginations);
        }
        [HttpGet("get-games-by-genre")]
        public IActionResult GetGamesbyGenre(int genreId)
        {
            var gamesgenre = _gamesService.GetGamesbyGenre(genreId);
            return Ok(gamesgenre);
        }
        [HttpGet("get-games-by-platform")]
        public IActionResult GetGamesbyPlatform(int platformId)
        {
            var gamesplatform = _gamesService.GetGamesbyPlatform(platformId);
            return Ok(gamesplatform);
        }

        [HttpGet("get-gamesVM")]
        public IActionResult GetGamesVM()
        {
            var gamse = _gamesService.GetGamesVM();
            return Ok(gamse);
        }



    }
}
