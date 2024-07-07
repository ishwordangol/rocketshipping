import React from "react";
import TestimonialSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import TestimonialUser from "@/public/assets/images/testimonials/user-testimonial.jpg";

const testimonialsettings = {
  dots: true,
  arrows: false,
  infinite: false,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
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

const Testimonial = () => {
  return (
    <section className="testimonialWrapper py-32 bg-gray-50">
      <div className="container">
        <div className="heading-title flex justify-center flex-col text-center">
          <h3 className="text-base uppercase font-bold text-primary">
            User Review
          </h3>
          <h2 className="my-4 font-bold text-5xl leading-tight text-black">
            What Users say about Rocket Shipping
          </h2>
        </div>
        <TestimonialSlider
          {...testimonialsettings}
          className="mt-12 testimonialSlider"
        >
          <div className="p-9 bg-gray-100 rounded-lg">
            <div className="relative h-9">
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="mt-5 flex gap-4">
              <Image
                src={TestimonialUser}
                alt="User Name"
                width={100}
                height={100}
                className="w-14 h-14 rounded-full"
              />
              <div className="flex-1">
                <h4 className="text-lg font-bold">Ishwor Dangol</h4>
                <span className="block text-sm">05/07/2024</span>
              </div>
            </div>
          </div>
          <div className="p-9 bg-gray-100 rounded-lg">
            <div className="relative h-9">
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="mt-5 flex gap-4">
              <Image
                src={TestimonialUser}
                alt="User Name"
                width={100}
                height={100}
                className="w-14 h-14 rounded-full"
              />
              <div className="flex-1">
                <h4 className="text-lg font-bold">Ishwor Dangol</h4>
                <span className="block text-sm">05/07/2024</span>
              </div>
            </div>
          </div>
          <div className="p-9 bg-gray-100 rounded-lg">
            <div className="relative h-9">
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="mt-5 flex gap-4">
              <Image
                src={TestimonialUser}
                alt="User Name"
                width={100}
                height={100}
                className="w-14 h-14 rounded-full"
              />
              <div className="flex-1">
                <h4 className="text-lg font-bold">Ishwor Dangol</h4>
                <span className="block text-sm">05/07/2024</span>
              </div>
            </div>
          </div>
          <div className="p-9 bg-gray-100 rounded-lg">
            <div className="relative h-9">
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="mt-5 flex gap-4">
              <Image
                src={TestimonialUser}
                alt="User Name"
                width={100}
                height={100}
                className="w-14 h-14 rounded-full"
              />
              <div className="flex-1">
                <h4 className="text-lg font-bold">Ishwor Dangol</h4>
                <span className="block text-sm">05/07/2024</span>
              </div>
            </div>
          </div>
        </TestimonialSlider>
      </div>
    </section>
  );
};

export default Testimonial;
