import React from "react";
import ReactDOM from "react-dom/client";

const resList = [
  {
    id: "1",
    resName: "meghana foods",
    cuisine: "North Indian , South Indian , Asian",
    averageRating: "4.4",
    duration: "38",
  },
  {
    id: "2",
    resName: "KFC",
    cuisine: "Burgers, Fast Food, Rolls & Wraps Central Bangalore",
    averageRating: "4.4",
    duration: "35",
  },

  {
    id: "3",
    resName: "therobrama",
    cuisine: "Desserts , beverages",
    averageRating: "4.7",
    duration: "25",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://tse3.mm.bing.net/th?id=OIP.DJXkSF9B--LYE8SM7M8yCAHaHa&pid=Api&P=0&h=220"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({resData}) => {
   const { resName , cuisine , averageRating , duration} = resData;
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/fd0351d2-f8a7-4b61-baec-886ab1e98170_393107.jpg"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{averageRating} Star</h4>
      <h4>{duration} mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="search" />
        <button name="Search" />
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
