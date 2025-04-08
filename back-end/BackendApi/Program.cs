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

app.MapGroup("/users")
    .MapUsersApi()
    .WithTags("Users API");

app.MapGroup("/ratings")
    .MapRateApi()
    .WithTags("Ratings API");

app.MapGroup("/games")
    .MapGamesApi()
    .WithTags("Games API");

// GET ENDPOINT /login, verifies a passed username/password corresponds to a user in the table.
app.MapGet("/login", async ([FromBody]Login payload, IUserRepository userRepository) => {
    await userRepository.LoginUser(payload);
});

app.Run();