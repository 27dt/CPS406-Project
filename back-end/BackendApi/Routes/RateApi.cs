using BackendApi.Models;
using BackendApi.Repositories;
using Microsoft.AspNetCore.Mvc;

public static class RateApi {
    public static RouteGroupBuilder MapRateApi(this RouteGroupBuilder group) {
        // ----------------------------- RATE ROUTES ----------------------------- //

        // GET ENDPOINT /ratings/userid/gameid, returns rating of gameid by userid in ratings table.
        group.MapGet("/userid={userid}+gameid={gameid}", async (int userid, int gameid, IRatingRepository ratingRepository) => {
            return await ratingRepository.GetByIdAsync(userid, gameid);
        });

        // GET ENDPOINT /ratings/userid, returns all ratings made by specified userid in ratings table.
        group.MapGet("/all/userid={userid}", async (int userid, IRatingRepository ratingRepository) => {
            return await ratingRepository.GetUserRatingsAsync(userid);
        });

        // POST ENDPOINT /ratings, adds rating of gameid by specified userid (in JSON body) to ratings table.
        group.MapPost("/add", async ([FromBody]Rating rating, IRatingRepository ratingRepository) => {
            await ratingRepository.AddAsync(rating);
        });

        // PATCH ENDPOINT /ratings, updates rating of the specified userid and gameid with correponsing JSON body.
        group.MapPatch("/update", async ([FromBody]Rating rating, IRatingRepository ratingRepository) => {
            await ratingRepository.UpdateAsync(rating);
        });

        // DELETE ENDPOINT /ratings, 
        group.MapDelete("/delete", async(int userid, int gameid, IRatingRepository ratingRepository) => {
            await ratingRepository.DeleteAsync(userid, gameid);
        });

        return group;
    }
}