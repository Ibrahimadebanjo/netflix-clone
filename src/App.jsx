import React from 'react'

import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/player' element={<Player/>} />
      </Routes>
    </div>
  )
}

export default App