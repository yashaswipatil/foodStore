import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useCart } from "../utils/cartContext";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { addItem } = useCart();

  const { resInfo, loading, error } = useRestaurantMenu(resId);

  if (loading) {
    return <h2 className="p-4 text-center">Loading Menu...</h2>;
  }

  if (error) {
    return <h2 className="p-4 text-center">Error: {error}</h2>;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    sla,
    locality,
    areaName,
  } = resInfo?.data?.cards?.[2]?.card?.card?.info || {};

  const menuCategories =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="menu-page">
      {/* Restaurant Header */}
      <div className="res-header">
        <div className="res-header-info">
          <h1>{name}</h1>

          <p className="cuisines">{cuisines?.join(", ")}</p>

          <p className="location">
            {locality}, {areaName}
          </p>

          <p className="cost">{costForTwoMessage}</p>
        </div>

        <div className="res-header-stats">
          <div className="rating-badge">⭐ {avgRatingString}</div>

          <p className="total-ratings">{totalRatingsString}</p>

          <p className="delivery-time">🕐 {sla?.slaString}</p>

          <p className="distance">📍 {sla?.lastMileTravelString}</p>
        </div>
      </div>

      {/* Menu */}
      <div className="menu-container">
        <h2 className="menu-title">Menu</h2>

        {menuCategories.map((category, index) => {
          const title = category?.card?.card?.title;

          const itemCards = category?.card?.card?.itemCards;

          if (!title || !itemCards) return null;

          return (
            <div key={index} className="menu-category">
              <h3 className="category-title">
                {title} ({itemCards.length})
              </h3>

              <div className="menu-items">
                {itemCards.map((item) => {
                  const info = item?.card?.info;

                  return (
                    <div key={info?.id} className="menu-item">
                      <div className="menu-item-info">
                        <h4>{info?.name}</h4>

                        <p className="item-description">{info?.description}</p>

                        <p className="item-price">
                          ₹{(info?.price || info?.defaultPrice) / 100}
                        </p>
                      </div>

                      <button
                        className="add-btn"
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
  );
};

export default RestaurantMenu;
