import restaurants from "../../data/restaurants.json";
import RestaurantItem from "../../RestaurantItem";
import React from "react";

function RestaurantsList(){
    return(
        <div className="Cards_Container">
            {restaurants.map((restaurant) => {
                return (
                    <RestaurantItem restaurant={restaurant}/>
                )
            })}
        </div>
    )
}
export default RestaurantsList