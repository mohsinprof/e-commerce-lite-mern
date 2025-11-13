import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer bg-navbar-bglight dark:bg-navbar-bgdark text-navbar-textlight dark:text-navbar-textdark mt-10 py-6 px-8 transition-colors duration-500 ease-in-out">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        {/* Left: Logo or Brand */}
        <div className="text-2xl font-bold tracking-wide">
          <NavLink
            to="/"
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-400 dark:from-amber-200 dark:via-pink-400 dark:to-fuchsia-300"
          >
            LOGO
          </NavLink>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex space-x-6 text-base font-medium">
          <NavLink to="/" className="hover:text-[#F26A2E] dark:hover:text-[#E2728F] transition-colors duration-300">
            Home
          </NavLink>
          <NavLink to="/products" className="hover:text-[#614EA7] dark:hover:text-[#7C69C4] transition-colors duration-300">
            Products
          </NavLink>
          
        </div>

        {/* Right: Copyright */}
        <div className="text-sm opacity-80">
          © {new Date().getFullYear()} YourStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
