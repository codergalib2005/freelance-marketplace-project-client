import React from "react";
import CommunityCart from "./CommunityCart";

const CommunityBanner = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#ffffff" }}>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 my-16 items-center">
          <div>
            <div className="px-20 ">
              <h4 className="text-3xl md:text-4xl lg:text-6xl leading-loose		">
                Welcome to the Freelance{" "}
                <span className=" font-serif">Community</span>
              </h4>
              <h5 className=" text-xl md:text-lg lg:text-2xl my-8">
                Get access to upcoming events, exclusive content, the latest and
                greatest industry news, and more.
              </h5>
              <button className="bg-green-500 border-2 hover:bg-emerald-50 border-green-500 px-6 py-2 text-lg font-medium  transition-all duration-500 hover:text-green-500 text-white rounded-md ">
                Sign up now
              </button>
            </div>
            <div className="my-10 mx-10 hidden md:block lg:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/community/hero-dots.png" alt=" " />
            </div>
          </div>

          <div className=" flex justify-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/community/1_hero-artwork.jpg" alt="" />
          </div>
        </div>
      </div>
      <CommunityCart/>
    </div>
  );
};

export default CommunityBanner;
