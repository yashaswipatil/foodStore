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
    <div className="h-full overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image Section */}
      <div className="relative">
        <img
          src={CDN_URLS[index % CDN_URLS.length]}
          alt={name}
          className="h-52 w-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

        {/* Rating Badge */}
        <div
          className={`absolute bottom-3 left-3 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white ${
            Number(avgRating) >= 4 ? "bg-green-600" : "bg-gray-600"
          }`}
        >
          ⭐ {avgRating}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Restaurant Name */}
        <h3 className="truncate text-lg font-bold text-slate-800">{name}</h3>

        {/* Cuisines */}
        <p className="mt-1 truncate text-sm text-slate-500">
          {cuisines.slice(0, 3).join(", ") || "Various Cuisines"}
        </p>

        {/* Meta Row */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
            🕒 {deliveryTime} mins
          </span>

          {costForTwo && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              {costForTwo}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
