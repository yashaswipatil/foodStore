import React, { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
   <div className="min-h-screen bg-gray-50">
     <div className="mx-auto max-w-7xl px-6 py-8">
       {/* Hero Section */}
       <div className="mb-8">
         <h1 className="text-4xl font-bold text-slate-800">
           Discover Great Food 🍽️
         </h1>
         <p className="mt-2 text-slate-500">
           Order from your favorite restaurants near you
         </p>
       </div>

       {/* Filters */}
       <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
         <div className="flex w-full max-w-xl overflow-hidden rounded-xl border bg-white shadow-sm">
           <input
             type="search"
             placeholder="Search restaurants..."
             className="flex-1 px-4 py-3 outline-none"
             value={searchText}
             onChange={(e) => setSearchText(e.target.value)}
             onKeyDown={(e) => {
               if (e.key === "Enter") applyFilters(searchText, isTopRated);
             }}
           />

           <button
             className="bg-orange-500 px-6 text-white transition hover:bg-orange-600"
             onClick={() => applyFilters(searchText, isTopRated)}
           >
             Search
           </button>
         </div>

         <button
           className={`rounded-xl px-5 py-3 font-medium shadow transition ${
             isTopRated
               ? "bg-green-500 text-white"
               : "bg-white text-slate-700 hover:bg-gray-100"
           }`}
           onClick={() => {
             const newVal = !isTopRated;
             setIsTopRated(newVal);
             applyFilters(searchText, newVal);
           }}
         >
           {isTopRated ? "✅ Top Rated" : "⭐ Top Rated"}
         </button>
       </div>

       {/* Error */}
       {error && (
         <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
           {error}
         </div>
       )}

       {/* Restaurant Grid */}
       {!error && (
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
           {restaurantList.length === 0 ? (
             <div className="col-span-full rounded-2xl bg-white p-12 text-center shadow-md">
               <h2 className="mb-2 text-2xl font-semibold text-slate-700">
                 😕 No restaurants found
               </h2>
               <p className="text-slate-500">
                 Try changing your search or filters
               </p>
             </div>
           ) : (
             restaurantList.map((restaurant, index) => (
               <Link
                 key={restaurant.info.id}
                 to={`/restaurant/${restaurant.info.id}`}
                 className="block"
               >
                 <RestaurantCard resData={restaurant} index={index} />
               </Link>
             ))
           )}
         </div>
       )}
     </div>
   </div>
 );
};

export default Body;
