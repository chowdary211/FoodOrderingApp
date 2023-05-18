import { useSelector } from "react-redux";

const CartBill = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const itemsTotal = cartItems.reduce((acc, curr) => {
    return acc + (curr.price / 100) * curr.quantity;
  }, 0);
  console.log(itemsTotal);
  const deliveryFee =
    itemsTotal > 1000 ? 0 : ((itemsTotal * 3) / 100).toFixed(2);
  const platformFee = 2;
  const gstAndRestaurantCharges = ((itemsTotal * 10) / 100).toFixed(2);
  const toPay = (
    parseFloat(itemsTotal) +
    parseFloat(deliveryFee) +
    parseFloat(platformFee) +
    parseFloat(gstAndRestaurantCharges)
  ).toFixed(2);

  return (
    <div className="cartRowTwo">
      <h4>Bill Details</h4>
      <p>Item Total: {itemsTotal}</p>
      <p>Delivery Fee: {deliveryFee}</p>
      <p>Platform Fee: {platformFee}</p>
      <p>GST and Restaurant Charges: {gstAndRestaurantCharges}</p>
      <hr className="divider"></hr>
      <h4>To Pay: {toPay}</h4>
    </div>
  );
};

export default CartBill;
