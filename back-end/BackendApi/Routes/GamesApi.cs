using BackendApi.Models;
using BackendApi.Repositories;
using Microsoft.AspNetCore.Mvc;

public static class GamesApi {
    public static RouteGroupBuilder MapGamesApi(this RouteGroupBuilder group) {
        // ----------------------------- GAME ROUTES ----------------------------- //

        // GET ENDPOINT /games/appid, returns game with specified ID.
        group.MapGet("/appid={appid}", async (int appid, IGameRepository gameRepository) => {
            return await gameRepository.GetByIdAsync(appid);
        });

        // POST ENDPOINT /games, adds game specified in JSON body to game table.
        group.MapPost("/add", async ([FromBody]Game game, IGameRepository gameRepository) => {
            await gameRepository.AddAsync(game);
        });

        // PATCH ENDPOINT /games, updates values of the specified game ID with correponsing JSON body.
        group.MapPatch("/update", async ([FromBody]Game game, IGameRepository gameRepository) => {
            await gameRepository.UpdateAsync(game);
        });

        // DELETE ENDPOINT /games/appid, deletes game of specified appid in game table.
        group.MapDelete("/delete/appid={appid}", async (int appid, IGameRepository gameRepository) => {
            await gameRepository.DeleteAsync(appid);
        });

        // GET ENDPOINT /games/search/query, searches and returns list of games matching query from game table.
        group.MapGet("/search={query}", async (string query, IGameRepository gameRepository) => {
            return await gameRepository.SearchAsync(query);
        });

        return group;
    }
}