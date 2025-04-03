namespace BackendApi.Models {
    public class Login {
        // Simple login payload used to verify user login.
        public required string username { get; set; }
        public required string password { get; set; }
    }
}