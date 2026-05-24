import React, { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [originalList, setOriginalList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [isTopRated, setIsTopRated] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();

    const restaurants =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setOriginalList(restaurants);
    setRestaurantList(restaurants);
    setIsLoading(false);
  };

  const applyFilters = (text, topRated) => {
    let result = originalList;

    if (topRated) {
      result = result.filter((res) => parseFloat(res.info.avgRating) > 4.5);
    }

    if (text) {
      result = result.filter((res) =>
        res.info.name.toLowerCase().includes(text.toLowerCase()),
      );
    }

    setRestaurantList(result);
  };

  if (isLoading) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          {" "}
          <input
            type="search"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              applyFilters(e.target.value, isTopRated);
            }}
          />
          <button onClick={() => applyFilters(searchText, isTopRated)}>
            Search
          </button>
        </div>
        <button
          className="Top-rated"
          onClick={() => {
            const newVal = !isTopRated;
            setIsTopRated(newVal);
            applyFilters(searchText, newVal);
          }}
        >
          {isTopRated ? "✅ Top-rated" : "⭐ Top-rated"}
        </button>
      </div>
      <div className="res-container">
        {restaurantList.length === 0 ? (
          <div className="no-results">
            <h2>😕 No restaurants found</h2>
            <p>Try a different search or remove filters</p>
          </div>
        ) : (
          restaurantList.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant} index={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
