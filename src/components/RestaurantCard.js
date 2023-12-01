
import { IMG_CDN_URL } from "../constants"

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, deliveryTime }) => {

    return (
        <div className="card">
            <img src={IMG_CDN_URL +
                cloudinaryImageId} alt="" />
            <div className="card-text">
                <h2>{name}</h2>
                <h4>{cuisines.join(", ")}</h4>
                <p>{deliveryTime} Minutes</p>
            </div>
        </div>
    )
}

export default RestaurantCard;