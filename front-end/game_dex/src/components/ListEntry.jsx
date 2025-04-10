import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./ListEntry.css"
import deleteIcon from "../assets/delete.svg"
import editIcon from "../assets/edit.svg"
import plusIcon from "../assets/plus.svg"

function ListEntry(props){
  
  
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
            <div className="button-bg">
              <img className="icon" 
              src={editIcon} 
              alt='edit button'/>
            </div>
            <div className="button-bg">
              <img className="icon" 
              src={deleteIcon} 
              alt='delete button'/>
            </div>
          </div>
          </> 
          :
          <>
          <div id="vertical-line" />
            <div id="buttons" >
              <div className="button-bg">
                <img className="icon" 
                src={plusIcon}
                alt='edit button'/>
              </div>
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