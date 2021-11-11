using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Shop.Data.Models
{
    public class Buyer
    {
        [Key]
        public int Id { get; set; }
        public string Nickname { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        //[JsonIgnore]
        public string Password { get; set; }
        public string Email { get; set; }
        public string Image { get; set; }
        public bool ?isAdmin { get; set; }
        public virtual ICollection<Game> Games { get; set; }
    }
}
