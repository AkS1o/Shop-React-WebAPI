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
    public class PlatformController : ControllerBase
    {
        public PlatformService _platformService;

        public PlatformController(PlatformService platformsService)
        {
            _platformService = platformsService;
        }

        [HttpGet("get-platforms")]
        public IActionResult GetPlatforms()
        {
            var platforms = _platformService.GetPlatforms();
            return Ok(platforms);
        }

        [HttpPost("add-platforms")]
        public IActionResult AddPlatforms([FromBody] PlatformVM platform)
        {
            _platformService.AddPlatforms(platform);
            return Ok();
        }

        [HttpDelete("delete-platform/{id}")]
        public IActionResult DeletePlatform(int id)
        {
            try
            {
                _platformService.DeletPlatforms(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
