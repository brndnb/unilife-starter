import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-container'>
        <div className='left-container'>
         <a className='foot-nav'>About Us</a>
         <a className='foot-nav'>Terms & Conditions</a>
         <a className='foot-nav'>Privacy & Cookie Policies</a>
        </div>
        <div className='right-container'>
            <p className='foot-p'>2022</p>
            <p className='foot-p'>&copy;UniLife</p>
        </div>
    </div>
  )
}

export default Footer