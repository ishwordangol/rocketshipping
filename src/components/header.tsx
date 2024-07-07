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
  useEffect(() => {
    // Set pinned state based on scroll position
    if (scrollPosition > pinStart) {
      setIsPinned(true);
    } else {
      setIsPinned(false);
    }
  }, [scrollPosition, pinStart]);
  return (
    <Headroom
      className="header z-50"
      onPin={handlePin}
      onUnpin={handleUnpin}
      upTolerance={5}
    >
      <header
        className={`${
          isPinned ? "bg-white border-b border-gray-200" : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div className="headerLeft">
              <Link href="#">
                <Image
                  src={isPinned ? LogoMain : LogoWhite}
                  width={200}
                  height={200}
                  alt="Logo"
                />
              </Link>
            </div>
            <nav className="headerRight">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link
                    href="#"
                    className={`font-semibold text-lg ${
                      isPinned ? "text-black" : "text-white"
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`font-semibold text-lg ${
                      isPinned ? "text-black" : "text-white"
                    }`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`font-semibold text-lg ${
                      isPinned ? "text-black" : "text-white"
                    }`}
                  >
                    Price
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`font-semibold text-lg ${
                      isPinned ? "text-black" : "text-white"
                    }`}
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`font-semibold text-lg ${
                      isPinned ? "text-black" : "text-white"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center space-x-4 headerRight">
              <Link
                href="tel:+977-9851053926"
                className={`flex items-center font-bold space-x-2 text-lg ${
                  isPinned ? "text-black" : "text-white"
                }`}
              >
                <span className="flex items-center justify-center icon-phone-call text-2xl"></span>
                <span className="flex items-center justify-center">
                  (+977) 9851053926
                </span>
              </Link>
              <Link href="#" className="RSbutton">
                Track Your Order
              </Link>
              <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                <span className="icon-search text-xl"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
