import React from "react";
import { CDN_URLS } from "../utils/constants";

const RestaurantCard = ({ resData, index }) => {
  const info = resData?.info;

  if (!info) return null;

  const {
    name = "Unknown",
    cuisines = [],
    avgRating = "N/A",
    sla = {},
    costForTwo = "",
  } = info;

  const deliveryTime = sla.deliveryTime || "N/A";

  return (
    <div className="res-card">
      {/* Image */}
      <div style={{ position: "relative" }}>
        <img
          className="res-img"
          alt={name}
          src={CDN_URLS[index % CDN_URLS.length]}
        />
        {/* Rating Badge */}
        <div
          style={{
            position: "absolute",
            bottom: "8px",
            left: "10px",
            background: avgRating >= 4 ? "#534AB7" : "#888",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 600,
            padding: "3px 8px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            gap: "3px",
          }}
        >
          ⭐ {avgRating}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "0.25rem 0" }}>
        <h3>{name}</h3>
        <h4 style={{ color: "#888" }}>
          {cuisines.slice(0, 2).join(", ") || "Various Cuisines"}
        </h4>

        {/* Meta Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "4px 1rem 0",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "#555",
              display: "flex",
              alignItems: "center",
              gap: "3px",
            }}
          >
            🕒 {deliveryTime} mins
          </span>
          {costForTwo ? (
            <>
              <span style={{ color: "#ddd", fontSize: "12px" }}>•</span>
              <span style={{ fontSize: "12px", color: "#555" }}>
                {costForTwo}
              </span>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
