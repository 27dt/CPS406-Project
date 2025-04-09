using BackendApi.Models;

namespace BackendApi.Repositories {
    
    // Sets up an interface of rating-table related database functions. 
    public interface IRatingRepository {
        Task<Rating?> GetByIdAsync(int userid, int gameid);
        Task<List<Rating>> GetUserRatingsAsync(int userid);
        Task AddAsync(Rating rating);
        Task UpdateAsync(Rating rating);
        Task DeleteAsync(int userid, int gameid);
    }
}

