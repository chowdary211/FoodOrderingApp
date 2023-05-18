import { IMG_CDN_URL } from "../config";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const CartCard = (props) => {
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

  return (
    <div>
      <div className="cartRowOne">
        <h4>{props.name}</h4>
        <span className="cartAddRemoveBtn">
          <button
            className="noStyleBtn"
            onClick={() => handleRemoveItem(props)}
          >
            -
          </button>
          <p>{props.quantity}</p>
          <button className="noStyleBtn" onClick={() => handleAddItem(props)}>
            +
          </button>
        </span>
        <h4>
          {props.price
            ? (props.quantity * props.price) / 100
            : props.quantity * randomNum}
        </h4>
      </div>
    </div>
  );
};

export default CartCard;
