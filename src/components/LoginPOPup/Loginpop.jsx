import React, { useState } from 'react'
import './Loginpop.css'
import { assets } from '../../assets/assets'
const Loginpop = ({setShowlogin}) => {
    const [currstate,setCurrstate]=useState("Login")
  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currstate}</h2>
            <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />

        </div>
        <div className="login-popup-input">
            {currstate==="Login"?<></>: <input type="text" placeholder='Your name' required />}
           
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Enter password' required />
           
        </div>
         <button>{currstate==="Sign up"?"Create account":"Login"}</button>
         <div className="logib-popup-cobditions">
            <input type="checkbox" required/>
            <p>By continuing,i agree to the terms  of use & privacy policy</p>

         </div>
         {currstate==="Login"? <p>Create a new account <span onClick={()=>setCurrstate("Sign up")}>Click here</span></p>:   
         <p>Already have a account <span onClick={()=>setCurrstate("Login")}>Login here</span></p>}
     
      </form>
    </div>
  )
}

export default Loginpop
