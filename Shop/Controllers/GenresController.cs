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
    public class GenresController : ControllerBase
    {
        public GenreService _genersService;

        public GenresController(GenreService genersService)
        {
            _genersService = genersService;
        }

        [HttpGet("get-genres")]
        public IActionResult GetGenres()
        {
            var genres = _genersService.GetGenres();
            return Ok(genres);
        }
        [HttpPost("add-genres")]
        public IActionResult AddGenre([FromBody] GenreVM genre)
        {
            _genersService.AddGenre(genre);
            return Ok();
        }
        [HttpDelete("delete-genre/{id}")]
        public IActionResult DeleteGame(int id)
        {
            try
            {
                _genersService.DeleteGenre(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
