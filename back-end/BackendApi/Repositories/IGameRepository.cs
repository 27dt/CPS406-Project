using BackendApi.Models;

namespace BackendApi.Repositories {
    
    // Sets up an interface of game-table related database functions. 
    public interface IGameRepository {
        Task<Game?> GetByIdAsync(int appid);
        Task AddAsync(Game game);
        Task UpdateAsync(Game game);
        Task DeleteAsync(int appid);
        Task<List<Game>> SearchAsync(string query);
    }
}

