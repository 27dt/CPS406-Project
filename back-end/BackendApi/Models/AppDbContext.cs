using Microsoft.EntityFrameworkCore;

namespace BackendApi.Models {
    public class AppDbContext : DbContext {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

        // Establishes data sets to work with (corresponding database tables).
        public DbSet<User> users { get; set; }

        public DbSet<Game> games { get; set; }

        public DbSet<Rating> ratings { get; set; }
    }
}