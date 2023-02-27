import React from 'react'
import "./InfoBox.css"


function InfoBox({info}) {
  return (
    <div className='info-box-container'>
      <img src={info?.image} alt={info?.h2}></img>
      <h2>{info?.h2}</h2>
      <p>{info?.p}</p>
    </div>
  )
}

export default InfoBox