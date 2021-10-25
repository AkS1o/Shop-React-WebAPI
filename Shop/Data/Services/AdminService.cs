using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.Services
{
    public class AdminService
    {
        private readonly AppDbContext _context;
        public AdminService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Admin> GetAdmins()
        {
            var admins = _context.Admins;
            return admins;
        }

        public void AddAdmins(Admin admin)
        {
            var _admin = new Admin()
            {
                Hickname = admin.Hickname,
                Name = admin.Name,
                Surname = admin.Surname,
                Password = admin.Password,
                Email = admin.Email,
                Image = admin.Image,
            };

            _context.Admins.Add(_admin);
            _context.SaveChanges();
        }

        public void Deleteadmin(int id)
        {
            var admin = _context.Admins.FirstOrDefault(b => b.Id == id);
            if (admin != null)
            {
                _context.Admins.Remove(admin);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception($"admin with id: {id} not found");
            }
        }

        public Admin Сhangeadmin(Admin admin)
        {
            var _admin = _context.Admins.FirstOrDefault(n => n.Id == admin.Id);


            if (_admin != null)
            {
                _admin.Hickname = admin.Hickname;
                _admin.Name = admin.Name;       
                _admin.Surname = admin.Surname;
                _admin.Password = admin.Password;
                _admin.Email = admin.Email;
                _admin.Image = admin.Image;
                      
                _context.SaveChanges();
            }
                
            return _admin;
        }


    }
}
