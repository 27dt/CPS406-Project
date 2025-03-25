import pfp from './assets/pfp.jpg'

function Card(props){
  return(
    <div className="card">
      <img className="card-image" src={pfp} alt="profile picture" />
      <h2 className='card-title'>Bro Code {props.i}</h2>
      <p className='card-text'>games: {props.numGames*5}</p>
    </div>
  )
}

export default Card