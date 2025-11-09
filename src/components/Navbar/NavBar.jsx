import React, { useContext, useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { Storecontext } from '../../Context/Storecontext'
const NavBar = ({setShowlogin}) => {

    const [menu,setMENU]=useState("home")
    const {getTotalCartAmount}=useContext(Storecontext)
  return (
    <div className='navbar'>
          <Link to='/'> <img src={assets.logo} alt="" className='logo' /></Link>
      <ul className='nav-barmenu'>
       
       <Link to='/' onClick={()=>setMENU("home")} className={menu==="home"?"active":""}  >Home</Link>
       
       <a href='#explore-menu' onClick={()=>setMENU("menu")} className={menu==="menu"?"active":""} >Menu</a>
       
       <a href='#app-download' onClick={()=>setMENU("mobile-number")} className={menu==="mobile-number"?"active":""} >Mobile number</a>
       
       <a href='#footer' onClick={()=>setMENU("contact-us")} className={menu==="contact-us"?"active":""} >Contact us</a>
      </ul>
      <div className="navbar-right">
      <img src={assets.search_icon}alt="" /> 
        <div className="navbar-searchicon">
         <Link to='/cart'>    <img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>

        </div>
        <button onClick={()=>setShowlogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default NavBar
