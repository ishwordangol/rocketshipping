import React, { useState, useEffect } from "react";
import Headroom from "react-headroom";
import Image from "next/image";
import Link from "next/link";
import "@/public/assets/css/icomoon.css";
import "@/app/globals.css";
import LogoMain from "@/public/assets/images/logo.svg";
import LogoWhite from "@/public/assets/images/rocketshipping-logo-white.svg";
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
};
const Header = () => {
  const [isPinned, setIsPinned] = useState(false);
  const scrollPosition = useScrollPosition();
  const pinStart = 120; // Scroll position at which the header should be pinned

  const handlePin = () => {
    setIsPinned(true);
  };

  const handleUnpin = () => {
    setIsPinned(false);
  };

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "/about-us",
      menuname: "About Us",
    },
    {
      id: 2,
      link: "/services",
      menuname: "Services",
    },
    {
      id: 3,
      link: "/pricing",
      menuname: "Pricing",
    },
    {
      id: 4,
      link: "/blogs",
      menuname: "Blogs",
    },
    {
      id: 5,
      link: "/contact",
      menuname: "Contact",
    },
  ];
  useEffect(() => {
    // Set pinned state based on scroll position
    if (scrollPosition > pinStart) {
      setIsPinned(true);
    } else {
      setIsPinned(false);
    }
  }, [scrollPosition, pinStart]);
  return (
    <>
      <Headroom
        className="header z-50"
        onPin={handlePin}
        onUnpin={handleUnpin}
        upTolerance={5}
      >
        <header
          className={`py-2 sm:py-4 ${
            isPinned ? "bg-white border-b border-gray-200" : "bg-transparent"
          }`}
        >
          <div className="container">
            <div className="flex flex-wrap justify-between items-center">
              <div className="headerLeft">
                <Link href="#">
                  <Image
                    src={isPinned ? LogoMain : LogoWhite}
                    alt="Logo"
                    className="h-20 md:h-auto"
                  />
                </Link>
              </div>
              <nav className="navbar hidden lg:flex">
                <ul className="flex items-center space-x-8">
                  {links.map(({ id, link, menuname }) => (
                    <li key={id} className="">
                      <Link
                        href={link}
                        className={`font-semibold text-lg hover:text-primary transition-all ease-in-out duration-300 ${
                          isPinned ? "text-black" : "text-white"
                        }`}
                      >
                        {menuname}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex items-center space-x-4 sm:space-x-2 md:space-x-4 headerRight">
                <Link href="#" className="z-10 RSbutton">
                  Track Your Order
                </Link>
                <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-black">
                  <span className="icon-search text-xl"></span>
                </button>
                <div
                  onClick={() => setNav(!nav)}
                  className="relative cursor-pointer pr-4 lg:hidden"
                >
                  {nav ? (
                    <span
                      className={`icon-x text-2xl ${
                        isPinned ? "text-black" : "text-white"
                      }`}
                    ></span>
                  ) : (
                    <span
                      className={`icon-menu text-2xl ${
                        isPinned ? "text-black" : "text-white"
                      }`}
                    ></span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
      </Headroom>
      {nav && (
        <div>
          <ul className="flex flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0 overflow-hidden w-full h-dvh bg-gradient-to-b from-black to-gray-800 text-gray-500 z-[999]">
            {links.map(({ id, link, menuname }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {menuname}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setNav(!nav)}
            className="fixed top-8 right-8 z-[999]"
          >
            <span className="icon-x text-3xl text-white"></span>
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
