using Microsoft.EntityFrameworkCore;
using BackendApi.Models;

namespace BackendApi.Repositories {
    public class RatingRepository : IRatingRepository {
        private readonly AppDbContext _context;

        // Establishes connection to DbContext to call database queries.
        public RatingRepository(AppDbContext context) {
            _context = context;
        }

        // Gets a rating of a gameid from a userid.
        public async Task<Rating?> GetByIdAsync(int userid, int gameid) {
            return await _context.ratings.FindAsync(userid, gameid);
        }

        // Gets all ratings from a specific user.
        public async Task<List<Rating>> GetUserRatingsAsync(int userid) {
            var results = new List<Rating>();

            results = await _context.ratings.Where(r => r.userid.Equals(userid)).ToListAsync();

            return results;
        }

        // Adds specified rating object as new rating entry in table.
        public async Task AddAsync(Rating rating) {
            await _context.ratings.AddAsync(rating);
            await _context.SaveChangesAsync();
        }

        // Updates rating values of specified user/game in table.
        public async Task UpdateAsync(Rating rating) {
            _context.ratings.Update(rating);
            await _context.SaveChangesAsync();
        }

        // Deletes rating of specified user/game in table.
        public async Task DeleteAsync(int userid, int gameid) {
            var rating = await _context.ratings.FindAsync(userid, gameid);

            if (rating != null) {
                _context.ratings.Remove(rating);
                await _context.SaveChangesAsync();
            }
        }
    }
}