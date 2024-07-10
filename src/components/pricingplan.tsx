import React from "react";

const Pricingplan = () => {
  const pricing = {
    pricinglist: [
      {
        price: "Rs 5,000",
        subscriptiontime: "/month",
        plantitle: "Lite Plan",
        shortdescription: "*Rates are subject to change",
        link: "/pricing",
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
  return (
    <>
      {pricing.pricinglist.map((item, index) => (
        <div
          key={index}
          className="relative pricingTable p-4 lg:p-8 xl:p-16 rounded-lg bg-white shadow-2xl"
        >
          <div className="space-y-4 text-right pb-8 border-b border-gray-200">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              {item.price}
              <sub className="text-base">{item.subscriptiontime}</sub>
            </h2>
            <p className="text-sm lg:text-base">{item.shortdescription}</p>
            <h3 className="text-2xl font-bold text-primary">
              {item.plantitle}
            </h3>
          </div>
          <button type="button" className="mt-4 mb-8 RSbutton w-full">
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
        </div>
      ))}
    </>
  );
};

export default Pricingplan;
