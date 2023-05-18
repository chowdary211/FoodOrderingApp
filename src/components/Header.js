import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import logo from "../assets/img/foodAppLogo.png";
const Title = () => (
  <h1>
    <Link to="/">
      <img className="logoImage" src={logo} alt="Logo" />
    </Link>
  </h1>
);

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  const cartItems = useSelector((store) => store.cart.items);
  const cartQuantity = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <div className="navBar">
      <Title />
      <div>
        <ul className="navItems">
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/cart">
            <li>Cart {cartQuantity === 0 ? null : "- " + cartQuantity}</li>
          </Link>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setisLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setisLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
