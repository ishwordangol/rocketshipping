"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import About1 from "@/public/assets/images/about1.jpg";
import About2 from "@/public/assets/images/about2.jpg";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

const About = () => {
  const about = {
    title: "Know About Rocket Shipping",
    mainTitle: "Welcome to Innovative Fast and Reliable Shipping Solutions",
    description: `Evolving Technology thoroughly believe in accomplishing the projects under strict deadlines and with utmost diligence and ingenuity. As the company is determined to expand its services throughout the country, the company is committed to working in any part of the country.`,
    buttons: ["Learn more about us"],
    otherContent: [
      {
        icon: "icon-truck",
        count: 950,
        tag: "+",
        description: "Completed Delivery",
      },
      {
        icon: "icon-user-check",
        count: 200,
        tag: "+",
        description: "Satisfied Clients",
      },
      {
        icon: "icon-users",
        count: 100,
        tag: "+",
        description: "Qualified Members",
      },
    ],
    features: [
      {
        title: "We provide 24/7 service",
      },
      {
        title: "Innovative Technology",
      },
      {
        title: "Qualified Staffs",
      },
      {
        title: "Cost effective",
      },
    ],
  };
  return (
    <>
      <Header />
      <section className="aboutWrapper py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <Image
              src={About1}
              alt="About"
              className="w-full h-full object-cover lg:hidden xl:block"
            />
            <div className="col-span-1 lg:col-span-2">
              <div className="px-0 xl:px-8">
                <h3 className="text-base uppercase font-bold text-primary">
                  {about.title}
                </h3>
                <h2 className="my-4 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-black">
                  {about.mainTitle}
                </h2>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <Image
                  src={About2}
                  alt="About"
                  className="hidden sm:block w-64 2xl:w-76 h-full object-cover"
                />
                <div className="w-full sm:w-auto flex-1 lg:py-0 2xl:py-4 flex flex-col">
                  <div className="leading-normal">
                    <p className="mb-3">
                      Welcome to Rocket Shipping, a premier technology solutions
                      company for providing fast, reliable, and innovative
                      shipping solutions. Our cutting-edge technology and
                      commitment to exceptional service ensure that your
                      packages reach their destination swiftly and securely.
                      Trust us to deliver excellence with every shipment.
                    </p>
                    <p className="mb-3 block sm:hidden lg:block">
                      Founded on the principles of efficiency and customer
                      satisfaction, Rocket Shipping has built a reputation for
                      reliability and excellence. Our team of experts works
                      tirelessly to streamline logistics and enhance your
                      shipping experience. Whether you are a small business or a
                      large enterprise, we offer tailored solutions to meet your
                      unique needs and exceed your expectations.
                    </p>
                  </div>
                  <div className="mt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {about.features.map((item, index) => {
                        return (
                          <div key={index} className="flex items-center gap-4">
                            <span className="bg-secondary text-white w-6 h-6 flex items-center justify-center rounded-full">
                              <i className="icon-check"></i>
                            </span>
                            <h2 className="flex-1 font-bold">{item.title}</h2>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-4 inline-block">
                      <Link href="#" className="mt-8 RSbutton">
                        <span>More About Us</span>
                        <i className="icon-chevron-right text-white text-xl font-bold"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
