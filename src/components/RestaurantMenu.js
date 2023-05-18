import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";
import { IMG_CDN_URL_MENU } from "../config";
import useRestaurant from "../utils/useRestaurant";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  // To read dynamic urls
  const { id } = useParams();
  const restaurantInfo = useRestaurant(id);
  console.log(restaurantInfo);
  const { menu } = restaurantInfo;

  const [activeAccordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  }

  let min = 100;
  let max = 300;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <div className="menuContainer">
      <div className="menuContainerOne">
        {!restaurantInfo?.info?.avgRating ? (
          <Shimmer />
        ) : (
          <>
            <div>
              <h1>{restaurantInfo.info?.name}</h1>
              <h3>{"Rating: " + restaurantInfo?.info?.avgRating}</h3>
            </div>
            <img
              className="menuContainerOneImage"
              src={IMG_CDN_URL + restaurantInfo.info?.cloudinaryImageId}
            />
          </>
        )}
      </div>
      <hr className="divider"></hr>
      <div className="menuContainerTwo">
        <ul style={{ listStyleType: "none" }}>
          {menu &&
            menu.map((items, index) => {
              const category = items[0].category;
              const itemCount = items.length;
              return (
                <li key={index}>
                  <div className="" onClick={() => toggleAccordion(index)}>
                    <span>
                      {category} ({itemCount})
                    </span>
                    {/* <span>{activeAccordion === index ? "-" : "+"}</span> */}
                  </div>
                  <ul
                    hidden={activeAccordion !== index}
                    style={{ listStyleType: "none" }}
                  >
                    {items.map((menuItem) => (
                      <li key={menuItem.id}>
                        <div className="menuItems">
                          <div>
                            <p>{menuItem.name}</p>
                            <p>
                              {"Rs." +
                                (menuItem.price
                                  ? menuItem.price / 100
                                  : randomNum)}
                            </p>
                            <p>{menuItem.description}</p>
                            <button
                              className="btn-green"
                              onClick={() => handleAddItem(menuItem)}
                            >
                              Add
                            </button>
                            <button
                              className="btn-red"
                              onClick={() => handleRemoveItem(menuItem)}
                            >
                              Remove
                            </button>
                          </div>
                          {menuItem.imageId && (
                            <img
                              src={IMG_CDN_URL + menuItem.imageId}
                              alt={menuItem.name}
                            />
                          )}
                        </div>
                        <hr></hr>
                      </li>
                    ))}
                  </ul>
                  <hr className="dividerTwo"></hr>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
