import React, { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [originalList, setOriginalList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [isTopRated, setIsTopRated] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurants",
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();

      const restaurants =
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

          console.log('res' , restaurants)

      if (!restaurants || !Array.isArray(restaurants)) {
        throw new Error("Invalid data structure received from API");
      }

      setOriginalList(restaurants);
      setRestaurantList(restaurants);
    } catch (err) {
      setError(err.message || "Failed to fetch restaurants");
      setOriginalList([]);
      setRestaurantList([]);
    } finally {
      setIsLoading(false);
    }
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
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") applyFilters(searchText, isTopRated);
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

      {isLoading && <p className="loading">Loading restaurants...</p>}
      {error && <p className="error">{error}</p>}

      {!isLoading && !error && (
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
      )}
    </div>
  );
};

export default Body;
