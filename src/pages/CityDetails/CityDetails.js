import React, {useState, useEffect} from 'react'
import Banner from '../../components/Banner/Banner'
import "./CityDetails.css"
import {useParams} from 'react-router-dom'
import axios from 'axios'
import studentImage from "../../assets/students.png"
import CityDetailsCard from '../../components/CityDetailsCard/CityDetailsCard'

function CityDetails() {

    const {cityId} = useParams();

    //states for city and property
    const [cityInfo, setCityInfo] = useState([])
    const [propertyInfo, setPropertyInfo] = useState([])
 

    useEffect(

   
        () => {
            //API call for cities

            axios.get(`https://unilife-server.herokuapp.com/cities/${cityId}`) 
            .then(res => {
                 setCityInfo(res.data.data) 
                })
            .catch(err => console.log(err))
            

            //API call for property info
            axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
            .then(res => {
                console.log(res.data.response)
                setPropertyInfo(res.data.response)
            })
            .catch(err => console.log(err))
    
      },[]
      )


  return (
    <div className='city-details-container'>
        <Banner htag="Student Accomodation"
                ptag="Whatever you're after, we can help you find the right student accommodation for you."/>
        <h1>{cityInfo[0]?.property_count} homes in {cityInfo[0]?.name}</h1>
        <div className='city-details-card-container'>         
                              {
                                propertyInfo.map(item => <CityDetailsCard 
                                                          info={item}/> )
                              } 
        </div>
        <div className='city-detail-info-box-container'>
            <div className='city-detail-info-box'>
                <div className='city-detail-info-box-text-container'>
                    <h1> Being a student in {cityInfo[0]?.name}</h1>

                    <p>{cityInfo[0]?.student_life}</p><br></br>
                    <p>{cityInfo[0]?.universities}</p>
                </div>
                <img className='city-details-students-img' src={studentImage} alt="students"></img>        
            </div>
        </div>
    </div>
  )
}

export default CityDetails