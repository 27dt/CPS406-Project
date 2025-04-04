using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;

namespace BackendApi.Models {

    [PrimaryKey(nameof(userid), nameof(gameid))]
    public class Rating {
        // Matches database schema of ratings table ((userid, gameid) composite key).
        [Column(Order = 1)]
        public required int userid { get; set; }
        [Column(Order = 2)]
        public required int gameid { get; set; }
        public required int rating { get; set; }
    }
}