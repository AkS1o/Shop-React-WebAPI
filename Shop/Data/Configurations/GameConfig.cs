using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Data.Configurations
{
    public class GameConfig : EntityTypeConfiguration<Game>
    {
        public GameConfig()
        {
            this.HasKey(e => e.Id);
            this.Property(p => p.Name).HasMaxLength(15).IsRequired();
            this.Property(p => p.Developer).HasMaxLength(20).IsRequired();
            this.Property(p => p.Publisher).HasMaxLength(20).IsRequired();
            this.Property(p => p.Description).IsRequired();

            this.Property(p => p.Min_OS).HasMaxLength(20).IsRequired();
            this.Property(p => p.Min_Processor).HasMaxLength(20).IsRequired();
            this.Property(p => p.Min_Memory).HasMaxLength(20).IsRequired();
            this.Property(p => p.Min_Storage).HasMaxLength(20).IsRequired();
            this.Property(p => p.Min_DirectX).HasMaxLength(20).IsRequired();
            this.Property(p => p.Min_Graphics).HasMaxLength(20).IsRequired();

            this.Property(p => p.Rec_OS).HasMaxLength(20).IsRequired();
            this.Property(p => p.Rec_Processor).HasMaxLength(20).IsRequired();
            this.Property(p => p.Rec_Memory).HasMaxLength(20).IsRequired();
            this.Property(p => p.Rec_Storage).HasMaxLength(20).IsRequired();
            this.Property(p => p.Rec_DirectX).HasMaxLength(20).IsRequired();
            this.Property(p => p.Rec_Graphics).HasMaxLength(20).IsRequired();
        }
    }
}
