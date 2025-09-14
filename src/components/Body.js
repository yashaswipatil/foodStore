import React, { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";


const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    
    console.log(json?.data?.cards);
    setRestaurantList(json?.data?.cards);
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="Top-rated"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.averageRating > 4
            );
            setRestaurantList(filteredList);
            console.log(filteredList);
          }}
        >
          Top-rated
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant , i) => (
          <RestaurantCard
            key={i}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
