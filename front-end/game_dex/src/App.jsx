import { useReducer, createContext, useEffect } from 'react'
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
      case 'login': // this needs a action.type action.username action.password
        let newState = initialState
        newState_login.isLoggedIn = true;
        newState_login.username = action.payload;
        newState_login.password = action.password;
        newState_login.darkMode = true ;// grab from user settings in db
        return newState_login;

      case 'logout':
        return initialState;

      case 'update-username':
        let newState_update_user = structuredClone(state) // make a patch call to update the user in users table
        newState_update_user.username = action.payload;
        return newState_update_user;

      case 'update-password':
        let newState_update_pass = structuredClone(state) // make a patch call to update the user in users table
        newState_update_pass.password = action.payload;
        return newState_update_pass;
        
      case 'switch-theme':
        let newState_switch_theme = structuredClone(state)
        console.log("switch-theme dispatch")
        newState_switch_theme.darkMode = !newState_switch_theme.darkMode
        return newState_switch_theme;

      default:
        console.log("WRONG DISPATCH CALLED");
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.body.dataset.theme = state.darkMode ? "dark" : "light";
  }, [state.darkMode]) 

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
            <Route path='/games/:id' element={<GamePage />}/>
            <Route path='/settings' element={<SettingsPage />}/>
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  )
}

export default App 
