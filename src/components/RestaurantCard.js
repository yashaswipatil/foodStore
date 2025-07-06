import React from "react";



const RestaurantCard = ({ resData }) => {
  const { resName, cuisine, averageRating, duration, img } = resData;
  return (
    <div className="res-card">
      <img className="res-img" alt="res-img" src={img} />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{averageRating} Star</h4>
      <h4>{duration} mins</h4>
    </div>
  );
};

export default RestaurantCard;
