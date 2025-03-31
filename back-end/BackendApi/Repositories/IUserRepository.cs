using BackendApi.Models;

namespace BackendApi.Repositories {
    public interface IUserRepository {
        Task<IEnumerable<User>> GetAllAsync();
        Task<User?> GetByIdAsync(int uid);
        Task AddAsync(User user);
        Task UpdateAsync(User user);
        Task DeleteAsync(int uid);
        Task<bool> LoginUser(Login payload);
    }
}