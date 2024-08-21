import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import LanguageButton from "../languages dropdown/LanguageButton";

const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleSideMenu = () => setShowSideMenu(!showSideMenu);

  return (
    <nav className="bg-NavyN900 flex flex-row justify-between items-center w-full h-12 py-2 px-4">
      {/* Logo and Menu Button */}
      <div className="flex flex-row items-center gap-2">
        <div className="flex items-center justify-center w-12 h-10">
          <img
            src="/assets/1001_LOGO.svg"
            alt="1001.tv logo"
            className="w-12 h-auto"
          />
        </div>
        <button className="lg:hidden" onClick={toggleSideMenu}>
          <HiMenu className="text-white w-5 h-5" />
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`lg:flex flex-col lg:flex-row lg:space-x-6 absolute lg:relative top-12 lg:top-0 left-0 w-full h-full lg:w-auto lg:h-auto bg-NavyN900 transition-transform duration-300 lg:translate-x-0 ${
          showSideMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <li className="py-2 lg:py-0">
          <Link
            href="/en"
            className="block px-4 py-2 text-white font-semibold text-sm"
          >
            Home
          </Link>
        </li>
        <li className="py-2 lg:py-0">
          <Link
            href="/en/series"
            className="block px-4 py-2 text-white font-semibold text-sm"
          >
            Series
          </Link>
        </li>
        <li className="py-2 lg:py-0">
          <Link
            href="/en/tv-shows"
            className="block px-4 py-2 text-white font-semibold text-sm"
          >
            TV Shows
          </Link>
        </li>
        <li className="py-2 lg:py-0">
          <Link
            href="/en/sports"
            className="block px-4 py-2 text-white font-semibold text-sm"
          >
            Sports
          </Link>
        </li>
        <li className="py-2 lg:py-0">
          <Link
            href="/en/my-watchlist"
            className="block px-4 py-2 text-white font-semibold text-sm"
          >
            My Watchlist
          </Link>
        </li>
        <li className="py-2 lg:py-0 mx-2 lg:mx-0">
          <LanguageButton />
        </li>
      </ul>

      {/* Icons */}
      <div className="flex flex-row items-center gap-2">
        <button className="w-10 h-10 py-2 px-3">
          <IoSearch className="text-white w-5 h-5" />
        </button>
        <div className="flex bg-NavyN600 w-10 h-10 rounded-full items-center justify-center">
          <FaUser className="text-Green w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
