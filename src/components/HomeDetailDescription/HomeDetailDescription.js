import React from 'react'
import "./HomeDetailDescription.css"

function HomeDetailDescription({propinfo}) {





  return (
    <div className='home-detail-description-container'>
      
      <h1>Description</h1>
      <p>{propinfo?.property_description}</p>
    </div>
  )
}

export default HomeDetailDescription