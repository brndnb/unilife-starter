import React, {useState, useEffect} from 'react'
import CityCard from '../CityCard/CityCard'
import "./TopCities.css"
import axios from 'axios'

function TopCities() {

  //Set state for top cities in an empty array

  const [cities, setCities] = useState([]) 





  useEffect(

    //fetch API "Cities" API with index of 0 to 5
    () => {
  axios.get("https://unilife-server.herokuapp.com/cities") 
    .then(res => {
      setCities(res.data.response.splice(0, 9)) //Splice results to only get 6 and place it on State Array
    })

  },[]

  )



  return (
    <div className='accomodations-container'>
      
      <h1 className='accomodations-header'>Student accomodations in our top cities</h1>
      <div className='accomodations-card-container'>
        {

          cities.map(item => <CityCard 
                              key={item._id}   
                              city={item}/> )
          
        }
      </div>
    </div>
  )
}

export default TopCities