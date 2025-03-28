using Microsoft.EntityFrameworkCore;
using BackendApi.Models;

namespace BackendApi.Repositories {
    public class UserRepository : IUserRepository {
        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context) {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetAllAsync() {
            return await _context.users.ToListAsync();
        }

        public async Task<User?> GetByIdAsync(int uid) {
            return await _context.users.FindAsync(uid);
        }

        public async Task AddAsync(User user) {
            await _context.users.AddAsync(user);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateAsync(User user) {
            _context.users.Update(user);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int uid) {
            var user = await _context.users.FindAsync(uid);

            if (user != null) {
                _context.users.Remove(user);
                await _context.SaveChangesAsync();
            }
        }
    }
}