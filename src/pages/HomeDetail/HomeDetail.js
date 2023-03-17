import React, {useState, useEffect} from 'react'
import "./HomeDetail.css"
import { useParams } from 'react-router-dom';
import HomeDetailPictureBox from '../../components/HomeDetailPictureBox/HomeDetailPictureBox';
import HomeDetailInfoBox from '../../components/HomeDetailInfoBox/HomeDetailInfoBox';
import axios from 'axios';
import HomeDetailDescription from '../../components/HomeDetailDescription/HomeDetailDescription';
import HomeDetailKeyFeatures from '../../components/HomeDetailKeyFeatures/HomeDetailKeyFeatures';



function HomeDetail() {


  const {propertyId} = useParams();

  //states for city and property
  const [infoDetail, setInfoDetail] = useState([])


  useEffect(

 
      () => {

          //API call for property info
          axios.get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
          .then(res => {
              console.log(res.data)
              setInfoDetail(res.data)
          })
          .catch(err => console.log(err))
  
    },[]
    )



    


  return (
    <div className='home-detail-page-container'>


      <HomeDetailInfoBox propinfo={infoDetail} />
      <HomeDetailDescription propinfo={infoDetail} />
      <h1>Key Features</h1>
      {
        infoDetail?.key_features?.map(item => <HomeDetailKeyFeatures propinfo={item} />)
      }
      {
        infoDetail?.images?.map(item => <HomeDetailPictureBox propinfo={item} />)
      }

      
  
    </div>
  )
}

export default HomeDetail