import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <a href="/home">
        <img src={logo} alt="" />
      </a>
      <div>
        <a href="/shop">Shop</a>
        <a href="/order">Order</a>
        <a href="/inventory">Inventory</a>
        <a href="/signup">Sign up</a>
      </div>
    </nav>
  );
};

export default Header;
