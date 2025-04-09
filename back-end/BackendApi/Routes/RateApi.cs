using BackendApi.Models;
using BackendApi.Repositories;
using Microsoft.AspNetCore.Mvc;

public static class RateApi {
    public static RouteGroupBuilder MapRateApi(this RouteGroupBuilder group) {
        // ----------------------------- RATE ROUTES ----------------------------- //

        // GET ENDPOINT, returns rating of gameid by userid in ratings table.
        group.MapGet("/userid={userid}+gameid={gameid}", async (int userid, int gameid, IRatingRepository ratingRepository) =>
            await ratingRepository.GetByIdAsync(userid, gameid)
            is Rating rating
                ? Results.Ok(rating)
                : Results.NotFound("Rating with userid and gameid doesn't exist."));

        // GET ALL ENDPOINT, returns all ratings made by specified userid in ratings table.
        group.MapGet("/all/userid={userid}", async (int userid, IRatingRepository ratingRepository) => 
            await ratingRepository.GetUserRatingsAsync(userid)
            is List<Rating> list
                ? Results.Ok(list)
                : Results.NotFound("Rating list doesn't exist."));

        // POST ENDPOINT, adds rating of gameid by specified userid (in JSON body) to ratings table.
        group.MapPost("/add", async ([FromBody]Rating rating, IRatingRepository ratingRepository) => {
            if (rating is null) 
                return Results.BadRequest("Invalid JSON Body.");

            await ratingRepository.AddAsync(rating);
            return Results.Ok(rating);
        });

        // PATCH ENDPOINT, updates rating of the specified userid and gameid with correponsing JSON body.
        group.MapPatch("/update", async ([FromBody]Rating rating, IRatingRepository ratingRepository) => {
            if (rating is null) 
                return Results.BadRequest("Invalid JSON Body.");

            await ratingRepository.UpdateAsync(rating);
            return Results.Ok(rating);
        });

        // DELETE ENDPOINT, deletes rating of specified userid and gameid with corresponding userid/gameid. 
        group.MapDelete("/delete/userid={userid}+gameid={gameid}", async(int userid, int gameid, IRatingRepository ratingRepository) => {
            await ratingRepository.DeleteAsync(userid, gameid);
            return Results.Ok("Success: ratting with userid:"+userid+" gameid: " +gameid+" deleted.");
        });

        return group;
    }
}