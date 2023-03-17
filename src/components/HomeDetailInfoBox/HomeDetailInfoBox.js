
import "./HomeDetailInfoBox.css"
import bedroom from "../../assets/bedblue.png"
import bathroom from "../../assets/showerblue.png"
import heart from "../../assets/heart.jpg"


function HomeDetailInfoBox({propinfo}) {



  return (
    <div className="home-detail-master-container">
      <div className="home-detail-info-box-container">
        <div className="address">
          <h1>{propinfo?.address?.street}, {propinfo?.address?.city}, {propinfo?.address?.postcode}</h1>
        </div>
        <div className="info-area-container">
          <div className="bedroom-box-area info-area-item">
            <p>Bedrooms</p>
            <div className="info-area-image">
              <img src={bedroom}></img>
              <h1>{propinfo?.bedroom_count}</h1>
            </div>
          </div>
          <div className="bathroom-box-area info-area-item">
            <p>Bathrooms</p>
            <div className="info-area-image">
              <img src={bathroom}></img>
              <h1>{propinfo?.bathroom_count}</h1>
            </div>
          </div>
          <div className="property-type-box info-area-item">
            <p>Property Type</p>
            <h3>{propinfo?.property_type}</h3>
          </div>
          <div className="price-box info-area-item">
            <p>Price</p>
            <h1>${propinfo?.rent}</h1>
          </div>
          <div className="furnished-type-box info-area-item">
            <p>Furnished Type</p>
            <h3>{propinfo?.furnished}</h3>
          </div>
          <div className="available-from-box info-area-item">
            <p>Available From:</p>
            <h3>{propinfo?.availability}</h3>
          </div>
        </div>
      </div>
      <div className="buttons-container">
          <button className="button-with-image">
            <img src={heart}></img>
            <p>Shortlist</p>
          </button>
          <button className="button-blue">Book Viewing</button>
      </div>
      
    </div>
    
    
  )
}

export default HomeDetailInfoBox