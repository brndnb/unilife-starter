import React from 'react'
import "./HomeDetailPictureBox.css"

function HomeDetailPictureBox({propinfo}) {
  return (
    <div className='picture-box-container'>
      <div className='big-image'>
        
      </div>
      <div className='small-image'>
        <img src={propinfo}></img>
      </div>
    </div>
  )
}

export default HomeDetailPictureBox