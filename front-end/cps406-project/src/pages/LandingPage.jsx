import "./LandingPage.css"
import FormButton from "../components/FormButton.jsx"

function LandingPage() {

  return (
    <div className="landing-page">
      <div className="landing-box">
        <h1>Welcome to GameDex!</h1>
        <p id="description">A service to track your favourite games :D</p>
        <div classname="login-and-register">
          <FormButton className="landing-btn" text="Login"></FormButton>
          <FormButton className="landing-btn" text="Register"></FormButton>
        </div>
        <p id="copyright">Copyright © 2025 GameDex</p>
      </div>
    </div>
  )
  
}

export default LandingPage