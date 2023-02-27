import React from 'react'
import "./CityCard.css"

function CityCard({city}) {

  const cardStyle = {
    backgroundImage: `url("${city.image_url}")`,
    backgroundSize: "cover",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px"
  }


  return (
    <div className='city-card-container' style={cardStyle}>
      <h2>{city.name}</h2>
      <p>{city.property_count} properties</p>
    </div>
  )
}

export default CityCard