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

var app = builder.Build();

// ----------------------------- USER ROUTES ----------------------------- //

// GET ENDPOINT /users, returns list of all users in user table.
app.MapGet("/users", async (IUserRepository userRepository) => {
    return await userRepository.GetAllAsync();
});

// GET ENDPOINT /users/uid, returns user with specified ID.
app.MapGet("/users/{uid}", async (int uid, IUserRepository userRepository) => {
    return await userRepository.GetByIdAsync(uid);
});

// POST ENDPOINT /users, adds user specified in JSON body to user table.
app.MapPost("/users", async ([FromBody]User user, IUserRepository userRepository) => {
    await userRepository.AddAsync(user);
});

// PATCH ENDPOINT /users, updates values of the specified user ID with correponsing JSON body.
app.MapPatch("/users", async ([FromBody]User user, IUserRepository userRepository) => {
    await userRepository.UpdateAsync(user);
});

// DELETE ENDPOINT /users/uid, deletes user of specified uid in user table.
app.MapDelete("/users/{uid}", async (int uid, IUserRepository userRepository) => {
    await userRepository.DeleteAsync(uid);
});

// GET ENDPOINT /login, verifies a passed username/password corresponds to a user in the table.
app.MapGet("/login", async ([FromBody]Login payload, IUserRepository userRepository) => {
    await userRepository.LoginUser(payload);
});

// ----------------------------- GAME ROUTES ----------------------------- //

// GET ENDPOINT /games/appid, returns game with specified ID.
app.MapGet("/games/{appid}", async (int appid, IGameRepository gameRepository) => {
    return await gameRepository.GetByIdAsync(appid);
});

// POST ENDPOINT /games, adds game specified in JSON body to game table.
app.MapPost("/games", async ([FromBody]Game game, IGameRepository gameRepository) => {
    await gameRepository.AddAsync(game);
});

// PATCH ENDPOINT /games, updates values of the specified game ID with correponsing JSON body.
app.MapPatch("/games", async ([FromBody]Game game, IGameRepository gameRepository) => {
    await gameRepository.UpdateAsync(game);
});

// DELETE ENDPOINT /games/appid, deletes game of specified appid in game table.
app.MapDelete("/games/{appid}", async (int appid, IGameRepository gameRepository) => {
    await gameRepository.DeleteAsync(appid);
});

// GET ENDPOINT /games/search/query, searches and returns list of games matching query from game table.
app.MapGet("/games/search={query}", async (string query, IGameRepository gameRepository) => {
    return await gameRepository.SearchAsync(query);
});

app.Run();