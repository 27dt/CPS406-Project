import "./LandingPage.css"
import {Link} from 'react-router-dom';

function LandingPage() {

  return (
    <div className="landing-page">
      <div className="landing-box">
        <h1 id="title">Welcome to GameDex!</h1>
        <p id="description">A service to track your favourite games :D</p>

        <div className="login-and-register">
          <Link to="/login">
            <button className="landing-btn">Login</button>
          </Link>
          <Link to="/register">
            <button className="landing-btn">Register</button>
          </Link>
        </div>
      </div>
    </div>
  )
  
}

export default LandingPage