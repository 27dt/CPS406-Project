import "./GamePage.css"
import Nav from "../components/Nav";
import { useParams } from "react-router-dom"

function buttonClicked() {
  console.log("BOMBOCLART!!!");
}

function GamePage() {

  const params = useParams();
  console.log(params);

  return (
    <div className="page">
      <Nav />
      <main className="game-page">
        <div className="column left">
          <img className="game-image" src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/header.jpg?t=1742322534" alt="Game Image"/>
          <div className="title-and-button">
            <h1 className="game-title" >Overwatch Two</h1>
            <button className="add-btn" onClick={() => buttonClicked()}><b className="icon">+</b> Add to list</button>
          </div>
          <p className="game-desc" >this is a description. this is a description. this is a description.this is a description.this is a description. this is a description. this is a description.this is a description.this is a description. this is a description. v this is a description. this is a description. this is a description. this is a description. this is a description.this is a description.this is a description.this is a description.this is a description.this is a description.this is a description.this is a description.</p>
        </div>
        <div className="column right">
          <p className="game-info" ><b>Developer:</b> idk</p>
          <p className="game-info" ><b>Publisher:</b> me</p>
          <p className="game-info" ><b>Genre:</b> bruh you picked the game</p>
          <p className="game-info" ><b>Release Date:</b> idk</p>
          <a href="https://www.nytimes.com/games/wordle/index.html" className="game-info">Link to Website</a>
        </div>
      </main>
    </div>
  )

}

export default GamePage