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
### Run the DB
- Run ```docker compose up``` to start a containerized database
