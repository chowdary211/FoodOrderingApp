import { useSelector, useDispatch } from "react-redux";
import CartCard from "./CartCard";
import CartBill from "./CartBill";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <div className="cartCard">
        <div>
          {cartItems.map((item) => (
            <CartCard key={item.id} {...item} />
          ))}
        </div>
        <button className="clearCartBtn" onClick={() => handleClearCart()}>
          CLearCart
        </button>
        <div>
          <CartBill />
        </div>
      </div>
    </div>
  );
};

export default Cart;
