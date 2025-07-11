import React from "react";

import RestaurantCard from "./RestaurantCard";
import { CDN_URL_1, CDN_URL_2, CDN_URL_3, CDN_URL_4 } from "../utils/constants";
// import resList from "../utils/mockData";

const Body = () => {

  let RestaurantList = [
     {
        id: "1",
        resName: "Meghana Foods",
        cuisine: "North Indian, South Indian, Asian",
        img: CDN_URL_1,
        averageRating: "4.4",
        duration: "38",
      },
      {
        id: "2",
        resName: "KFC",
        cuisine: "Burgers, Fast Food, Rolls & Wraps",
        img: CDN_URL_2,
        averageRating: "3.4",
        duration: "35",
      },
      {
        id: "3",
        resName: "Theobroma",
        cuisine: "Desserts, Beverages",
        img: CDN_URL_3,
        averageRating: "4.7",
        duration: "25",
      },
      {
        id: "4",
        resName: "Empire Restaurant",
        cuisine: "North Indian, Chinese",
        img: CDN_URL_4,
        averageRating: "4.2",
        duration: "30",
      },
  ]
  return (
    <div className="body">
      <div className="filter">
        <button
          className="Top-rated"
          onClick={() => {
            RestaurantList = RestaurantList.filter(
              (res) => res.averageRating > 4
            );
            console.log(RestaurantList);
          }}
        >
          Top-rated
        </button>
      </div>
      <div className="res-container">
        {RestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
