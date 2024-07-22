import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import CoupenImage from "@/public/assets/images/star-discount.png";

const Pricingplan: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const [isSlick, setIsSlick] = useState(false);

  const pricesettings = {
    arrows: false,
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipe: true,
    touchThreshold: 10, // Adjust this value for smoother touch response
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: false,
          centerMode: true,
          centerPadding: "48px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          dots: false,
          centerMode: true,
          centerPadding: "28px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const pricing = {
    pricinglist: [
      {
        price: "Rs 5,000",
        subscriptiontime: "/month",
        plantitle: "Lite Plan",
        shortdescription: "*Rates are subject to change",
        link: "/pricing",
        coupen: "",
        iconclass: "icon-check",
        features: [
          {
            featurelist: "24/7 Free Support",
          },
          {
            featurelist: "24/7 Free Support",
          },
          {
            featurelist: "24/7 Free Support",
          },
          {
            featurelist: "24/7 Free Support",
          },
          {
            featurelist: "24/7 Free Support",
          },
          {
            featurelist: "24/7 Free Support",
          },
        ],
      },
      {
        price: "Rs 10,000",
        subscriptiontime: "/month",
        plantitle: " Professional Plan",
        shortdescription: "*Rates are subject to change",
        link: "/pricing",
        coupen: "20% off",
        iconclass: "icon-check",
        features: [
          {
            featurelist: "24/7 Free Support",
          },
          {
            featurelist: "24/7 Free Support",
          },
          {
            featurelist: "24/7 Free Support",
          },
          {
            featurelist: "24/7 Free Support",
          },
          {
            featurelist: "24/7 Free Support",
          },
          {
            featurelist: "24/7 Free Support",
          },
        ],
      },
      {
        price: "Rs 20,000",
        subscriptiontime: "/month",
        plantitle: "Enterprise Plan",
        shortdescription: "*Rates are subject to change",
        link: "/pricing",
        coupen: "50% off",
        iconclass: "icon-check",
        features: [
          {
            featurelist: "24/7 Free Support",
          },
          {
            featurelist: "24/7 Free Support",
          },
          {
            featurelist: "24/7 Free Support",
          },
          {
            featurelist: "24/7 Free Support",
          },
          {
            featurelist: "24/7 Free Support",
          },
          {
            featurelist: "24/7 Free Support",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSlick(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isSlick ? (
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
          <Slider
            ref={sliderRef}
            {...pricesettings}
            className="mt-8 lg:mt-12 sliderWrapper pricingSlider"
          >
            {pricing.pricinglist.map((item, index) => (
              <div
                key={index}
                className="relative pricingTable p-8 rounded-lg bg-white border"
              >
                <div className="space-y-4 text-right pb-8 border-b border-gray-200">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                    {item.price}
                    <sub className="text-sm lg:text-base">
                      {item.subscriptiontime}
                    </sub>
                  </h2>
                  <p className="text-sm lg:text-base">
                    {item.shortdescription}
                  </p>
                  <h3 className="text-2xl font-bold text-primary">
                    {item.plantitle}
                  </h3>
                </div>
                <button
                  type="button"
                  className="mt-4 mb-8 RSbutton RSbutton-primary w-full"
                >
                  Choose Plan
                </button>
                <div className="space-y-4">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-4">
                      <span
                        className={`text-secondary text-lg font-bold ${item.iconclass}`}
                      ></span>
                      <span>{feature.featurelist}</span>
                    </div>
                  ))}
                </div>
                {item.coupen && (
                  <div
                    className={`absolute left-4 top-4 ${
                      item.coupen ? "" : "hidden"
                    }`}
                  >
                    <div className="relative">
                      <Image
                        src={CoupenImage}
                        alt="services"
                        className="w-16 h-16 xl:w-24 xl:h-24 2xl:h-32 2xl:w-32 transition-all ease-linear duration-300"
                      />
                      <label className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-center font-bold pt-2.5 xl:pt-4 text-xs xl:text-base 2xl:text-xl leading-tight">
                        {item.coupen}
                      </label>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="mt-8 lg:mt-12 grid md:grid-cols-3 gap-4 lg:gap-8">
          {pricing.pricinglist.map((item, index) => (
            <div
              key={index}
              className="relative pricingTable p-4 lg:p-8 xl:p-16 rounded-lg bg-white shadow-2xl"
            >
              <div className="space-y-4 text-right pb-8 border-b border-gray-200">
                <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold">
                  {item.price}
                  <sub className="text-base">{item.subscriptiontime}</sub>
                </h2>
                <p className="text-sm lg:text-base">{item.shortdescription}</p>
                <h3 className="text-2xl font-bold text-primary">
                  {item.plantitle}
                </h3>
              </div>
              <button
                type="button"
                className="mt-4 mb-8 RSbutton RSbutton-primary w-full"
              >
                Choose Plan
              </button>
              <div className="space-y-4">
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-4">
                    <span
                      className={`text-secondary text-lg font-bold ${item.iconclass}`}
                    ></span>
                    <span>{feature.featurelist}</span>
                  </div>
                ))}
              </div>
              {item.coupen && (
                <div
                  className={`absolute left-1 top-1 xl:left-2 xl:top-2 ${
                    item.coupen ? "" : "hidden"
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={CoupenImage}
                      alt="services"
                      className="w-16 h-16 xl:w-24 xl:h-24 2xl:h-32 2xl:w-32 transition-all ease-linear duration-300"
                    />
                    <label className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-center font-bold pt-2.5 xl:pt-4 text-xs xl:text-base 2xl:text-xl leading-tight">
                      {item.coupen}
                    </label>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Pricingplan;
