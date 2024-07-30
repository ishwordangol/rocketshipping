import React from "react";

const trackingorder = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center gap-2">
      <input
        placeholder="Enter Tracking Number"
        type="text"
        className="w-full py-3 px-4  rounded-lg outline-none border border-gray-300 focus:border-secondary text-black transition ease-linear"
      />
      <button className="block w-[200px] RSbutton RSbutton-primary">
        <span>Track Now</span>
        <i className="icon-map-pin text-white text-xl"></i>
      </button>
    </div>
  );
};

export default trackingorder;
