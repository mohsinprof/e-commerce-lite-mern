import React from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "../DarkmodeToggle";

export default function Header() {
  return (
    <div>
      <nav className="navbar flex justify-between items-center px-8 py-4 backdrop-blur-md bg-opacity-70 border border-transparent hover:border-white/10 transition-all duration-500 ease-in-out">
        {/* LOGO */}
        <div>
          <NavLink
            to="/"
            className="text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-400 dark:from-amber-200 dark:via-pink-400 dark:to-fuchsia-300 transition-all duration-500 hover:scale-110"
          >
            LOGO
          </NavLink>
        </div>

        {/* NAV LINKS */}
        <div className="flex space-x-6 text-lg font-semibold">
          <NavLink to="/" className="navtext hover:text-[#F26A2E] dark:hover:text-[#E2728F]">
            Home
          </NavLink>
          <NavLink to="/products" className="navtext hover:text-[#614EA7] dark:hover:text-[#7C69C4]">
            Products
          </NavLink>
          <NavLink to="/cart" className="navtext hover:text-[#614EA7] dark:hover:text-[#7C69C4]">
            Cart
          </NavLink>
          <NavLink to="/login" className="navtext hover:text-[#E2510E] dark:hover:text-[#D45170]">
            Login
          </NavLink>
          <DarkModeToggle />
        </div>
      </nav>
    </div>
  );
}
