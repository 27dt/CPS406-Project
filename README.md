# GameDex
A full-stack React app built with [Vite](https://vite.dev/) & [ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet), meant to help you organize and rate a catalog of games that you've played or want to play!

## Features
1. Create an account, with a username and password
2. Search any game avaliable on Steam
3. Add games to your personal list and rate them
4. Manage and remove games from your list

## Tech Stack
|     Tech      |          Purpose           |
|---------------|----------------------------|
|     React     |      Frontend Library      |
|     Vite      |       QoL Build Tool       |
|      CSS      |          Styling           |
|    ASP.NET    |       Backend Library      | 
|   PostgreSQL  |          Database          |
|    Docker     |      Containerization      |

## Installation + Setup
1. Clone the repo: ```git clone https://github.com/27dt/CPS406-Project.git```
2. Install Docker Desktop (for database container)
3. Retrieve ```filter_steam_games.csv``` file and place in ```back-end/Database/RawCSVAndTools/```
4. Navigate back to ```back-end/``` and run ```docker-compose up --build``` to build and start db 
5. Change to ```front-end``` directory: ```cd ../front-end/cps406-project/```
6. Install dependencies: ```npm install``` or ```npm i``` 
7. Run the app: ```npm run dev``` (Inside the src directory) 

## About the Developers...
Jonathan Romao & Shaheed Headley --> Frontend <br>
Daniel Trakas & John Boersema --> Backend <br>
Paul Kabbya --> Project Management & Testing 
