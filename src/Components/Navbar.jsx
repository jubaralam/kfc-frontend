import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserData } from "./context/UserData";

const Navbar = () => {
  const [cart, setCart] = useState(0);
  const { userData, token } = useUserData();
  return (
    <div className=" bg-white  sticky top-0 z-50">
      <div className="max-w-7xl flex  items-center mx-auto py-5 px-7">
        <nav className="flex items-center justify-between w-full">
          {/* Logo and Navigation Links */}
          <ul className="flex space-x-5 items-center">
            <li>
              <Link to="/" aria-label="Home">
                <img
                  src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
                  alt="KFC Logo"
                  className="w-24"
                />
              </Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/deals">Deals</Link>
            </li>
          </ul>

          {/* User Profile and Cart */}
          <ul className="flex space-x-5 items-center">
            <li>
              <Link to="/profile" aria-label="Profile">
                <img
                  src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
                  alt="User Profile"
                  className="w-5"
                />
              </Link>
            </li>
            <li className="border-r border-gray-500 pr-3">
              <Link to="/login">{token ? userData.name : "Log In"}</Link>
            </li>
            <li className="flex items-center space-x-2">
              <span>{cart}</span>
              <Link to="/cart" aria-label="Cart">
                <img
                  src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
                  alt="Cart"
                  className="w-10"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
