import React, { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const json = await data.json();

    console.log(
      "99",
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setRestaurantList(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          {" "}
          <input type="search" className="search-box" />
          <button>Search</button>
        </div>
        <button
          className="Top-rated"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.averageRating > 4,
            );
            setRestaurantList(filteredList);
            console.log(filteredList);
          }}
        >
          Top-rated
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
