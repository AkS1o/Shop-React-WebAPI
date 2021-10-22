using Shop.Data.Models;
using Shop.Data.ViesModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.Services
{
    public class GenreService
    {
        private readonly AppDbContext _context;
        public GenreService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Genre> GetGenres()
        {
            var genre = _context.Genres;
            return genre;
        }

        public void AddGenre(GenreVM genre)
        {
            var _genre = new Genre()
            {
                Name = genre.Name,

            };

            _context.Genres.Add(_genre);
            _context.SaveChanges();
        }

        public void DeleteGenre(int id)
        {
            var Genre = _context.Genres.FirstOrDefault(b => b.Id == id);
         
            if (Genre != null)
            {          
                _context.Genres.Remove(Genre);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception($"Genre with id: {id} not found");
            }
        }
    }
}
