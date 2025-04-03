using System.ComponentModel.DataAnnotations;

namespace BackendApi.Models {
    public class Game {
        // Matches database schema of games table (appid primary key).
        [Key]
        public required int appid {get; set;}
        public required string name {get; set;}
        public string? rdate {get; set;}
        public float? price {get; set;}
        public string? about {get; set;}
        public string? img {get; set;}
        public string? web {get; set;}
        public string? dev {get; set;}
        public string? pub {get; set;}
        public string? genre {get; set;}
        public string? tags {get; set;}
    }
}