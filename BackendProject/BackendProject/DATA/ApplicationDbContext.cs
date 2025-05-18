using BackendProject.MODEL;
using Microsoft.EntityFrameworkCore;

namespace BackendProject.DATA
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options):base(options)
        {
            
        }
        public DbSet<VehicleDtl>VehicleDtls { get; set; }
        public DbSet<Admin>Admins { get; set; }
        public DbSet<Bookindtl>Bookindtl { get; set; }
        public DbSet<Userdtl>Userdtl { get; set; }
    }
}
