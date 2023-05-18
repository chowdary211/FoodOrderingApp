import { IMG_CDN_URL } from "../config";

const RestaurantCard = (props) => {
  return (
    <div className="cardContainer">
      <img className="image" src={IMG_CDN_URL + props.cloudinaryImageId} />
      <h2>{props.name}</h2>
      <h4>{props.cuisines.join(", ")}</h4>
      <h4>{"Rating: " + props.avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
