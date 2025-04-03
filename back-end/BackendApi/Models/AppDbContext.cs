using Microsoft.EntityFrameworkCore;

namespace BackendApi.Models {
    public class AppDbContext : DbContext {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

        public DbSet<User> users { get; set; }

        public DbSet<Game> games { get; set; }
    }
}