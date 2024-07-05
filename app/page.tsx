"use client";
import React from "react";
import Link from "next/link";
import Header from "../src/components/header";
import Footer from "@/src/components/footer";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "@/public/assets/images/banners/banner.jpeg";
import About1 from "@/public/assets/images/about1.jpg";
import About2 from "@/public/assets/images/about2.jpg";
import Bhotahity from "@/public/assets/images/Clients/bhotahity.png";
import Byaparkhata from "@/public/assets/images/Clients/byapar-khata.png";
import Gadikoparts from "@/public/assets/images/Clients/gadiko-parts-logo.png";
import Huawei from "@/public/assets/images/Clients/huawei.png";
import Ncell from "@/public/assets/images/Clients/ncell.png";
import Ntc from "@/public/assets/images/Clients/ntc.png";
import DomesticShopping from "@/public/assets/images/services/domestic-shopping.jpg";
import B2b from "@/public/assets/images/services/b2b-shipping.jpg";
import LocalDelivery from "@/public/assets/images/services/local-delivery.jpg";
import ShippingPlaces from "@/public/assets/images/shipping-places.jpg";

const page = () => {
  const herosettings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const clientsettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const clientimageList = [
    Bhotahity,
    Byaparkhata,
    Gadikoparts,
    Huawei,
    Ncell,
    Ntc,
  ];

  const about = {
    title: "Know About Rocket Shipping",
    mainTitle: "Welcome to Innovative Fast and Reliable Shipping Solutions",
    description: `Evolving Technology thoroughly believe in accomplishing the projects under strict deadlines and with utmost diligence and ingenuity. As the company is determined to expand its services throughout the country, the company is committed to working in any part of the country.`,
    buttons: ["Learn more about us"],
    otherContent: [
      {
        icon: "icon-truck",
        count: "950",
        tag: "+",
        description: "Completed Delivery",
      },
      {
        icon: "icon-user-check",
        count: "200",
        tag: "+",
        description: "Satisfied Clients",
      },
      {
        icon: "icon-users",
        count: "100",
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
      <Slider {...herosettings} className="heroSlider">
        <div className="relative">
          <video
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            preload="none"
            className="w-full h-dvh object-cover"
          >
            <source
              src="./assets/images/rocket-shipping.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="w-full absolute top-1/2 -translate-y-1/2">
            <div className="container">
              <div className="px-16 max-w-5xl">
                <h1 className="text-7xl text-white font-bold leading-tight">
                  Fastest Shipping Products in Nepal
                </h1>
                <p className="mt-8 text-white leading-normal text-xl">
                  Experience the Fastest Shipping for Your Products in Nepal! At
                  Rocket Shipping, we guarantee swift and reliable deliveries,
                  ensuring your packages reach their destination on time, every
                  time. Trust us for unparalleled speed and exceptional service.
                </p>
                <div className="inline-block">
                  <Link href="#" className="mt-8 RSbutton">
                    <span className="text-lg">All services</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <section className="clientWrapper py-24 border-b border-gray-200">
        <div className="container">
          <div className="flex justify-center titleWrapper mb-16">
            <h2 className="font-bold text-3xl">
              Trusted by companies, big or not-so-big:
            </h2>
          </div>
          <Slider {...clientsettings} className="clientSlider">
            {clientimageList.map((imagePath, index) => (
              <>
                <div className="flex justify-center">
                  <div key={index} className="image-item">
                    <Image
                      src={imagePath}
                      alt={`Image ${index + 1}`}
                      width={260}
                      height={70}
                      className="grayscale"
                    />
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </section>
      <section className="aboutWrapper py-32">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            <Image
              src={About1}
              alt="About"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="col-span-2">
              <div className="px-8">
                <h3 className="text-base uppercase font-bold text-primary">
                  {about.title}
                </h3>
                <h2 className="my-4 font-bold text-5xl leading-tight text-black">
                  {about.mainTitle}
                </h2>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <Image
                  src={About2}
                  alt="About"
                  className="w-76 h-auto rounded-lg"
                />
                <div className="flex-1 py-4">
                  <div className="leading-normal">
                    <p className="mb-3">
                      Welcome to Rocket Shipping, a premier technology solutions
                      company for providing fast, reliable, and innovative
                      shipping solutions. Our cutting-edge technology and
                      commitment to exceptional service ensure that your
                      packages reach their destination swiftly and securely.
                      Trust us to deliver excellence with every shipment.
                    </p>
                    <p className="mb-3">
                      Founded on the principles of efficiency and customer
                      satisfaction, Rocket Shipping has built a reputation for
                      reliability and excellence. Our team of experts works
                      tirelessly to streamline logistics and enhance your
                      shipping experience. Whether you are a small business or a
                      large enterprise, we offer tailored solutions to meet your
                      unique needs and exceed your expectations. With Rocket
                      Shipping, you can count on a partner that is always ahead
                      of the curve in delivering your goods.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {about.features.map((item, index) => {
                      return (
                        <div key={index} className="flex items-center gap-4">
                          <span className="bg-secondary text-white w-8 h-8 flex items-center justify-center rounded-full">
                            <i className="icon-check"></i>
                          </span>
                          <h2 className="flex-1 text-lg font-bold">
                            {item.title}
                          </h2>
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
      </section>
      <section className="countWrapper py-24 bg-primary">
        <div className="container">
          <div className="flex justify-center">
            <div className="2xl:max-w-7xl flex items-center justify-between gap-32">
              <div>
                <h4 className="text-white">Fun facts about Rocket Shipping </h4>
                <h2 className="mt-4 text-white text-5xl font-bold">
                  Numbers speak
                </h2>
              </div>
              <div>
                <div className="flex items-center text-center gap-16">
                  {about.otherContent.map((item, index) => {
                    return (
                      <div key={index}>
                        <span
                          className={`inline-block text-4xl text-white ${item.icon}`}
                        ></span>
                        <h2 className="mt-3 text-white text-5xl font-bold">
                          {item.count} {item.tag}
                        </h2>
                        <p className="text-white mt-3 font-bold">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="servicesWrapper py-32">
        <div className="container">
          <div className="heading-title flex justify-center flex-col text-center">
            <h3 className="text-base uppercase font-bold text-primary">
              Our Services
            </h3>
            <h2 className="my-4 font-bold text-5xl leading-tight text-black">
              WHAT WE ARE OFFERING
            </h2>
          </div>
          <div className="mt-12 servicesWrapper grid grid-cols-3 gap-8">
            <div className="service-block relative mb-8">
              <div className="servicelist relative text-center rounded-lg border-b-2 border-transparent transition-all ease-linear duration-300">
                <div className="image-box bg-white border-2 border-white rounded-lg transition-all ease-linear duration-300 pt-8">
                  <figure className="overlay-anim relative inline-block overflow-hidden mx-4 mb-0">
                    <Link href="#">
                      <Image
                        src={DomesticShopping}
                        alt="services"
                        className="transition-all ease-linear duration-300 grayscale"
                      />
                    </Link>
                  </figure>
                </div>
                <div className="service-contentbox mx-4">
                  <div className="text-left relative p-8 bg-white overflow-hidden -mt-4 rounded-bl-lg rounded-br-lg">
                    <Link href="#">
                      <h2 className="text-2xl font-bold hover:text-primary">
                        Domestic shipping
                      </h2>
                    </Link>
                    <p className="mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Contrary to popular belief, Lorem
                      Ipsum is not simply random text.
                    </p>
                    <Link
                      href="#"
                      className="mt-8 flex items-center space-x-2 text-secondary hover:text-primary"
                    >
                      <span>See Detail</span>
                      <span className="icon-arrow-up-right font-bold"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-block relative mb-8">
              <div className="servicelist relative text-center rounded-lg border-b-2 border-transparent transition-all ease-linear duration-300">
                <div className="image-box bg-white border-2 border-white rounded-lg transition-all ease-linear duration-300 pt-8">
                  <figure className="overlay-anim relative inline-block overflow-hidden mx-4 mb-0">
                    <Link href="#">
                      <Image
                        src={B2b}
                        alt="services"
                        className="transition-all ease-linear duration-300 grayscale"
                      />
                    </Link>
                  </figure>
                </div>
                <div className="service-contentbox mx-4">
                  <div className="text-left relative p-8 bg-white overflow-hidden -mt-4 rounded-bl-lg rounded-br-lg">
                    <Link href="#">
                      <h2 className="text-2xl font-bold hover:text-primary">
                        B2B shipping
                      </h2>
                    </Link>
                    <p className="mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Contrary to popular belief, Lorem
                      Ipsum is not simply random text.
                    </p>
                    <Link
                      href="#"
                      className="mt-8 flex items-center space-x-2 text-secondary hover:text-primary"
                    >
                      <span>See Detail</span>
                      <span className="icon-arrow-up-right font-bold"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-block relative mb-8">
              <div className="servicelist relative text-center rounded-lg border-b-2 border-transparent transition-all ease-linear duration-300">
                <div className="image-box bg-white border-2 border-white rounded-lg transition-all ease-linear duration-300 pt-8">
                  <figure className="overlay-anim relative inline-block overflow-hidden mx-4 mb-0">
                    <Link href="#">
                      <Image
                        src={LocalDelivery}
                        alt="services"
                        className="transition-all ease-linear duration-300 grayscale"
                      />
                    </Link>
                  </figure>
                </div>
                <div className="service-contentbox mx-4">
                  <div className="text-left relative p-8 bg-white overflow-hidden -mt-4 rounded-bl-lg rounded-br-lg">
                    <Link href="#">
                      <h2 className="text-2xl font-bold hover:text-primary">
                        Hyperlocal delivery
                      </h2>
                    </Link>
                    <p className="mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Contrary to popular belief, Lorem
                      Ipsum is not simply random text.
                    </p>
                    <Link
                      href="#"
                      className="mt-8 flex items-center space-x-2 text-secondary hover:text-primary"
                    >
                      <span>See Detail</span>
                      <span className="icon-arrow-up-right font-bold"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-we-workWrapper py-32 bg-gray-50">
        <div className="container">
          <div className="heading-title flex justify-center flex-col text-center">
            <h3 className="text-base uppercase font-bold text-primary">
              How It Works
            </h3>
            <h2 className="my-4 font-bold text-5xl leading-tight text-black">
              How We Deliver Your Parcel
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="relative">
              <div className="relative z-20 grid grid-cols-1 gap-8">
                <div className="p-8 rounded-lg bg-white flex gap-4">
                  <div className="flex items-center justify-center w-20 h-20 border-2 border-primary rounded-full">
                    <span className="icon-register text-3xl text-primary font-semibold"></span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <h2 className="font-bold text-3xl text-primary">01</h2>
                    <h3 className="font-bold text-2xl">Parcel Register</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
                <div className="p-8 rounded-lg bg-white flex gap-4">
                  <div className="flex items-center justify-center w-20 h-20 border-2 border-primary rounded-full">
                    <span className="icon-parcel-loading text-3xl text-primary font-semibold"></span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <h2 className="font-bold text-3xl text-primary">02</h2>
                    <h3 className="font-bold text-2xl">Parcel Loading</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
                <div className="p-8 rounded-lg bg-white flex gap-4">
                  <div className="flex items-center justify-center w-20 h-20 border-2 border-primary rounded-full">
                    <span className="icon-parcel-in-transit text-3xl text-primary font-semibold"></span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <h2 className="font-bold text-3xl text-primary">03</h2>
                    <h3 className="font-bold text-2xl">Parcel In-Transit</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
                <div className="p-8 rounded-lg bg-white flex gap-4">
                  <div className="flex items-center justify-center w-20 h-20 border-2 border-primary rounded-full">
                    <span className="icon-parcel-delivery text-3xl text-primary font-semibold"></span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <h2 className="font-bold text-3xl text-primary">04</h2>
                    <h3 className="font-bold text-2xl">Parcel Delivery</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="z-10 absolute left-1/2 -translate-1/2 w-0 border-2 border-dashed h-full border-secondary top-0 bottom-0"></div>
            </div>
            <div className="flex justify-center items-center rounded-lg p-8 bg-white col-span-2">
              <Image
                src={ShippingPlaces}
                alt="Shipping Places"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
