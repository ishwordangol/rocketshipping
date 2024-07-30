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
            <h2 className="text-center text-3xl font-bold mb-4">
              Forget Password
            </h2>
            <div className="flex items-center justify-center gap-2">
              <p>Remember Your Password?</p>
              <a href="/login" className="text-blue-500 hover:text-primary">
                Sign In
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4">
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
              <div>
                <button className="RSbutton RSbutton-primary w-full">
                  Reset My Password
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
