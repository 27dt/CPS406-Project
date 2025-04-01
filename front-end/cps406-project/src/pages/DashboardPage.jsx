import "./DashboardPage.css"
import ListEntry from "../components/ListEntry.jsx"
import Nav from "../components/Nav.jsx"


function DashboardPage() {
  
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

  function json_to_objs(text) {
    let games = JSON.parse(text);
    return games
  }

  let gamesList = json_to_objs(games)

  let list = gamesList.map((obj) => <ListEntry 
  key={obj.appid}
  title={obj.name}
  releaseYear={obj.rdate.split(" ")[2]}
  rating={"XX%"}
  imageLink={obj.img}
  genre={obj.genre.split(",")[0]}/>
)

  return (


    <div className="page">
      <Nav />
      <main>
        <section id="list">
          {list} 
        </section>
        <section id="filter-sort">
          <h1>Filter & sort options</h1>
        </section>
      </main>
    </div>
  )

}

export default DashboardPage