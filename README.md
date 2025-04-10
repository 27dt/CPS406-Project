# GameDex
A full-stack app built with React on the frontend, [ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) on the backend, and PostgreSQL for the database. 
GameDex allows you to search for steam games and supply them a rating, adding them to a personal list linked to your specific user.

## Features
1. Create an account, with a username and password
2. Search any game avaliable on Steam
3. Add games to your personal list and rate them
4. Manage and remove games from your list

## Tech Stack
|     Tech      |          Purpose           |
|---------------|----------------------------|
|     React     |      Frontend Library      |
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
