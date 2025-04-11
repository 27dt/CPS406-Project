import { useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Modal from "./Modal.jsx"
import "./ListEntry.css"
import deleteIcon from "../assets/delete.svg"
import editIcon from "../assets/edit.svg"
import plusIcon from "../assets/plus.svg"

function ListEntry(props){
  
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  



  return(
      <div id="outer-container">
        <Link id="inner-container" to={"/games/" + props.id}>
          <img src={props.imageLink} alt="" />
          <div id="text">
            <div id="wrapper">
              <p id="title">{props.title}</p>
              <p id="releaseYear">,{props.releaseYear}</p>
            </div>
            <div id="genre">{props.genre}</div>
            <div id="rating">{props.rating}</div>
          </div>
        </Link>
        {props.myList ?
        <>
        <div id="vertical-line" />
          <div id="buttons" >
            <div className="button-bg" onClick={() => setShowEditModal(true)}>
              <img className="icon" 
              src={editIcon} 
              alt='edit button'/>
            </div>
            <Modal open={showEditModal} onClose={() => setShowEditModal(false)}>
              <form name="edit-game-form" id="edit-modal" action="" onSubmit={(e) => {console.log('update rating for %s with new rating %s', props.title, e.target.querySelector('#rating-selection').value); setShowEditModal(false)}}>  {/* have this update the game in the users list */}
                <h2>Update your rating for</h2>
                <h2 id="game-title">{props.title}</h2>
                <div id="form-selection">
                  <label htmlFor="rating-selection">New Rating: </label>
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
                  <button type="submit" >Submit</button>
                  <button type="button" onClick={() => setShowEditModal(false)}>Cancel</button>
                </div>
              </form>
            </Modal>
            <div className="button-bg" onClick={() => setShowDeleteModal(true)}>
              <img className="icon" 
              src={deleteIcon} 
              alt='delete button'/>
            </div>
            <Modal open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
              <form name="delete-game-form" id="delete-modal" action="" onSubmit={() => {console.log("remove game from list"); setShowDeleteModal(false)}}>  {/* have this remove the game from the users list */}
                <h2>Are you sure you want to delete this game from your list?</h2>
                <h2 id="game-title">{props.title}</h2>
                <div id="form-btns">
                  <button type="submit" >Yes</button>
                  <button type="button" onClick={() => setShowDeleteModal(false)}>Cancel</button>
                </div>
              </form>
            </Modal>
          </div>
          </> 
          :  // if the list entry is not on the dashboard page (ie myList == false)
          <>
          <div id="vertical-line" />
            <div id="buttons" >
              <div className="button-bg" onClick={() => setShowAddModal(true)}>
                <img className="icon" 
                src={plusIcon}
                alt='edit button'/>
              </div>
              <Modal open={showAddModal} onClose={() => setShowAddModal(false)}>
                <form name="edit-game-form" id="add-modal" action="" onSubmit={(e) => {console.log('add %s to user list with rating %s', props.title, e.target.querySelector('#rating-selection').value); setShowAddModal(false)}}>  {/* have this update the game in the users list */}
                  <h2>Would you like to add this game to your list?</h2>
                  <h2 id="game-title">{props.title}</h2>
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
            </>
          }
      </div>
  )
}

ListEntry.propTypes = {
  myList: PropTypes.bool,
  id: PropTypes.number,
  title: PropTypes.string,
  releaseYear: PropTypes.string,
  imageLink: PropTypes.string,
  rating: PropTypes.string,
  genre: PropTypes.string, 
}


export default ListEntry