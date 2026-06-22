import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            className="h-14 w-14 rounded-full object-cover"
            src={LOGO_URL}
            alt="logo"
          />
          <h1 className="text-2xl font-bold text-orange-500">Chef's Food</h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 font-medium text-slate-700">
            <li>
              <Link to="/" className="transition hover:text-orange-500">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="transition hover:text-orange-500">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition hover:text-orange-500">
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/cart" className="transition hover:text-orange-500">
                Cart
              </Link>
            </li>

            <li>
              <button
                className="rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600"
                onClick={() =>
                  setButtonName(buttonName === "Login" ? "Logout" : "Login")
                }
              >
                {buttonName}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
