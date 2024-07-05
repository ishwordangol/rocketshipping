import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoWhite from "@/public/assets/images/rocketshipping-logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-footer">
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-7 gap-16">
            <div className="col-span-2">
              <Link href="#">
                <Image src={LogoWhite} width={200} height={200} alt="Logo" />
              </Link>
              <p className="text-gray-400 mt-1">
                A premier technology solutions company for providing fast,
                reliable, and innovative shipping solutions.Trust us to deliver
                excellence with every shipment.
              </p>
              <div className="mt-4 flex items-center gap-4 xl:gap-6">
                <Link href="https://www.facebook.com/" target="_blank">
                  <div className="transition-all ease-linear hover:text-primary text-gray-400">
                    <span className="text-xl xl:text-2xl  icon-facebook"></span>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                  <div className="transition-all ease-linear hover:text-primary text-gray-400">
                    <span className="text-xl xl:text-2xl icon-instagram"></span>
                  </div>
                </Link>

                <Link href="https://www.linkedin.com/" target="_blank">
                  <div className="transition-all ease-linear hover:text-primary text-gray-400">
                    <span className="text-xl xl:text-2xl icon-linkedin"></span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-2">
              <div>
                <h3 className="mt-4 font-bold text-2xl text-white">
                  Quick Links
                </h3>
                <ul className="mt-8 flex flex-col space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-primary transition ease-linear duration-200 delay-50 hover:pl-2"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-primary transition ease-linear duration-200 delay-50 hover:pl-2"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-primary transition ease-linear duration-200 delay-50 hover:pl-2"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-primary transition ease-linear duration-200 delay-50 hover:pl-2"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-primary transition ease-linear duration-200 delay-50 hover:pl-2"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mt-4 font-bold text-2xl text-white">
                  Contact Us
                </h3>
                <div className="mt-8 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">
                      Address Location
                    </h4>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 bg-secondary rounded-lg">
                        <span className="icon-map-pin text-white text-base"></span>
                      </div>
                      <p className="text-gray-400">Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">
                      Phone Number
                    </h4>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 bg-secondary rounded-lg">
                        <span className="icon-phone text-white text-base"></span>
                      </div>
                      <Link
                        href="tel:+977-9851053926"
                        className="text-gray-400 hover:text-primary transition ease-linear duration-200 delay-50"
                      >
                        (+977) 9851053926
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">
                      Email Address
                    </h4>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 bg-secondary rounded-lg">
                        <span className="icon-mail text-white text-base"></span>
                      </div>
                      <Link
                        href="mailto:info@rocketshipping.com"
                        className="text-gray-400 hover:text-primary transition ease-linear duration-200 delay-50"
                      >
                        info@rocketshipping.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <h3 className="mt-4 font-bold text-2xl text-white">Newsletter</h3>
              <div className="mt-8">
                <p className="text-gray-400">
                  Dont’t miss any updates of our new templates and extensions
                  and al the astonishing we bring for you.
                </p>
                <div className="mt-8">
                  <input
                    placeholder="Email Address"
                    type="email"
                    className="w-full py-4 px-8 bg-gray-800 rounded-lg outline-none border border-gray-800 focus:border-l-[6px] focus:border-secondary text-gray-400 transition ease-linear"
                  />
                  <button className="block mt-2 w-full RSbutton">
                    <span>Subscribe</span>
                    <i className="icon-send text-white text-xl font-bold"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 border-t border-gray-800">
        <div className="container">
          <div className="flex flex-wrap gap-1 justify-between text-gray-400 text-sm lg:text-base">
            <p>All rights reserved ©️ Rocket Shipping</p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition ease-linear duration-200 delay-50"
              >
                Terms & Condition
              </Link>
              <span>|</span>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition ease-linear duration-200 delay-50"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
