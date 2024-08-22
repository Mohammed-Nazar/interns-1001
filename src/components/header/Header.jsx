import React, { useState } from "react"
import { HiMenu } from "react-icons/hi"
import { IoSearch } from "react-icons/io5"
import { FaUser } from "react-icons/fa"
import Link from "next/link"
import LanguageButton from "../languages dropdown/LanguageButton"

const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false)
  const toggleSideMenu = () => setShowSideMenu(!showSideMenu)

  return (
    <nav className="bg-NavyN900 flex justify-between items-center w-full h-14 py-2 px-6 md:px-12">
      <div className="flex justify-between items-center gap-6">
        <div className="flex items-center">
          <img
            src="/assets/1001_LOGO.svg"
            alt="1001.tv logo"
            className="w-12 h-auto"
          />
          <button className="lg:hidden ml-4" onClick={toggleSideMenu}>
            <HiMenu className="text-white w-6 h-6" />
          </button>
        </div>

        <ul
        className={`lg:flex flex-col lg:flex-row lg:space-x-6 absolute lg:relative top-12 lg:top-0 left-0 w-full md:h-full h-screen overflow-hidden lg:w-auto bg-NavyN900 transition-transform duration-300 lg:translate-x-0 ${
          showSideMenu ? "translate-x-0" : "-translate-x-full"}`}
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
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <button>
          <IoSearch className="text-white w-5 h-5" />
        </button>
        <LanguageButton />
        <div className="bg-NavyN600 w-10 h-10 rounded-full flex items-center justify-center">
          <FaUser className="text-Green w-6 h-6" />
        </div>
      </div>
    </nav>
  )
}

export default Header
