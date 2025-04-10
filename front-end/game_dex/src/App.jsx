import { useReducer, createContext } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import SettingsPage from './pages/SettingsPage.jsx'
import GamePage from './pages/GamePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ForgotPassPage from './pages/ForgotPassPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import LandingPage from './pages/LandingPage.jsx'

export const UserContext = createContext();

function App() {

  const initialState = {
    isLoggedIn: false,
    username: '',
    password: '',
    darkMode: true
  }
  
  const reducer = (state, action) => {
    switch(action.type) {
      case 'login':
        let newState_login = initialState
        newState_login.isLoggedIn = true;
        newState_login.username = action.payload;
        newState_login.darkMode = true ;// grab from user settings in db
        return newState_login;

      case 'logout':
        return initialState;

      case 'update-username':
        let newState_update_user = initialState // make a patch call to update the user in users table
        newState_update_user.username = action.payload;
        return newState_update_user;

      case 'update-password':
        let newState_update_pass = initialState // make a patch call to update the user in users table
        newState_update_pass.password = action.payload;
        return newState_update_pass;
        
      default:
        console.log("WRONG DISPATCH CALLED");
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider
      value={{userState: state, userDispatch: dispatch}}
      >
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='/forgotpassword' element={<ForgotPassPage />}/>
            <Route path='/dashboard' element={<DashboardPage />}/>
            <Route path='/search' element={<SearchPage />}/>
            <Route path='/gamepage' element={<GamePage />}/>
            <Route path='/settings' element={<SettingsPage />}/>
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  )
}

export default App 
