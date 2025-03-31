import ListEntry from "../components/ListEntry.jsx"
import Nav from "../components/Nav.jsx"


function DashboardPage() {
  
  const games = `[
    {
        "appid": 453212,
        "name": "portal",
        "rdate": "Oct 23, 1884",
        "about": "this is a game about shooting portals",
        "img": "some steam img link here",
        "web": "some game website here",
        "dev": "Valve",
        "pub": "Valve",
        "genre": "Indie,RPG,Simulation"
    },
    {
        "appid": 45512,
        "name": "nubby's number factory",
        "rdate": "Nov 12, 2025",
        "about": "shoot pegs fun roguelike",
        "img": "some steam img link here",
        "web": "some game website here",
        "dev": "nubby",
        "pub": "somepupblisher",
        "genre": "Indie,RPG,Simulation,roguelike"
    },
    {
        "appid": 3656,
        "name": "shoot john lennon",
        "rdate": "Oct 23, 2003",
        "about": "this is a game about shooting john lennon",
        "img": "some steam img link here",
        "web": "some game website here",
        "dev": "yoko ono",
        "pub": "the music industry",
        "genre": "Indie,Rhythm"
    },
    {
        "appid": 566733,
        "name": "overwatch 2",
        "rdate": "Jun 23, 2016",
        "about": "worse than rivals",
        "img": "some steam img link here",
        "web": "some game website here",
        "dev": "Valve",
        "pub": "Valve",
        "genre": "multiplayer,FPS"
    }
]`

  return (


    <div className="page">
      <Nav />
      <main>
        
        <ListEntry 
        imageLink="https://i.pinimg.com/736x/df/fd/01/dffd015b65ed0c9b8949dc2972f77d05.jpg"
        title="Grand Theft Auto V"
        />
      </main>
    </div>
  )

}

export default DashboardPage