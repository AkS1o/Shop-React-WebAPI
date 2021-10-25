using Shop.Data.Models;
using Shop.Data.ViesModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.Services
{
    public class PlatformService
    {
        private readonly AppDbContext _context;
        public PlatformService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Platform> GetPlatforms()
        {
            var platform = _context.Platforms;
            return platform;
        }

        public void AddPlatforms(PlatformVM platform)
        {
            var _platform = new Platform()
            {
                Name = platform.Name,

            };

            _context.Platforms.Add(_platform);
            _context.SaveChanges();
        }

        public void DeletePlatforms(int id)
        {
            var platform = _context.Platforms.FirstOrDefault(b => b.Id == id);

            if (platform != null)
            {
                _context.Platforms.Remove(platform);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception($"Platforms with id: {id} not found");
            }
        }
    }
}
