import React, {useEffect, useState} from 'react'
import SearchByCityCard from '../SearchByCityCard/SearchByCityCard'
import "./SearchByCity.css"
import axios from "axios"

function SearchByCity() {
  const [cities, setCities] = useState([]) 





  useEffect(

    //fetch API "Cities" API with index of 0 to 5
    () => {
  axios.get("https://unilife-server.herokuapp.com/cities?limit=20") 
    .then(res => {
      setCities(res.data.response) //Splice results to only get 6 and place it on State Array
    })

  },[]

  )
  return (
    <div className='search-by-city-container'>
        <h1>Search By City</h1>
        <div className="search-by-city-card-container">
        {
          cities.map(item => <SearchByCityCard
            key={item._id}   
            city={item}/> )
        }
        
        </div>
    </div>
  )
}

export default SearchByCity