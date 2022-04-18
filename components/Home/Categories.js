/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import Link from "next/link";
import { Grid, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {BsBoxArrowInRight} from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const Categories = () => {
  return (
    <div className="container px-2 mx-auto py-8">
      <div className="flex items-center justify-between mb-5 border-b border-gray-[400]">
        <div>
            <h3 className="text-[#2a3254] text-xl font-bold pb-5 border-b-2 border-orange-600">Browse Categories</h3>
        </div>
        <div>
          <h1 className="text-[#2a3254] text-xl hover:text-[#e83a3b] pb-5">
          <Link href="/">
             <a className="flex items-center hover:text-[#e83a3b] font-bold transition-all duration-300 ease-linear">Explore All <BsBoxArrowInRight className="ml-2"/></a>
          </Link>
          </h1>
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid]}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
        >
          <SwiperSlide>
            <div className="bg-[#f3e5c2] h-60 flex items-center justify-center shadow-lg flex-col text-center rounded-md">
              <strong className="text-xl text-[#2a3254]">
                Web Development
              </strong>
              <img
                className="w-28 h-28"
                src="https://i.ibb.co/sbtS9qd/image-6-removebg-preview.png"
                alt="image-6-removebg-preview"
                border="0"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#c2fcef] h-60 flex items-center justify-center shadow-lg flex-col text-center rounded-md">
              <strong className="text-xl text-[#2a3254]">Design</strong>
              <img
                className="w-28 h-28"
                src="https://i.ibb.co/YL3c5hj/image-5-removebg-preview.png"
                alt="image-5-removebg-preview"
                border="0"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#c1c1f7] h-60 flex items-center justify-center shadow-lg flex-col text-center rounded-md">
              <strong className="text-xl text-[#2a3254]">Programming</strong>
              <img
                className="w-28 h-28"
                src="https://i.ibb.co/mTdNWm3/image-4-removebg-preview.png"
                alt="image-4-removebg-preview"
                border="0"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#ffd3db] h-60 flex items-center justify-center shadow-lg flex-col text-center rounded-md">
              <strong className="text-xl text-[#2a3254]">
                Graphice design
              </strong>
              <img
                className="w-28 h-28"
                src="https://i.ibb.co/jDqK8Tv/image-3-removebg-preview.png"
                alt="image-3-removebg-preview"
                border="0"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#c5e4fa] h-60 flex items-center justify-center shadow-lg flex-col text-center rounded-md">
              <strong className="text-xl text-[#2a3254]">
                App Development
              </strong>
              <img
                className="w-28 h-28"
                src="https://i.ibb.co/kcc0qsR/image-2-removebg-preview.png"
                alt="image-2-removebg-preview"
                border="0"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#fce3d6] h-60 flex items-center justify-center shadow-lg flex-col text-center rounded-md">
              <strong className="text-xl text-[#2a3254]">Writting</strong>
              <img
                className="w-28 h-28"
                src="https://i.ibb.co/jzj9btq/image-1-removebg-preview.png"
                alt="image-1-removebg-preview"
                border="0"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#fbf0d5] h-60 flex items-center justify-center shadow-lg flex-col text-center rounded-md">
              <strong className="text-xl text-[#2a3254]">
                CEO / Marketing
              </strong>
              <img
                className="w-28 h-28"
                src="https://i.ibb.co/f1hYsLC/image-8-removebg-preview.png"
                alt="image-8-removebg-preview"
                border="0"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#d0fff5] h-60 flex items-center justify-center shadow-lg flex-col text-center rounded-md">
              <strong className="text-xl text-[#2a3254]">Design</strong>
              <img
                className="w-28 h-28"
                src="https://i.ibb.co/DwHkVyc/image-7-removebg-preview.png"
                alt="image-7-removebg-preview"
                border="0"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
