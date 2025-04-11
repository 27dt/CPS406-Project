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

// Setting up OpenApi Specifications
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApiDocument(config => {
    config.DocumentName = "GameDex API";
    config.Title = "GameDex API v1";
    config.Version = "v1";
});

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:5173") // your Vite dev server
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors(); // Make sure this goes before app.UseAuthorization(), app.UseEndpoints(), etc.

app.UseOpenApi();
app.UseSwaggerUi(config => {
    config.DocumentTitle = "GameDex API";
    config.Path = "/swagger";
    config.DocumentPath = "/swagger/{documentName}/swagger.json";
    config.DocExpansion = "list";
});

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
app.MapPost("/login", async ([FromBody]Login payload, IUserRepository userRepository) => 
    await userRepository.LoginUser(payload)
    is User user
      ? Results.Ok(user.uid)
      : Results.NotFound("fail"));

app.Run();