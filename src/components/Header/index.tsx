"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <h1
                  className={`text-m font-bold text-black dark:text-white ${
                    sticky ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Café <span className="font-bold">Severino</span>
                </h1>
              </Link>
            </div>
            <div className="flex w-full items-center justify-end space-x-4">
              <div></div>
              <button
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Kalumala+Heights+Bauan/@13.8010297,120.9684168,17z/data=!3m1!4b1!4m6!3m5!1s0x33bd09d6f4f5877d:0xc45dd81481aac7b!8m2!3d13.8010297!4d120.9684168!16s%2Fg%2F11n5pls7nx?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
                    "_blank",
                  )
                }
                className="flex items-center rounded-md bg-gray-dark px-4 py-2 text-white/80 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Find Location
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
