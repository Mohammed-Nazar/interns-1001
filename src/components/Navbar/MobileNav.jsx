"use client"
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const MobileNav = ({
  items,
  isScrolled,
  router,
  toggleDropdown,
  isDropdownOpen,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav
        dir="rtl"
        className={`grid grid-cols-3 w-full sticky z-50 bg-navy-900 px-4 py-2 top-0 left-0 right-0 place-items-center md:hidden ${
          isScrolled ? "bg-navy-900/80" : "bg-navy-900 "
        }`}
      >
        <div className="justify-self-start">
          <button onClick={toggleMenu}>
            <Image
              src="burger-menu.svg"
              width={30}
              height={20}
              alt="burger-menu"
            />
          </button>
        </div>
        <div>
          <Link href="/">
            <Image src="LogoGreen.svg" width={60} height={60} alt="Logo" />
          </Link>
        </div>
        <div className="justify-self-end">
          <Link href="/login">
          <span className="bg-primary px-4 py-2 rounded-xl text-navy-800 font-ar-500">
                الدخول
              </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-navy-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between px-4 py-2">
          <Link href="/">
            <Image src="LogoGreen.svg" width={60} height={60} alt="Logo" />
          </Link>
          <button onClick={toggleMenu}>
            <Image
              src="close-icon.svg"
              width={30}
              height={30}
              alt="close-menu"
            />
          </button>
        </div>
        <ul className="flex flex-col items-center text-white font-ar-500 text-lg gap-8 mt-10">
          {items.map((i) => (
            <li key={i.text}>
              <Link
                href={i.link}
                className={`${
                  router.pathname === i.link ? "text-primary" : ""
                }`}
                onClick={toggleMenu}
              >
                {i.text}
              </Link>
            </li>
          ))}
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
            <Link href="/login">
              <span className="bg-primary px-4 py-3 rounded-xl text-navy-800 font-ar-500">
                الدخول
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MobileNav
