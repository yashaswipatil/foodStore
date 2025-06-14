import React from "react";
import ReactDOM from "react-dom/client";

const resList = [
  {
    id: "1",
    resName: "meghana foods",
    cuisine: "North Indian , South Indian , Asian",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/fb40dee9-b4c6-454e-8c79-dbdff33d7b36_1468.jpg",
    averageRating: "4.4",
    duration: "38",
  },
  {
    id: "2",
    resName: "KFC",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG",
    cuisine: "Burgers, Fast Food, Rolls & Wraps",
    averageRating: "4.4",
    duration: "35",
  },

  {
    id: "3",
    resName: "therobrama",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/11/5cdd5313-9777-4d55-800c-2cff2fa68ce8_426730.jpg",
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
