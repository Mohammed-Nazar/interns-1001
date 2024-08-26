"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [
    {
      text: "الرئيسية",
      link: "/",
    },
    {
      text: "مسلسلات",
      link: "/series",
    },
    {
      text: "برامج",
      link: "/tv-shows",
    },
    {
      text: "رياضة",
      link: "/Sport",
    },
    {
      text: "قائمة المشاهدات",
      link: "/watching-list",
    },
  ];

  return (
    <>
      <MobileNav items={items} isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} isScrolled={isScrolled}  router={router} />
      <DesktopNav items={items} isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} isScrolled={isScrolled}  router={router} />
    </>
  );
};

export default Navbar;
