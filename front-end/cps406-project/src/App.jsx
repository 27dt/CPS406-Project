import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ForgotPassPage from './pages/ForgotPassPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import GamePage from './pages/GamePage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/forgotpassword' element={<ForgotPassPage />}/>
        <Route path='/search' element={<SearchPage />}/>
        <Route path='/landingpage' element={<LandingPage />}/>
        <Route path='/gamepage' element={<GamePage />}/>
      </Routes>
    </Router>
  )
}

export default App 
