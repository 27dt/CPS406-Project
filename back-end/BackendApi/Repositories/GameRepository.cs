using Microsoft.EntityFrameworkCore;
using BackendApi.Models;

namespace BackendApi.Repositories {
    public class GameRepository : IGameRepository {
        
        private readonly AppDbContext _context;

        // Establishes connection to DbContext to call database queries.
        public GameRepository(AppDbContext context) {
            _context = context;
        }
        
        // Gets specific game of given appid.
        public async Task<Game?> GetByIdAsync(int appid) {
            return await _context.games.FindAsync(appid);
        }

        // Adds specified game object as new game entry in table.
        public async Task AddAsync(Game game) {
            await _context.games.AddAsync(game);
            await _context.SaveChangesAsync();
        }

        // Updates game values of specified appid in table.
        public async Task UpdateAsync(Game game) {
            _context.games.Update(game);
            await _context.SaveChangesAsync();
        }

        // Deletes game of specified appid in table.
        public async Task DeleteAsync(int appid) {
            var game = await _context.games.FindAsync(appid);

            if (game != null) {
                _context.games.Remove(game);
                await _context.SaveChangesAsync();
            }
        }

        // Returns list of games in list that match search query.
        public async Task<List<Game>> SearchAsync(string query) {
            var results = new List<Game>();
            
            if (!string.IsNullOrEmpty(query)) {
                results = await _context.games.Where(g => g.name.Replace(" ", "+").ToUpper().Contains(query.ToUpper())).ToListAsync();
            }

            return results;
        }
    }
}