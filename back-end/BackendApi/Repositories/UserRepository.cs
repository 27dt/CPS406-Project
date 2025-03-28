using Microsoft.EntityFrameworkCore;
using BackendApi.Models;

namespace BackendApi.Repositories {
    public class UserRepository : IUserRepository {
        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context) {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetAllAsync() {
            return await _context.Users.ToListAsync();
        }

        public async Task<User?> GetByIdAsync(int uid) {
            return await _context.Users.FindAsync(uid);
        }

        public async Task AddAsync(User user) {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(User user) {
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int uid) {
            var user = await _context.Users.FindAsync(uid);

            if (user != null) {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }
        }
    }
}