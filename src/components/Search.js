import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { filterData } from "../utils/helper";
import { Link } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState();
  const restaurantData = useRestaurantInfo();

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurantData);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurantCard">
        {!filteredRestaurants ? null : filteredRestaurants?.length === 0 ? (
          <h1>NO MATCH</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Search;
