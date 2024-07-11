import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blog1 from "@/public/assets/images/blog/blog1.jpg";
import Blog2 from "@/public/assets/images/blog/blog2.jpg";
import Blog3 from "@/public/assets/images/blog/blog3.jpg";
import Blog4 from "@/public/assets/images/blog/blog4.jpg";

const blog = {
  blogcontent: [
    {
      title: "Fast-Tracking the Stars: The Promise of Rocket Shipping",
      imgsource: Blog1,
      link: "/blog",
      name: "Ishwor Dangol",
      date: "5 july, 2024",
    },
    {
      title: "Blasting Off: The Future of Rocket Shipping",
      imgsource: Blog2,
      link: "/blog",
      name: "Ishwor Dangol",
      date: "6 july, 2024",
    },
    {
      title: "Rocket Shipping 101: What You Need to Know",
      imgsource: Blog3,
      link: "/blog",
      name: "Ishwor Dangol",
      date: "7 july, 2024",
    },
    {
      title: "Rocket Shipping's Guide to Seamless Delivery Tracking",
      imgsource: Blog4,
      link: "/blog",
      name: "Devendra Jung",
      date: "9 july, 2024",
    },
  ],
};

const Blog: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const blogsettings = {
    arrows: false,
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 3,
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
      <Slider
        ref={sliderRef}
        {...blogsettings}
        className="mt-8 lg:mt-12 sliderWrapper blogSlider"
      >
        {blog.blogcontent.map((bloglist, index) => (
          <div key={index} className="relative bloglist">
            <div className="image-box">
              <figure className="overlay-anim overflow-hidden rounded-tl-lg rounded-tr-lg">
                <Link href="#" className="w-full h-full">
                  <Image
                    src={bloglist.imgsource}
                    alt="Blog Image"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover aspect-[4/3] rounded-tl-lg rounded-tr-lg transition-all ease-linear duration-300"
                  />
                </Link>
              </figure>
            </div>
            <div className="p-4 md:p-8 bg-gray-100 rounded-bl-lg rounded-br-lg">
              <div className="flex items-center space-x-2 md:space-x-4">
                <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                  <span className="icon-user"></span>
                  <span className="username">By {bloglist.name}</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                  <span className="icon-calendar"></span>
                  <span className="dateposted">{bloglist.date}</span>
                </div>
              </div>
              <Link href="#" className="inline-block">
                <h2 className="font-bold text-xl md:text-2xl my-4 hover:text-primary line-clamp-2">
                  {bloglist.title}
                </h2>
              </Link>
              <Link
                href={bloglist.link}
                className="flex items-center space-x-2 hover:text-secondary transition-colors ease-linear duration-100"
              >
                Read more <span className="icon-chevron-right"></span>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Blog;
