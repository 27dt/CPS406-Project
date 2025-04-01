import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import SearchPage from './pages/SearchPage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/search' element={<SearchPage />}/>
      </Routes>
    </Router>
  )
}

export default App 
