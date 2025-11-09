import React, { useState } from 'react'
import NavBar from './components/Navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Placeholder from './pages/Placeholder/Placeholder'
import Footer from './footer/Footer'
import Loginpop from './components/LoginPOPup/Loginpop'

const App = () => {
  const [showlogin,setShowlogin]=useState(false)
  return (
    <>
    {showlogin?<Loginpop setShowlogin={setShowlogin}/>:<></>}
      <div className='app'> 
      <NavBar setShowlogin={setShowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeholder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
    
  
}

export default App
