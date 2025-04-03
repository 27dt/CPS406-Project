using BackendApi.Models;

namespace BackendApi.Repositories {

    // Sets up an interface of user-table related database functions. 
    public interface IUserRepository {
        Task<IEnumerable<User>> GetAllAsync();
        Task<User?> GetByIdAsync(int uid);
        Task AddAsync(User user);
        Task UpdateAsync(User user);
        Task DeleteAsync(int uid);
        Task<bool> LoginUser(Login payload);
    }
}