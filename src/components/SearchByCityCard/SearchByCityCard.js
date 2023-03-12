import React from 'react'
import "./SearchByCityCard.css"
import { Link } from 'react-router-dom'

function SearchByCityCard({city}) {
  return (
    <Link to={`/citydetails/${city._id}`}><div className='search-card-container'>{city.name}</div></Link>
  )
}

export default SearchByCityCard