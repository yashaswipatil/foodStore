import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    fontSize: "14px",
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
        <span className="brand-name">Chef's Food</span>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" style={linkStyle}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" style={linkStyle}>
              Cart
            </Link>
          </li>
          <button
            className="login-btn"
            onClick={() =>
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login")
            }
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
