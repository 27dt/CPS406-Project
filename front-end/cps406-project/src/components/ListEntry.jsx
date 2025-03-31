import PropTypes from "prop-types"
import "./ListEntry.css"

function ListEntry(props){
  return(
    <div id="container">
      <img src={props.imageLink} alt="" />
      <h1>{props.title}</h1>
      <p>{props.releaseYear}</p>
    </div>
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