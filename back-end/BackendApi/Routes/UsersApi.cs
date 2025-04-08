using BackendApi.Models;
using BackendApi.Repositories;
using Microsoft.AspNetCore.Mvc;

public static class UsersApi {
    public static RouteGroupBuilder MapUsersApi(this RouteGroupBuilder group) {
        // ----------------------------- USER ROUTES ----------------------------- //

        // GET ENDPOINT /users, returns list of all users in user table.
        group.MapGet("", async (IUserRepository userRepository) => {
            return await userRepository.GetAllAsync();
        });

        // GET ENDPOINT /users/uid, returns user with specified ID.
        group.MapGet("/{uid}", async (int uid, IUserRepository userRepository) => {
            return await userRepository.GetByIdAsync(uid);
        });

        // POST ENDPOINT /users, adds user specified in JSON body to user table.
        group.MapPost("", async ([FromBody]User user, IUserRepository userRepository) => {
            await userRepository.AddAsync(user);
        });

        // PATCH ENDPOINT /users, updates values of the specified user ID with correponsing JSON body.
        group.MapPatch("", async ([FromBody]User user, IUserRepository userRepository) => {
            await userRepository.UpdateAsync(user);
        });

        // DELETE ENDPOINT /users/uid, deletes user of specified uid in user table.
        group.MapDelete("/{uid}", async (int uid, IUserRepository userRepository) => {
            await userRepository.DeleteAsync(uid);
        });

        return group;
    }
}