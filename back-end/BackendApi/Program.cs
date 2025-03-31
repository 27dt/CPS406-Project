using Microsoft.EntityFrameworkCore;
using BackendApi.Models;
using BackendApi.Repositories;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("postgres")));
builder.Services.AddScoped<AppDbContext>();
builder.Services.AddScoped<IUserRepository, UserRepository>();

var app = builder.Build();
app.MapGet("/", () => "Hello World!");

app.MapGet("/users", async (IUserRepository userRepository) => {
    return await userRepository.GetAllAsync();
});

app.MapGet("/users/{uid}", async (int uid, IUserRepository userRepository) => {
    return await userRepository.GetByIdAsync(uid);
});

app.MapPost("/users", async ([FromBody]User user, IUserRepository userRepository) => {
    await userRepository.AddAsync(user);
});

app.MapPatch("/users", async ([FromBody]User user, IUserRepository userRepository) => {
    await userRepository.UpdateAsync(user);
});

app.MapDelete("/users/{uid}", async (int uid, IUserRepository userRepository) => {
    await userRepository.DeleteAsync(uid);
});

app.MapGet("/login", async ([FromBody]Login payload, IUserRepository userRepository) => {
    await userRepository.LoginUser(payload);
});

app.Run();