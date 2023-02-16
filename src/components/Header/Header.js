import React from 'react'
import "./Header.css"
import homeicon from "../../assets/homeicon.png"
import hearticon from "../../assets/hearticon.png"
import email_icon from "../../assets/email_icon.png"

function Header() {
  return (
    <div className='header-container'>
        <div className='logo-container'>
            <img className='header-logo' src={homeicon}></img>
            <h1>UniLife</h1>
        </div>
        <div className='nav-container'>
           <div className='icon-container'> 
             <img className='icon' src={hearticon}></img>
             <a>Shortlist</a>
           </div>
           <div className='icon-container'>
             <img className='icon' src={email_icon}></img>
             <a>Contact Us</a>
           </div>        
        </div> 
    </div>
  )
}

export default Header