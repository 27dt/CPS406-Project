import { useContext, useState } from "react"
import HelpIcon from "../assets/help.svg"
import ListEntry from "../components/ListEntry.jsx"
import EntryField from "../components/EntryField.jsx"
import Nav from "../components/Nav.jsx"
import Modal from "../components/Modal.jsx"
import { UserContext } from "../App.jsx"
import "./DashboardPage.css"

function json_to_objs(text) {
  let games = JSON.parse(text);
  games.map((obj) => {
    obj.rating = "0";
    obj.year = obj.rdate.split(" ")[2]
  }) // replace with the user rating from db
  return games
}

function DashboardPage() {
  
  const {userState, userDispatch} = useContext(UserContext);

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

  // sorting 
  const [sortValue, setSortValue] = useState('default-asc');

  switch(sortValue.split("-")[0]) {
    case "name":
      gameList.sort((a, b) => a.name.localeCompare(b.name))
      break;
    case "year":
      gameList.sort((a, b) => Number(a.year) - Number(b.year))
      break;
    case "rating":
      gameList.sort((a, b) => Number(a.rating) - Number(b.rating))
      break;
    case "genre":
      gameList.sort((a, b) => a.genre.split(",")[0].localeCompare(b.genre.split(",")[0]))
      break;
    default:
      gameList
  }

  if (sortValue.split("-")[1] == "dec") {
    gameList.reverse()
  }
  
  // filtering
  const [fitlerValue, setFitlerValue] = useState('name');
  const [fitlerString, setFitlerString] = useState('');

  gameList = gameList.filter((game) => game[fitlerValue].toLowerCase().includes(fitlerString.toLowerCase()))

  let list = gameList.map((obj) => <ListEntry 
    key={obj.appid}
    title={obj.name}
    releaseYear={obj.rdate.split(" ")[2]}
    rating={obj.rating}
    imageLink={obj.img}
    genre={obj.genre.split(",")[0]}
    />
  ) 

  const [modalIsOpen, setModalIsOpen] = useState(false);
  

  return (
    <div className="page">
      <Nav />
      <main>
        <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
          <div id="help-modal">
            <ListEntry 
            key={-1}
            title={"Game Title"}
            releaseYear={"Release year"}
            rating={"Rating"}
            imageLink={"https://t3.ftcdn.net/jpg/03/35/13/14/360_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC.jpg"}
            genre={"Genre"}
            />
          </div>
        </Modal>
        <section id="list">
          <div id="title">
            <h1>My List</h1>
            <img src={HelpIcon} alt="Help-Icon" onClick={() => setModalIsOpen(true)}/>
          </div>
          <hr />
          {list} 
        </section>
        <section id="filter-sort">

          <h1>Sort</h1>
          <form action="" id="sorting">

            <div id="ascending">
              <h2>Ascending</h2>
              <input type="radio" id="default-asc" name="sort" value="default-asc" onChange={e => setSortValue(e.target.value)}/>
              <label htmlFor="default-asc"> Default</label> <br />
              <input type="radio" id="name-asc" name="sort" value="name-asc" onChange={e => setSortValue(e.target.value)}/>
              <label htmlFor="name-asc"> Name</label> <br />
              <input type="radio" id="year-asc" name="sort" value="year-asc" onChange={e => setSortValue(e.target.value)}/>
              <label htmlFor="year-asc"> Year</label> <br />
              <input type="radio" id="rating-asc" name="sort" value="rating-asc" onChange={e => setSortValue(e.target.value)}/>
              <label htmlFor="rating-asc"> Rating</label> <br />
              <input type="radio" id="genre-asc" name="sort" value="genre-asc" onChange={e => setSortValue(e.target.value)}/>
              <label htmlFor="genre-asc"> Genre</label> <br />
            </div>

            <div id="descending">
              <h2>Descending</h2>
              <input type="radio" id="default-dec" name="sort" value="default-dec" onChange={e => setSortValue(e.target.value)}/>
              <label htmlFor="default-dec"> Default</label> <br />
              <input type="radio" id="name-dec" name="sort" value="name-dec" onChange={e => setSortValue(e.target.value)}/>
              <label htmlFor="name-dec"> Name</label> <br />
              <input type="radio" id="year-dec" name="sort" value="year-dec" onChange={e => setSortValue(e.target.value)}/>
              <label htmlFor="year-dec"> Year</label> <br />
              <input type="radio" id="rating-dec" name="sort" value="rating-dec" onChange={e => setSortValue(e.target.value)}/>
              <label htmlFor="rating-dec"> Rating</label> <br />
              <input type="radio" id="genre-dec" name="sort" value="genre-dec" onChange={e => setSortValue(e.target.value)}/>
              <label htmlFor="genre-dec"> Genre</label> <br />
            </div>

          </form>

          <h1>Filter</h1>

          <form action="" id="filtering">
            <input type="radio" id="name-filter" name="filter" value="name" onChange={e => setFitlerValue(e.target.value)}/>
            <label htmlFor="name-filter"> Name</label>
            <input type="radio" id="year-filter" name="filter" value="year" onChange={e => setFitlerValue(e.target.value)}/>
            <label htmlFor="year-filter"> Year</label>
            <input type="radio" id="rating-filter" name="filter" value="rating" onChange={e => setFitlerValue(e.target.value)}/>
            <label htmlFor="rating-filter"> Rating</label>
            <input type="radio" id="genre-filter" name="filter" value="genre" onChange={e => setFitlerValue(e.target.value)}/>
            <label htmlFor="genre-filter"> Genre</label>

            <EntryField 
            className="filter-entry"
            type="text" 
            name="filter-entry"
            placeholder="Search"
            value={fitlerString}
            onChange={e => setFitlerString(e.target.value)}
            />
          </form>

        </section>
      </main>
    </div>
  )

}

export default DashboardPage