using Microsoft.EntityFrameworkCore;
using BackendApi.Models;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.DataProtection.Repositories;
using BackendApi.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("postgres")));
builder.Services.AddScoped<AppDbContext>();
builder.Services.AddScoped<IUserRepository, UserRepository>();

var app = builder.Build();
//app.MapGet("/", () => "Hello World!");

app.MapGet("/users", async (IUserRepository userRepository) => {
    return await userRepository.GetAllAsync();
});

app.MapGet("/users/{id}", async (int uid, IUserRepository userRepository) => {
    return await userRepository.GetByIdAsync(uid);
});

app.Run();
