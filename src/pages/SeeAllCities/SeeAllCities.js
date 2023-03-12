import React from 'react'
import Banner from '../../components/Banner/Banner'
import SearchByCity from '../../components/SearchByCity/SearchByCity'
import "./SeeAllCities.css"



function SeeAllCities() {



  


  
  return (
    <div>
        <Banner htag="Student Accomodation"
                ptag="UniLife have student accommodation available across the UK. Whatever you're after, we can help you find the right student accommodation for you."/>
        <SearchByCity />
    </div>
  )
}

export default SeeAllCities