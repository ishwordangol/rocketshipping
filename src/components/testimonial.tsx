import React, { useRef } from "react";
import TestimonialSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import TestimonialUser from "@/public/assets/images/testimonials/user-testimonial.jpg";

const Testimonial: React.FC = () => {
  const sliderRef = useRef<TestimonialSlider>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const testimonialsettings = {
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    touchThreshold: 10, // Adjust this value for smoother touch response
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
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
  return (
    <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <TestimonialSlider
        ref={sliderRef}
        {...testimonialsettings}
        className="mt-8 lg:mt-12 sliderWrapper testimonialSlider"
      >
        <div className="slidebox p-9 bg-gray-100 rounded-lg">
          <div className="testimonial-top relative h-9">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl icon-quote-left text-secondary"></span>
            <div className="relative userrating flex justify-center h-full">
              <div className="starWrapper flex items-center gap-1">
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-empty"></span>
              </div>
            </div>
          </div>
          <p className="py-5 border-b border-gray-200">
            Rocket Shipping has transformed my delivery experience. The app is
            easy to use, and their local couriers are incredibly fast and
            reliable. It’s my top choice for quick, dependable deliveries!
          </p>
          <div className="testimonial-bottom mt-5 flex gap-4">
            <Image
              src={TestimonialUser}
              alt="User Name"
              width={100}
              height={100}
              className="w-14 h-14 rounded-full"
            />
            <div className="userinfo flex-1">
              <h4 className="text-lg font-bold">Devendra Jung</h4>
              <span className="block text-sm">07/07/2024</span>
            </div>
          </div>
        </div>
        <div className="slidebox p-9 bg-gray-100 rounded-lg">
          <div className="testimonial-top relative h-9">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl icon-quote-left text-secondary"></span>
            <div className="relative userrating flex justify-center h-full">
              <div className="starWrapper flex items-center gap-1">
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-filled"></span>
              </div>
            </div>
          </div>
          <p className="py-5 border-b border-gray-200">
            The Rocket Shipping app is fantastic for local deliveries. It’s
            user-friendly, and the service is consistently prompt and efficient.
            I rely on it daily for its speed and convenience!
          </p>
          <div className="testimonial-bottom mt-5 flex gap-4">
            <Image
              src={TestimonialUser}
              alt="User Name"
              width={100}
              height={100}
              className="w-14 h-14 rounded-full"
            />
            <div className="userinfo flex-1">
              <h4 className="text-lg font-bold">Ishwor Dangol</h4>
              <span className="block text-sm">05/09/2024</span>
            </div>
          </div>
        </div>
        <div className="slidebox p-9 bg-gray-100 rounded-lg">
          <div className="testimonial-top relative h-9">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl icon-quote-left text-secondary"></span>
            <div className="relative userrating flex justify-center h-full">
              <div className="starWrapper flex items-center gap-1">
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-filled"></span>
              </div>
            </div>
          </div>
          <p className="py-5 border-b border-gray-200">
            Rocket Shipping delivers exceptional local service with an intuitive
            app and swift deliveries. The speed and reliability are outstanding.
            It’s perfect for anyone needing fast, reliable neighborhood
            deliveries!
          </p>
          <div className="testimonial-bottom mt-5 flex gap-4">
            <Image
              src={TestimonialUser}
              alt="User Name"
              width={100}
              height={100}
              className="w-14 h-14 rounded-full"
            />
            <div className="userinfo flex-1">
              <h4 className="text-lg font-bold"> Ram Shrestha</h4>
              <span className="block text-sm">05/012/2024</span>
            </div>
          </div>
        </div>
        <div className="slidebox p-9 bg-gray-100 rounded-lg">
          <div className="testimonial-top relative h-9">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl icon-quote-left text-secondary"></span>
            <div className="relative userrating flex justify-center h-full">
              <div className="starWrapper flex items-center gap-1">
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-filled"></span>
                <span className="icon-star1 star-empty"></span>
              </div>
            </div>
          </div>
          <p className="py-5 border-b border-gray-200">
            I’m impressed with Rocket Shipping’s service! The app is simple to
            navigate, and deliveries are always timely. It’s ideal for anyone
            who needs efficient and fast local delivery solutions.
          </p>
          <div className="testimonial-bottom mt-5 flex gap-4">
            <Image
              src={TestimonialUser}
              alt="User Name"
              width={100}
              height={100}
              className="w-14 h-14 rounded-full"
            />
            <div className="userinfo flex-1">
              <h4 className="text-lg font-bold">Nishal Bhattrai</h4>
              <span className="block text-sm">05/07/2024</span>
            </div>
          </div>
        </div>
      </TestimonialSlider>
    </div>
  );
};

export default Testimonial;
