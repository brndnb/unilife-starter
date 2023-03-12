import React from 'react'
import "./Banner.css"

function Banner({htag, ptag}) {
  return (
    <div className='banner-container'>
        <div className='banner-overlay'></div>
        <h1 className='banner-h1'>{htag}</h1>
        <p className='banner-p'>{ptag}</p>
    </div>
  )
}

export default Banner