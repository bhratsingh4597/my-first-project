import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
 const filterData = restaurants.filter((restaurant)=> restaurant.data.name.includes(searchText))
 return filterData;
}


const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText} onChange={(e)=> 
            setSearchText(e.target.value)
          }
        />
        <button onClick={ ()=>{
          const data = filterData(searchText, restaurants);
          setRestaurants(data)
        }

        }>Search</button>
      </div>
      <div className="restrautlist">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
