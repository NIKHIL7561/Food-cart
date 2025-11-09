import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nemo, magnam cum molestiae, porro laborum harum, vel a modi quia amet ut beatae. Rem rerum quae, doloremque unde odio perferendis?
                Alias, incidunt natus? Qui labore et ratione, unde voluptate error veniam asperiores saepe dignissimos dolorem enim ad alias incidunt aspernatur perferendis aliquam quaerat fugiat eos. Alias voluptates ullam laboriosam ratione?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-768-880-5467</li>
                    <li>contactus@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 © Tomato.com All Right Reserved</p>
      
    </div>
  )
}

export default Footer
