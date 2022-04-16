/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

const bannerData = [
  {
    title: " Digital Marketing",
    desc: " The best services in our company that is curently on the top position from other services",
    year: "10+",
    specalist: "5k+",
    client: "100%",
    pic: "https://raw.githubusercontent.com/mahmudulhaquequdrati/all-gifs/main/marketing.gif",
  },
  {
    title: "Web Developement",
    desc: "The best services in our company that is curently on the best selling part of our company on demand.",
    year: "15+",
    specalist: "15k+",
    client: "100%",
    pic: "https://raw.githubusercontent.com/mahmudulhaquequdrati/all-gifs/main/web-dev.gif",
  },
  {
    title: "Graphics Design",
    desc: "The best services in our company that is curently on the best selling part of our company on demand.",
    year: "15+",
    specalist: "15k+",
    client: "100%",
    pic: "https://raw.githubusercontent.com/mahmudulhaquequdrati/all-gifs/main/graphics-design.gif",
  },
  {
    title: "Writting",
    desc: "The best services in our company that is curently on the best selling part of our company on demand.",
    year: "15+",
    specalist: "15k+",
    client: "100%",
    pic: "https://raw.githubusercontent.com/mahmudulhaquequdrati/all-gifs/main/writting.gif",
  },
  {
    title: "App Developement",
    desc: "The best services in our company that is curently on the best selling part of our company on demand.",
    year: "15+",
    specalist: "15k+",
    client: "100%",
    pic: "https://raw.githubusercontent.com/mahmudulhaquequdrati/all-gifs/main/m-dev.gif",
  },
  {
    title: "Web Design",
    desc: "The best services in our company that is curently on the best selling part of our company on demand.",
    year: "15+",
    specalist: "15k+",
    client: "100%",
    pic: "https://raw.githubusercontent.com/mahmudulhaquequdrati/all-gifs/main/design.gif",
  },
  {
    title: "SEO ",
    desc: "The best services in our company that is curently on the best selling part of our company on demand.",
    year: "15+",
    specalist: "15k+",
    client: "100%",
    pic: "https://raw.githubusercontent.com/mahmudulhaquequdrati/all-gifs/main/app-dev.gif",
  },
];

const Banner = () => {
  return (
    <div className="cubano">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay]}
        className="overflow-x-hidden"
      >
        {bannerData.map((bd, ind) => (
          <SwiperSlide key={ind} bd={bd}>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-9  overflow-x-hidden py-12">
              <div className="col-span-5 pl-0  lg:pl-24 pt-24">
                <div className="text-center lg:text-left ">
                  <h2 className="text-6xl font-bold text-[#2A3254]">
                    {bd?.title}
                  </h2>
                  <p className="text-gray-500 text-sm my-3 w-96 mx-auto lg:mx-0">
                    {bd.desc}
                  </p>
                  <div className="flex gap-4 justify-center lg:justify-start">
                    <button className="px-8 py-3 rounded bg-pink-500 text-lg  text-white">
                      Get Started
                    </button>
                    <button className="px-8 py-3  rounded border-2 border-pink-400  text-lg">
                      Try Now
                    </button>
                  </div>

                  <div className="mt-12 flex gap-6 justify-center lg:justify-start">
                    <div className="">
                      <p className="font-bold text-3xl">{bd.year}</p>
                      <p className="w-[80%] text-sm">Years of experiences</p>
                    </div>
                    <div className="">
                      <p className="font-bold text-3xl">{bd.specalist}</p>
                      <p className="w-[80%] text-sm">Specialist available</p>
                    </div>
                    <div className="">
                      <p className="font-bold text-3xl">{bd.client}</p>
                      <p className="w-[80%] text-sm">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full col-span-4 ">
                <img
                  className="w-[80%] max-w-full mx-auto"
                  src={bd.pic}
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
