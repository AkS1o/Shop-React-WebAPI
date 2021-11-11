using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.Configurations
{
    public class BuyerConfig : EntityTypeConfiguration<Buyer>
    {
        public BuyerConfig() 
        {
            this.HasKey(e => e.Id);
            this.Property(p => p.Name).HasMaxLength(15).IsRequired();
            this.Property(p => p.Nickname).HasMaxLength(30).IsRequired();
            this.Property(p => p.Surname).HasMaxLength(30).IsRequired();
            this.Property(p => p.Password).HasMaxLength(15).IsRequired();
            this.Property(p => p.Email).HasMaxLength(15).IsRequired();
        }
    }
}
