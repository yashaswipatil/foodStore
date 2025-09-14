import React from "react";

const RestaurantCard = ({ resData }) => {
  const info = resData?.card?.card?.info;

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
        src={
          cloudinaryImageId ? `https://example.com/${cloudinaryImageId}` : ""
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines[0] || "Various Cuisines"}</h4>
      <h4>{avgRating} Star</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
