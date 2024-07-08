import React from "react";
import Image from "next/image";
import Blog1 from "@/public/assets/images/blog/blog1.jpg";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      imgsource: Blog1,
      link: "/blog",
      name: "Ishwor Dangol",
      date: "6 july, 2024",
    },
    {
      title: "Rocket Shipping 101: What You Need to Know",
      imgsource: Blog1,
      link: "/blog",
      name: "Ishwor Dangol",
      date: "7 july, 2024",
    },
  ],
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
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Blog = () => {
  return (
    <Slider
      {...blogsettings}
      className="mt-8 lg:mt-12 sliderWrapper blogSlider"
    >
      {blog.blogcontent.map((bloglist, index) => (
        <div key={index} className="relative bloglist">
          <div className="image-box">
            <figure className="overlay-anim overflow-hidden">
              <Link href="#" className="w-full h-full">
                <Image
                  src={bloglist.imgsource}
                  alt="Blog Image"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-[4/3] transition-all ease-linear duration-300"
                />
              </Link>
            </figure>
          </div>
          <div className="p-8 bg-gray-100">
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="icon-user"></span>
                <span className="username">By {bloglist.name}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="icon-calendar"></span>
                <span className="dateposted">{bloglist.date}</span>
              </div>
            </div>
            <Link href="#" className="inline-block">
              <h2 className="font-bold text-2xl my-4 hover:text-primary">
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
  );
};

export default Blog;
