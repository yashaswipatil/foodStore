import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMenu = async () => {
    try {
      setLoading(true);

      const data = await fetch(
        `https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurantMenu/${resId}`,
      );

      if (!data.ok) {
        throw new Error("Failed to fetch menu");
      }

      const json = await data.json();

      setResInfo(json);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!resId) return;

    fetchMenu();
  }, [resId]);

  return {
    resInfo,
    loading,
    error,
  };
};

export default useRestaurantMenu;
