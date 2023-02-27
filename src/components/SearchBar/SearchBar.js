import React from 'react'
import "./SearchBar.css"

function SearchBar() {
  return (
    <div className='search-bar-container'>  
        <div className='search-bar'>
            <select name='city' id='city'>
                <option disabled selected>Search by city</option>
            </select>
            <select name='bedroom' id='bedroom'>
                <option disabled selected>Any bedroom</option>
            </select>
            <button className='btn'>Find Homes</button>
        </div>
    </div>
  )
}

export default SearchBar