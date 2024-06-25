import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const {loggedInUser}= useContext(UserContext);
  // console.log(loggedInUser)

const onlineStatus= UseOnlineStatus();

//subscribing to the store using selector
const cartItems= useSelector((store)=>store.cart.items);
// console.log(cartItems)


  return (
    <div className="flex justify-between items-center shadow-lg bg-pink-100 h-20">
      <div>
        <img src={LOGO_URL} alt="food logo" className="w-46 h-20" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4"   >
        <li className="px-4">
        Online Status: {onlineStatus ? "🟢": "🔴"}
        </li>
          <li className="px-4 ">
            <Link to="/" className="no-underline text-black">Home</Link>
          </li>
          <li className="px-4 ">
            <Link to="/about" className="no-underline text-black">About</Link>
          </li>
          <li className="px-4 ">
            <Link to="/contact" className="no-underline text-black">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
          <Link to="/cart" className="no-underline text-black"> Cart ({cartItems.length})</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
            </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
