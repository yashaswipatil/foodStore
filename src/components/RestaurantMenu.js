import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useCart } from "../utils/cartContext";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { addItem } = useCart();

  const { resInfo, loading, error } = useRestaurantMenu(resId);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-slate-600">
        Loading Menu...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-red-500">
        Error: {error}
      </div>
    );
  }

  const info = resInfo?.data?.cards?.[2]?.card?.card?.info || {};

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    sla,
    locality,
    areaName,
  } = info;

  const menuCategories =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Restaurant Header */}
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h1 className="text-3xl font-bold text-slate-800">{name}</h1>

          <p className="mt-2 text-sm text-slate-500">{cuisines?.join(", ")}</p>

          <p className="text-sm text-slate-500">
            📍 {locality}, {areaName}
          </p>

          <p className="mt-1 text-sm font-medium text-slate-700">
            {costForTwoMessage}
          </p>

          {/* Stats Row */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-green-600 px-3 py-1 text-white">
              ⭐ {avgRatingString} ({totalRatingsString})
            </span>

            <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">
              🕐 {sla?.slaString}
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
              📍 {sla?.lastMileTravelString}
            </span>
          </div>
        </div>

        {/* Menu Title */}
        <h2 className="mt-10 text-2xl font-bold text-slate-800">Menu</h2>

        {/* Menu Categories */}
        <div className="mt-6 space-y-8">
          {menuCategories.map((category, index) => {
            const title = category?.card?.card?.title;
            const itemCards = category?.card?.card?.itemCards;

            if (!title || !itemCards) return null;

            return (
              <div key={index} className="rounded-2xl bg-white p-5 shadow-md">
                <h3 className="mb-4 text-lg font-semibold text-slate-700">
                  {title} ({itemCards.length})
                </h3>

                <div className="space-y-4">
                  {itemCards.map((item) => {
                    const info = item?.card?.info;

                    return (
                      <div
                        key={info?.id}
                        className="flex items-start justify-between gap-4 border-b pb-4 last:border-none"
                      >
                        {/* Left Info */}
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate font-semibold text-slate-800">
                            {info?.name}
                          </h4>

                          <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                            {info?.description}
                          </p>

                          <p className="mt-2 font-semibold text-orange-500">
                            ₹{(info?.price || info?.defaultPrice || 0) / 100}
                          </p>
                        </div>

                        {/* Add Button */}
                        <button
                          onClick={() =>
                            addItem({
                              id: info?.id,
                              name: info?.name,
                              restaurant: name,
                              price:
                                (info?.price || info?.defaultPrice || 0) / 100,
                              qty: 1,
                              emoji: "🍽️",
                            })
                          }
                          className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
                        >
                          ADD +
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
