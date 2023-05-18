import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import React, { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { Link, Outlet } from "react-router-dom";
import { filterData } from "../utils/helper";
import Search from "./Search";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const Body = () => {
  const restaurantData = useRestaurantInfo();
  const checkOnline = useOnline();
  if (!checkOnline) {
    return <h1>U R OFFLINE</h1>;
  }

  return restaurantData?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <Search />

      <div className="restaurantCard">
        {restaurantData?.length == 0 ? (
          <Shimmer />
        ) : (
          restaurantData.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
