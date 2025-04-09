using BackendApi.Models;
using BackendApi.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

public static class UsersApi {
    public static RouteGroupBuilder MapUsersApi(this RouteGroupBuilder group) {
        // ----------------------------- USER ROUTES ----------------------------- //

        // GET ALL ENDPOINT, returns list of all users in user table.
        group.MapGet("/all", async (IUserRepository userRepository) => 
            await userRepository.GetAllAsync()
            is List<User> list
                ? Results.Ok(list)
                : Results.NoContent());

        // GET ENDPOINT, returns user with specified ID.
        group.MapGet("/uid={uid}", async (int uid, IUserRepository userRepository) => 
            await userRepository.GetByIdAsync(uid)
            is User user
                ? Results.Ok(user)
                : Results.NotFound("User uid doesn't exist."));

        // POST ENDPOINT, adds user specified in JSON body to user table.
        group.MapPost("/add", async ([FromBody]User user, IUserRepository userRepository) => {
            if (user is null)
                return Results.BadRequest("Invalid JSON Body.");

            await userRepository.AddAsync(user);
            return Results.Ok(user);
        });

        // PATCH ENDPOINT, updates values of the specified user ID with correponsing JSON body.
        group.MapPatch("/update", async ([FromBody]User user, IUserRepository userRepository) => {
            if (user is null) 
                return Results.BadRequest("Invalid JSON Body.");

            await userRepository.UpdateAsync(user);
            return Results.Ok(user);
        });

        // DELETE ENDPOINT, deletes user of specified uid in user table.
        group.MapDelete("/delete/uid={uid}", async (int uid, IUserRepository userRepository) => {
            await userRepository.DeleteAsync(uid);
            return Results.Ok("Success: user uid:"+uid+" deleted.");
        });

        return group;
    }
}