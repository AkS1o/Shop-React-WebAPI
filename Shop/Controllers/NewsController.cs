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
    public class NewsController : ControllerBase
    {
        public NewsService _newsService;

        public NewsController(NewsService newsService)
        {
            _newsService = newsService;
        }

        [HttpGet("get-news")]
        public IActionResult GetNews()
        {
            var news = _newsService.GetNews();
            return Ok(news);
        }

        [HttpPost("add-news")]
        public IActionResult AddNews([FromBody] News news)
        {
            _newsService.AddNews(news);
            return Ok();
        }

        [HttpDelete("delete-news/{id}")]
        public IActionResult DeleteNews(int id)
        {
            try
            {
                _newsService.DeleteNews(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update-news")]
        public IActionResult СhangeNews([FromBody] News news)
        {
            var updatenews = _newsService.СhangeNews(news);
            return Ok(updatenews);
        }
    }
}
