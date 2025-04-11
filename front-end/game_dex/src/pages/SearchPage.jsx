import { useState, useEffect } from "react";
import Nav from "../components/Nav.jsx"
import EntryField from "../components/EntryField.jsx";
import ListEntry from "../components/ListEntry.jsx";

import "./SearchPage.css"

function json_to_objs(text) {
  let games = JSON.parse(text);
  games.map((obj) => {
    obj.rating = "0";
    obj.year = obj.rdate.split(" ")[2]
  }) // replace with the user rating from db
  return games
}

function SearchPage() {
  
  const [searchString, setSearchString] = useState('');

  // remove after linked to the backend
  const games = `[
    {
      "appid": 453212,
      "name": "Portal",
      "rdate": "Oct 23, 1884",
      "about": "this is a game about shooting portals",
      "img": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/400/header.jpg?t=1738796058",
      "web": "some game website here",
      "dev": "Valve",
      "pub": "Valve",
      "genre": "Indie,RPG,Simulation"
    },
    {
      "appid": 45512,
      "name": "Nubby's Number Factory",
      "rdate": "Nov 12, 2025",
      "about": "shoot pegs fun roguelike",
      "img": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3191030/header.jpg?t=1742145780",
      "web": "some game website here",
      "dev": "nubby",
      "pub": "somepupblisher",
    "genre": "Indie,RPG,Simulation,roguelike"
    },
    {
    "appid": 3656,
      "name": "Shoot John Lennon",
      "rdate": "Oct 23, 2003",
      "about": "this is a game about shooting john lennon",
      "img": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/507010/header.jpg?t=1569274431",
      "web": "some game website here",
      "dev": "yoko ono",
      "pub": "the music industry",
      "genre": "Indie,Rhythm"
    },
    {
      "appid": 566733,
      "name": "Overwatch 2",
      "rdate": "Jun 23, 2016",
      "about": "worse than rivals",
      "img": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/header.jpg?t=1742322534",
      "web": "some game website here",
      "dev": "Valve",
      "pub": "Valve",
      "genre": "multiplayer,FPS"
    }
  ]`

  let gameList = json_to_objs(games)

  gameList = gameList.filter((game) => game.name.toLowerCase().includes(searchString.toLowerCase()))

  let list = gameList.map((obj) => <ListEntry 
    myList={false}
    key={obj.appid}
    title={obj.name}
    releaseYear={obj.rdate.split(" ")[2]}
    rating={obj.rating}
    imageLink={obj.img}
    genre={obj.genre.split(",")[0]}
    />
  )

  return (
    <div className="page">
      <Nav />
      <main id="search-page">
        <h1>Search</h1>
        <EntryField 
          className="search-entry"
          type="text" 
          name="search-entry"
          placeholder="Search"
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
        />
        <hr />
        {searchString != '' && list}
        {searchString == '' && <h2>Try Searching Up a Game...</h2>}
      </main>
    </div>
  )

}

export default SearchPage