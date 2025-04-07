using Microsoft.EntityFrameworkCore;
using BackendApi.Models;
using BackendApi.Repositories;
using Microsoft.AspNetCore.Mvc;

// ASPNET web application builder.
var builder = WebApplication.CreateBuilder(args);

// Adds repositories for DB functions, and DB context (connects to PostgreSQL database).
builder.Services.AddDbContext<AppDbContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("postgres")));
builder.Services.AddScoped<AppDbContext>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IGameRepository, GameRepository>();
builder.Services.AddScoped<IRatingRepository, RatingRepository>();

var app = builder.Build();

// ----------------------------- USER ROUTES ----------------------------- //

// GET ENDPOINT /users, returns list of all users in user table.
app.MapGet("/users/all", async (IUserRepository userRepository) => {
    return await userRepository.GetAllAsync();
});

// GET ENDPOINT /users/uid, returns user with specified ID.
app.MapGet("/users/uid={uid}", async (int uid, IUserRepository userRepository) => {
    return await userRepository.GetByIdAsync(uid);
});

// POST ENDPOINT /users, adds user specified in JSON body to user table.
app.MapPost("/users/add", async ([FromBody]User user, IUserRepository userRepository) => {
    await userRepository.AddAsync(user);
});

// PATCH ENDPOINT /users, updates values of the specified user ID with correponsing JSON body.
app.MapPatch("/users/update", async ([FromBody]User user, IUserRepository userRepository) => {
    await userRepository.UpdateAsync(user);
});

// DELETE ENDPOINT /users/uid, deletes user of specified uid in user table.
app.MapDelete("/users/delete/uid={uid}", async (int uid, IUserRepository userRepository) => {
    await userRepository.DeleteAsync(uid);
});

// GET ENDPOINT /login, verifies a passed username/password corresponds to a user in the table.
app.MapGet("/login", async ([FromBody]Login payload, IUserRepository userRepository) => {
    await userRepository.LoginUser(payload);
});

// ----------------------------- GAME ROUTES ----------------------------- //

// GET ENDPOINT /games/appid, returns game with specified ID.
app.MapGet("/games/appid={appid}", async (int appid, IGameRepository gameRepository) => {
    return await gameRepository.GetByIdAsync(appid);
});

// POST ENDPOINT /games, adds game specified in JSON body to game table.
app.MapPost("/games/add", async ([FromBody]Game game, IGameRepository gameRepository) => {
    await gameRepository.AddAsync(game);
});

// PATCH ENDPOINT /games, updates values of the specified game ID with correponsing JSON body.
app.MapPatch("/games/update", async ([FromBody]Game game, IGameRepository gameRepository) => {
    await gameRepository.UpdateAsync(game);
});

// DELETE ENDPOINT /games/appid, deletes game of specified appid in game table.
app.MapDelete("/games/delete/appid={appid}", async (int appid, IGameRepository gameRepository) => {
    await gameRepository.DeleteAsync(appid);
});

// GET ENDPOINT /games/search/query, searches and returns list of games matching query from game table.
app.MapGet("/games/search={query}", async (string query, IGameRepository gameRepository) => {
    return await gameRepository.SearchAsync(query);
});

// ----------------------------- RATE ROUTES ----------------------------- //

// GET ENDPOINT /ratings/userid/gameid, returns rating of gameid by userid in ratings table.
app.MapGet("/ratings/userid={userid}+gameid={gameid}", async (int userid, int gameid, IRatingRepository ratingRepository) => {
    return await ratingRepository.GetByIdAsync(userid, gameid);
});

// GET ENDPOINT /ratings/userid, returns all ratings made by specified userid in ratings table.
app.MapGet("/ratings/all/userid={userid}", async (int userid, IRatingRepository ratingRepository) => {
    return await ratingRepository.GetUserRatingsAsync(userid);
});

// POST ENDPOINT /ratings, adds rating of gameid by specified userid (in JSON body) to ratings table.
app.MapPost("/ratings/add", async ([FromBody]Rating rating, IRatingRepository ratingRepository) => {
    await ratingRepository.AddAsync(rating);
});

// PATCH ENDPOINT /ratings, updates rating of the specified userid and gameid with correponsing JSON body.
app.MapPatch("/ratings/update", async ([FromBody]Rating rating, IRatingRepository ratingRepository) => {
    await ratingRepository.UpdateAsync(rating);
});

// DELETE ENDPOINT /ratings, 
app.MapDelete("/ratings/delete", async(int userid, int gameid, IRatingRepository ratingRepository) => {
    await ratingRepository.DeleteAsync(userid, gameid);
});

app.Run();