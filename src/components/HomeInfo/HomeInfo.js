import React, {useState, useEffect} from 'react'
import "./HomeInfo.css"
import InfoBox from "../InfoBox/InfoBox"
import search from "../../assets/search.jpg"
import compare from "../../assets/compare.jpg"
import bills from "../../assets/bills.jpg"

function HomeInfo() {

    const [infos, setInfos] = useState([])



    useEffect(

        () => {

        setInfos([

            {
                image: search,
                h2: "Search",
                p: "Find your dream home in the perfect area near your university.",
                id: 1
            },
            {
                image: compare,
                h2: "Compare",
                p: "Compare student accomodations to find the right home for you",
                id: 2
            },
            {
                image: bills,
                h2: "Bills Included",
                p: "Bills are included on all rent prices. No hidden fees.",
                id: 3
            }


        ])

    
},[]

    )




    
  return (
    <div className='home-info-container'>
        <div className='home-info-header'>
            <h1>Compare all inclusive student homes.</h1>
        </div>
        <div className='home-info-box'>
            {
            infos.map(item => <InfoBox key={item.id}
                                    info={item}/>)
            
            }
        </div>
    </div>
  )
}

export default HomeInfo