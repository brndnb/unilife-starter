import React from 'react'
import "./CityDetailsCard.css"
import bedroom from "../../assets/bedroom.png"
import shower from "../../assets/shower.png"
import map from "../../assets/map-pin.png"
import viewhome from "../../assets/viewhome.png"
import { Link } from 'react-router-dom'

function CityDetailsCard({info}) {



  return (
    <div className='info-container'>
      <div className='info-image-container'>
        <img className='info-image' src={info.images[0]}></img>
      </div>
      <div className='blue-box-info'>
          <div className='price-info'>
            <h2>&#163;{info.rent / 4}</h2>
            <p>pppw including bills</p>
          </div>
          <div className='bed-bath-info-container'>
            <div className='bed-info-container'>
              <img src={bedroom}></img>
              <p><strong>{info.bedroom_count}</strong></p>
            </div>
            <div className='bath-info-container'>
              <img src={shower}></img>
              <p><strong>{info.bathroom_count}</strong></p>
            </div>
          </div>
      </div>
      <div className='property-type'>
        <h3>{info.property_type}</h3>
        <h3>{info.furnished}</h3>
      </div>
      <div className='property-address'>
        <img src={map}></img>
        <p><strong>{info.address.street}, {info.address.city}, {info.address.postcode}</strong></p>
      </div>
      <Link to={`/homedetail/${info._id}`}><div className='view-home'>
        <img src={viewhome}></img>
        <p><strong>View Home</strong></p>
      </div></Link>
    </div>
  )
}

export default CityDetailsCard