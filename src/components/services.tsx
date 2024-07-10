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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief, Lorem Ipsum is not simply random text.",
        link: "/services",
      },
      {
        image: B2b,
        title: "B2B shipping",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief, Lorem Ipsum is not simply random text.",
        link: "/services",
      },
      {
        image: LocalDelivery,
        title: "Hyperlocal delivery",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief, Lorem Ipsum is not simply random text.",
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
