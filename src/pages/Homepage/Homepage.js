import React from 'react'
import Banner from '../../components/Banner/Banner'
import "./Homepage.css"
import person from "../../assets/person.jpg"
import bestSelection from "../../assets/best_selection.jpg"
import heart from "../../assets/heart.jpg"
import TopCities from '../../components/TopCities/TopCities'
import SearchBar from '../../components/SearchBar/SearchBar'
import HomeInfo from '../../components/HomeInfo/HomeInfo'


function Homepage() {
  return (
    <div>
        <Banner />
        <SearchBar />
        <TopCities />
        <HomeInfo />
        <div className='homepage-bottom-container'>
            <div className='bottom-container-left'>
                <div className='best-selection-container'>
                    <div className='best-selection-header'>
                     <img className='best-selection-image' src={bestSelection} alt="hand on home logo"></img>
                     <h1>Best selection</h1>
                    </div>
                    <p>Best selection of student accommodations.
                    Never been easier to find a home that's
                    right for you.
                    </p>
                </div>
                <div className='heart-container'>
                    <div className='heart-header'>    
                     <img className='heart-image' src={heart} alt="heart"></img>
                     <h1>Your favorite</h1>
                    </div>
                <p>Shortlist your favourite properties and send
                    enquiries in one click.
                </p>
                </div>
                <button className='btn search-and-compare'>Search & Compare</button>
            </div>
            <div className='bottom-container-right'>
                <img className='person-image' src={person} alt="person"></img>
            </div>
        </div>
        
        

    </div>
  )
}

export default Homepage