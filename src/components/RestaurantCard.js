
import {IMG_CDN_URL} from "../constants"

const RestaurantCard = ({name, cuisines, cloudinaryImageId, deliveryTime}) =>{
  
    return (
        <div className="card">
            <img src={IMG_CDN_URL +
             cloudinaryImageId} alt="" />
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    )
}

export default RestaurantCard;