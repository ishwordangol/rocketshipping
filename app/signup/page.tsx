"use client";
import React, { useState } from "react";
import "@/public/assets/css/icomoon.css";
import Image from "next/image";
import Link from "next/link";
import LogoMain from "@/public/assets/images/logo.svg";
import Checkbox from "@/src/components/checkbox";

const Page: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log("Google sign-in clicked");
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign-in logic here
    console.log("Facebook sign-in clicked");
  };
  return (
    <div className="bg-primarylight h-screen loginformWrapper relative">
      <div className="container">
        <form className="flex flex-col justify-center items-center h-screen">
          <Link href="/" className="flex justify-center mb-8">
            <Image src={LogoMain} alt="Logo" className="h-20 md:h-auto" />
          </Link>
          <div className="bg-white p-8 w-11/12 md:w-full max-w-full md:max-w-lg mx-auto rounded-lg">
            <div className="grid grid-cols-1 gap-4">
              <div className="form-group flex flex-col gap-1">
                <label className="text-black font-bold">Full Name</label>
                <div className="inputForm flex items-center gap-2 border border-gray-200 h-12 rounded px-3 transition-all ease-linear duration-300 focus-within:border-secondary">
                  <span className="icon-user text-xl"></span>
                  <input
                    type="text"
                    className="inputbox outline-none flex-1 h-full rounded-lg"
                    placeholder="Enter Full Name"
                  />
                </div>
              </div>
              <div className="form-group flex flex-col gap-1">
                <label className="text-black font-bold">Phone Number</label>
                <div className="inputForm flex items-center gap-2 border border-gray-200 h-12 rounded px-3 transition-all ease-linear duration-300 focus-within:border-secondary">
                  <span className="icon-phone text-xl"></span>
                  <input
                    type="number"
                    className="inputbox outline-none flex-1 h-full rounded-lg"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
              <div className="form-group flex flex-col gap-1">
                <label className="text-black font-bold">Email</label>
                <div className="inputForm flex items-center gap-2 border border-gray-200 h-12 rounded px-3 transition-all ease-linear duration-300 focus-within:border-secondary">
                  <span className="icon-at-sign text-xl"></span>
                  <input
                    type="text"
                    className="inputbox outline-none flex-1 h-full rounded-lg"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <div className="form-group flex flex-col gap-1">
                <label htmlFor="password" className="text-black font-bold">
                  Password
                </label>
                <div className="inputForm flex items-center gap-2 border border-gray-200 h-12 rounded-lg px-3 transition-all ease-linear duration-300 focus-within:border-secondary">
                  <span className="icon-lock text-xl"></span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="inputbox outline-none flex-1 h-full rounded"
                    placeholder="Enter Password"
                    aria-label="Password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="focus:outline-none"
                  >
                    {showPassword ? (
                      <span className="icon-eye-off text-xl"></span>
                    ) : (
                      <span className="icon-eye text-xl"></span>
                    )}
                  </button>
                </div>
              </div>
              <div className="form-group flex flex-col gap-1">
                <label htmlFor="password" className="text-black font-bold">
                  Confirm Password
                </label>
                <div className="inputForm flex items-center gap-2 border border-gray-200 h-12 rounded-lg px-3 transition-all ease-linear duration-300 focus-within:border-secondary">
                  <span className="icon-lock text-xl"></span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmpassword"
                    className="inputbox outline-none flex-1 h-full rounded"
                    placeholder="Enter Confirm Password"
                    aria-label="Confirm Password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="focus:outline-none"
                  >
                    {showPassword ? (
                      <span className="icon-eye-off text-xl"></span>
                    ) : (
                      <span className="icon-eye text-xl"></span>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <div className="checkbox-group">
                  <Checkbox
                    label=""
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <p>
                  By clicking Sign up for Free, you agree to Rocket Shipping
                  Terms Of Service and Privacy Policy.
                </p>
              </div>
              <div className="mt-8">
                <button className="RSbutton RSbutton-primary w-full">
                  Sign Up
                </button>
              </div>
              <div className="flex flex-col justify-center text-center gap-4">
                <div className="flex items-center justify-center gap-2">
                  <p>Already have an account?</p>
                  <a href="/login" className="text-blue-500 hover:text-primary">
                    Sign In
                  </a>
                </div>
                <p>Or With</p>
              </div>
              <div className="flex gap-4 items-center">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg hover:border-secondary"
                >
                  <span className="icon-google mr-2" />
                  Google
                </button>
                <button
                  onClick={handleFacebookSignIn}
                  className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg hover:border-secondary"
                >
                  <span className="icon-facebook1 mr-2" />
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;