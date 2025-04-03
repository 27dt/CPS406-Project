using System.ComponentModel.DataAnnotations;

namespace BackendApi.Models {
    public class User {
        // Matches database schema of users table (uid primary key).
        [Key]
        public int uid {get; set;}
        public required string username {get; set;}
        public required string password {get; set;}
    }
}