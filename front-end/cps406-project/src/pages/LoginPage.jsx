import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../App"


function LoginPage() {
  
  const {userState, userDispatch} = useContext(UserContext);

  return (
    <>
      <Link 
      to='/'
      onClick={ () => userDispatch({ type: 'login', payload: 'johnisaboss519' }) }
      > 
        login
      </Link> 
    </>
  )

}

export default LoginPage