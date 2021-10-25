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
    public class AdminsController : ControllerBase
    {
        public AdminService _adminsService;

        public AdminsController(AdminService adminsService)
        {
            _adminsService = adminsService;
        }

        [HttpGet("get-admins")]
        public IActionResult GetGames()
        {
            var admins = _adminsService.GetAdmins();
            return Ok(admins);
        }

        [HttpPost("add-admins")]
        public IActionResult Addadmin([FromBody] Admin admin)
        {
            _adminsService.AddAdmins(admin);
            return Ok();
        }

        [HttpDelete("delete-admin/{id}")]
        public IActionResult Deleteadmin(int id)
        {
            try
            {
                _adminsService.Deleteadmin(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update-admin")]
        public IActionResult СhangeGame([FromBody] Admin admin)
        {
            var updatedadmin = _adminsService.Сhangeadmin(admin);
            return Ok(updatedadmin);
        }
    }
}
