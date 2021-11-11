using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.Configurations
{
    public class NewsConfig : EntityTypeConfiguration<News>
    {
        public NewsConfig()
        {
            this.HasKey(e => e.Id);
            this.Property(p => p.Name).HasMaxLength(15).IsRequired();
            this.Property(p => p.Publisher).HasMaxLength(30).IsRequired();   
        }
    }
}
