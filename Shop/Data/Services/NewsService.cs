using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.Services
{
    public class NewsService
    {
        private readonly AppDbContext _context;
        public NewsService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<News> GetNews()
        {
            var news = _context.News;
            return news;
        }

        public void AddNews(News news)
        {
            var _news = new News()
            {
                Name = news.Name,   
                Publisher = news.Publisher,
                Description = news.Description,
                ShortDescription = news.ShortDescription,
                Image = news.Image,
                ReleaseDate = news.ReleaseDate,

            };

            _context.News.Add(_news);
            _context.SaveChanges();
        }

        public void DeleteNews(int id)
        {
            var news = _context.News.FirstOrDefault(b => b.Id == id);

            if (news != null)
            {
                _context.News.Remove(news);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception($"news with id: {id} not found");
            }
        }

        public News СhangeNews(News news)
        {
            var _news = _context.News.FirstOrDefault(n => n.Id == news.Id);


            if (_news != null)
            {
                _news.Name = news.Name;
                _news.Publisher = news.Publisher;
                _news.Description = news.Description;
                _news.ShortDescription = news.ShortDescription;
                _news.Image = news.Image;
                _news.ReleaseDate = news.ReleaseDate;

                _context.SaveChanges();
            }

            return _news;
        }
    }
}
