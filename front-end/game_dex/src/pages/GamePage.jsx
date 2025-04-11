import { useState } from "react";
import "./GamePage.css"
import Modal from "../components/Modal";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom"

function GamePage() {

  const params = useParams();
  const [showAddModal, setShowAddModal] = useState(false)

  const handleAddModalSubmit = (e) => {
    console.log('add %s to user list with rating %s', "Game Title", e.target.querySelector('#rating-selection').value);
    setShowAddModal(false);
  }


  return (
    <div className="page">
      <Nav />
      <main className="game-page">
        <div className="column left">
          <img className="game-image" src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/header.jpg?t=1742322534" alt="Game Image"/>
          <div className="title-and-button">
            <h1 className="game-title" >Overwatch Two</h1>
            <button className="add-btn" onClick={() => setShowAddModal(true)}><b className="icon">+</b> Add to list</button>
            <Modal open={showAddModal} onClose={() => setShowAddModal(false)}>
                <form name="edit-game-form" id="add-modal" action="" onSubmit={(e) => handleAddModalSubmit(e)}>  {/* have this update the game in the users list */}
                  <h2>Would you like to add this game to your list?</h2>
                  <h2 id="game-title">Game Title</h2>
                  <div id="form-selection">
                    <label htmlFor="rating-selection">Rating: </label>
                    <select name="rating" id="rating-selection">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div id="form-btns">
                    <button type="submit" >Yes</button>
                    <button type="button" onClick={() => setShowAddModal(false)}>No</button>
                  </div>
                </form>
              </Modal>
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