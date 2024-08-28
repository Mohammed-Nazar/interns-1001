import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaUser } from "react-icons/fa"

const DesktopNav = ({
  items,
  isScrolled,
  router,
  toggleDropdown,
  isDropdownOpen,
  user,
}) => {
  return (
    <nav
      dir="rtl"
      className={`hidden md:flex px-12 py-5 sticky z-50 top-0 transition-colors duration-300 flex-row justify-between items-center ${
        isScrolled ? "bg-navy-900/80" : "bg-navy-900"
      }`}
    >
      <div>
        <div className="flex gap-14 items-center">
          <Link href="/">
            <Image src="/LogoGreen.svg" width={80} height={80} alt="Logo" />
          </Link>
          <ul className="text-white font-ar-500 text-2xl flex gap-12">
            {items.map((i) => (
              <li key={i.text}>
                <Link
                  href={i.link}
                  className={`${
                    router.pathname === i.link ? "text-primary" : ""
                  }`}
                >
                  {i.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex gap-5 text-white items-center">
          <li className="cursor-pointer">
            <Image
              src="/search-icon.png"
              width={20}
              height={20}
              alt="search-icon"
            />
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white flex items-center"
            >
              العربية
              <Image
                src="/down_arrow.png"
                width={10}
                height={10}
                className={`mx-2 transition-transform duration-300 ease-in-out transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                alt="down arrow"
              />
            </button>
            <ul
              className={`absolute top-full right-0 mt-2 bg-navy-900 text-white shadow-lg rounded-lg w-40 transition-all duration-300 ease-in-out transform ${
                isDropdownOpen
                  ? "opacity-100 translate-y-4"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            >
              <li className="px-4 py-2  cursor-pointer">
                <a href="/ar">العربية</a>
              </li>
              <li className="px-4 py-2  cursor-pointer">
                <a href="/en">English</a>
              </li>
            </ul>
          </li>
          <li>
            {user ? (
              <div className="text-primary p-2 rounded-full bg-navy-600 text-2xl">
                <FaUser />
              </div>
            ) : (
              <Link href="/login">
                <span className="bg-primary px-4 py-3 rounded-xl text-navy-800 font-ar-500">
                  الدخول
                </span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default DesktopNav
