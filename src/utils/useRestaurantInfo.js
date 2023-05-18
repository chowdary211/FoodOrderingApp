import { useState, useEffect } from "react";

const useRestaurantInfo = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8515888&lng=77.668824&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return allRestaurants;
};

export default useRestaurantInfo;
