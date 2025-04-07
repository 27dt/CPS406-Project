using Microsoft.EntityFrameworkCore;
using BackendApi.Models;

namespace BackendApi.Repositories {
    public class UserRepository : IUserRepository {
        private readonly AppDbContext _context;

        // Establishes connection to DbContext to call database queries.
        public UserRepository(AppDbContext context) {
            _context = context;
        }

        // Gets list of all users.
        public async Task<List<User>> GetAllAsync() {
            return await _context.users.ToListAsync();
        }

        // Gets specific user of given uid.
        public async Task<User?> GetByIdAsync(int uid) {
            return await _context.users.FindAsync(uid);
        }

        // Adds specified user object as new user entry in table.
        public async Task AddAsync(User user) {
            await _context.users.AddAsync(user);
            await _context.SaveChangesAsync();
        }

        // Updates user values of specified uid in table.
        public async Task UpdateAsync(User user) {
            _context.users.Update(user);
            await _context.SaveChangesAsync();
        }

        // Deletes user of specified uid in table.
        public async Task DeleteAsync(int uid) {
            var user = await _context.users.FindAsync(uid);

            if (user != null) {
                _context.users.Remove(user);
                await _context.SaveChangesAsync();
            }
        }

        // Uses a login payload (user, pass) to match to a user in the table.
        public async Task<bool> LoginUser(Login payload) {
            var user = await _context.users.Where(t => t.password == payload.password && t.username == payload.username).FirstAsync();

            if (user != null) {
                return true;
            }
            return false;
        }
    }
}