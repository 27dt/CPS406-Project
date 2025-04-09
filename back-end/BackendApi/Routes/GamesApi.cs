using BackendApi.Models;
using BackendApi.Repositories;
using Microsoft.AspNetCore.Mvc;

public static class GamesApi {
    public static RouteGroupBuilder MapGamesApi(this RouteGroupBuilder group) {
        // ----------------------------- GAME ROUTES ----------------------------- //

        // GET ENDPOINT, returns game with specified ID.
        group.MapGet("/appid={appid}", async (int appid, IGameRepository gameRepository) => 
            await gameRepository.GetByIdAsync(appid)
            is Game game
                ? Results.Ok(game)
                : Results.NotFound("Game appid doesn't exist."));

        // POST ENDPOINT, adds game specified in JSON body to game table.
        group.MapPost("/add", async ([FromBody]Game game, IGameRepository gameRepository) => {
            if (game is null) 
                return Results.BadRequest("Invalid JSON Body.");

            await gameRepository.AddAsync(game);
            return Results.Ok(game);
        });

        // PATCH ENDPOINT, updates values of the specified game ID with correponsing JSON body.
        group.MapPatch("/update", async ([FromBody]Game game, IGameRepository gameRepository) => {
            if (game is null) 
                return Results.BadRequest("Invalid JSON Body.");

            await gameRepository.UpdateAsync(game);
            return Results.Ok(game);
        });

        // DELETE ENDPOINT, deletes game of specified appid in game table.
        group.MapDelete("/delete/appid={appid}", async (int appid, IGameRepository gameRepository) => {
            await gameRepository.DeleteAsync(appid);
            return Results.Ok("Success: game appid:"+appid+" deleted.");
        });

        // SEARCH (GET) ENDPOINT, searches and returns list of games matching query from game table.
        group.MapGet("/search={query}", async (string query, IGameRepository gameRepository) => 
            await gameRepository.SearchAsync(query)
            is List<Game> list
                ? Results.Ok(list)
                : Results.NoContent());

        return group;
    }
}