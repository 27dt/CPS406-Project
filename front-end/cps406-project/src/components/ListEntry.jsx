import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./ListEntry.css"

function ListEntry(props){
  
  
  return(
    <Link id="container" to="/game-page">
      <img src={props.imageLink} alt="" />
      <div id="text">
        <div id="wrapper">
          <div id="title">{props.title}</div>
          <div id="releaseYear">,{props.releaseYear}</div>
        </div>
        <div id="genre">{props.genre}</div>
        <div id="rating">{props.rating}</div>
      </div>
    </Link>
  )
}

ListEntry.propTypes = {
  title: PropTypes.string,
  releaseYear: PropTypes.string,
  imageLink: PropTypes.string,
  rating: PropTypes.string,
  genre: PropTypes.string, 
}


export default ListEntry