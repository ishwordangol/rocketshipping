import React from "react";
import Link from "next/link";
import Image from "next/image";
import DomesticShopping from "@/public/assets/images/services/domestic-shopping.jpg";
import B2b from "@/public/assets/images/services/b2b-shipping.jpg";
import LocalDelivery from "@/public/assets/images/services/local-delivery.jpg";

const Services = () => {
  const services = {
    serviceslist: [
      {
        image: DomesticShopping,
        title: "Domestic Shopping",
        description:
          "Rocket Shipping offers fast, reliable domestic delivery. From small parcels to large shipments, we ensure your packages arrive safely and on time, every time.",
        link: "/services",
      },
      {
        image: B2b,
        title: "B2B shipping",
        description:
          "Rocket Shipping specializes in quick and dependable B2B delivery. We ensure your business shipments, big or small, reach their destination safely and promptly.",
        link: "/services",
      },
      {
        image: LocalDelivery,
        title: "Hyperlocal delivery",
        description:
          "Offers hyperlocal delivery services, ensuring fast and reliable delivery within your neighborhood. Experience seamless convenience and speed with our efficient local couriers.",
        link: "/services",
      },
    ],
  };
  return (
    <>
      {services.serviceslist.map((item, index) => (
        <div key={index} className="service-block relative">
          <div className="servicelist relative text-center rounded-lg border-b-2 border-transparent transition-all ease-linear duration-300">
            <div className="image-box bg-white border-2 border-white rounded-lg transition-all ease-linear duration-300 pt-8 shadow-2xl">
              <figure className="overlay-anim relative inline-block overflow-hidden mx-4 mb-0">
                <Link href={item.link}>
                  <Image
                    src={item.image}
                    alt="services"
                    className="transition-all ease-linear duration-300"
                  />
                </Link>
              </figure>
            </div>
            <div className="service-contentbox mx-4 shadow-xl rounded-bl-lg rounded-br-lg">
              <div className="text-left relative p-8 bg-white overflow-hidden -mt-4 rounded-bl-lg rounded-br-lg">
                <Link href="#">
                  <h2 className="text-2xl font-bold hover:text-primary">
                    {item.title}
                  </h2>
                </Link>
                <p className="mt-3">{item.description}</p>
                <Link
                  href={item.link}
                  className="mt-8 flex items-center space-x-2 text-secondary hover:text-primary"
                >
                  <span>See Detail</span>
                  <span className="icon-arrow-up-right font-bold"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Services;
