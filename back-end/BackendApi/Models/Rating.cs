using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;

namespace BackendApi.Models {

    public class Rating {
        // Matches database schema of ratings table ((userid, gameid) composite key).
        [Key]
        [Column(Order = 1)]
        public required int userid { get; set; }
        [Key]
        [Column(Order = 2)]
        public required int gameid { get; set; }
        public required int rating { get; set; }
    }
}