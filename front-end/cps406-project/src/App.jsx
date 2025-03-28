import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import RecommendPage from './pages/RecommendPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import GamePage from './pages/GamePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import SearchPage from './pages/SearchPage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardPage />}/>
        <Route path='/recommend' element={<RecommendPage />}/>
        <Route path='/settings' element={<SettingsPage />}/>
        <Route path='/game-page' element={<GamePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/search' element={<SearchPage />}/>
      </Routes>
    </Router>
  )
}

export default App 
