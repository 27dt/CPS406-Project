# Backend Setup
## Backend API setup
### Dependencies
- VSCode
- [C# Dev Kit extension for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit)
- [.NET 9.0 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
### Build the API
1. In the "BackendApi" folder, run ```dotnet dev-certs https --trust```
2. Trust the certificate
3. Start debugging with ```Shift+F5```
## PostgreSQL setup with Docker
### Dependencies
- Install [Docker Engine](https://docs.docker.com/engine/install/)
### Build the DB
1. CD into the back-end directory
2. Run ```docker compose up --build``` on Linux or ```docker-compose up --build``` on Windows to build the docker container. This should also run the container for the first time.
### Run the DB
Everytime you need to interface with the DB, it must be running in a container on your computer. Assuming you've built it already, all you need to do is run:
- ```docker compose up```

Optionally, you can supply a -d flag to run in a detatched mode.
### Messing with the DB
You can either mess with it within the docker container, or connect remotely. Connecting remotely mimics closer how we plan to interface with it on the backend
- ```docker exec -it postgres psql -U postgres``` will execute a command on the postgres image in docker, that command being psql -U postgres, or entering interactive postgres with the postgres user supplied
- ```psql -h localhost -p 5432 -d postgres -U postgres``` will connect to database postgres with user postgres on localhost:5432 (really need to work on the naming)