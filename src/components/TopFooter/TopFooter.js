import React from 'react'
import "./TopFooter.css"
import { RiFacebookCircleFill } from "react-icons/ri"
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

function TopFooter() {
  return (
    <div className='topfooter-container'>
        <div className='topfooter-left'>
            <h1 className='topfooter-left-item'>Keep in touch</h1>
            <p className='topfooter-left-item topfooter-p'>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <input className='topfooter-left-item topfooter-input' type="email" placeholder='Your email.'></input>
        </div>
        <div className='topfooter-right'>
            <h1 className='topfooter-right-h1'>Let's Socialize</h1>
            <div className='topfooter-nav'>
                
            <a><RiFacebookCircleFill size="2rem" className='r-icon'/>Facebook</a>
                
            <a><AiFillTwitterCircle size="2rem" className='r-icon'/>Twitter</a>
            <a><AiFillInstagram size="2rem" className='r-icon'/>Instagram</a>
            </div>
        </div>
    </div>
  )
}

export default TopFooter