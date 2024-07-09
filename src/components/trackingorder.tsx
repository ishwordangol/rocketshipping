import React from "react";

const trackingorder = () => {
  return (
    <div className="max-w-[600px]">
      <h2 className="font-bold text-3xl leading-normal">Order Tracking</h2>
      <p>
        Provides specialized delivery services for packages, documents, and
        other items from one location to another.
      </p>
      <div className="mt-8 flex items-center gap-2">
        <input
          placeholder="Enter Tracking Number"
          type="text"
          className="w-full py-3 px-4  rounded-lg outline-none border border-gray-300 focus:border-secondary text-black transition ease-linear"
        />
        <button className="block w-[200px] RSbutton">
          <span>Track Now</span>
          <i className="icon-send text-white text-xl font-bold"></i>
        </button>
      </div>
    </div>
  );
};

export default trackingorder;
