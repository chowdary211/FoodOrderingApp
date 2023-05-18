import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [restaurantInfo, setRestaurantInfo] = useState({});

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.851084&lng=77.6686171&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    let resBasicInfo, resMenu;
    if (json?.data?.cards.length === 2) {
      [resBasicInfo, resMenu] = json?.data?.cards;
    } else {
      [resBasicInfo, , resMenu] = json?.data?.cards;
    }
    const { info } = resBasicInfo?.card?.card;
    let menu = resMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((item) =>
      item?.card?.card?.itemCards?.map((item2) => item2?.card?.info)
    );
    menu = menu.filter((item) => item !== undefined);
    setRestaurantInfo({ info, menu });
  }

  return restaurantInfo;
};

export default useRestaurant;
