using System.ComponentModel.DataAnnotations;

namespace BackendApi.Models {
    public class User {

        [Key]
        public int uid {get; set;}
        public required string username {get; set;}
        public required string password {get; set;}
    }
}