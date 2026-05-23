import React from "react";
import { CDN_URLS } from "../utils/constants";

const RestaurantCard = ({ resData , index}) => {
  const info = resData?.info;

  if (!info) {
    return null; // Render nothing if info is missing
  }

  const {
    name = "Unknown",
    cloudinaryImageId,
    cuisines = [],
    avgRating = "N/A",
    sla = {},
  } = info;

  const deliveryTime = sla.deliveryTime || "N/A";

  return (
    <div className="res-card">
      <img
        className="res-img"
        alt={name}
        src={CDN_URLS[index % CDN_URLS.length]}
      />
      <h3>{name}</h3>
      <h4>{cuisines[0] || "Various Cuisines"}</h4>
      <h4>{avgRating} Star</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
