import React from "react";

const Banner = () => {
  return (
    <div className="bg-orange-100">
      <div className=" container mx-auto px-8 md:px-10 lg:px-0 py-10 ">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div>
              <h4 className="text-4xl md:text-4xl lg:text-6xl text-indigo-900 font-bold">
                Do everything that you can do for your dream
                <span className=" font-serif"> Community</span>
              </h4>
              <h5 className=" text-xl md:text-lg lg:text-2xl my-8 ">
                Get access to upcoming events, exclusive content, the latest and
                greatest industry news, and more.
              </h5>
              <button className="bg-green-500 border-2 hover:bg-orange-100 border-green-500 px-6 py-2 text-lg font-medium  transition-all duration-500 hover:text-green-500 text-white rounded-md ">
                Sign up now
              </button>
            </div>
          </div>

          <div className=" flex justify-center items-center ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="lg:w-[28rem]"
              src="/community/connection-people.png"
              alt=""
            />

            <div className=" flex justify-end">
              <div className="hidden lg:block ">
                <div className="py-4">
                  <h4 className="text-3xl font-semibold">$12</h4>
                  <h4 className="text-lg">Per month</h4>
                </div>
                <div className="bg-orange-200 rounded-md">
                  <h4 className="text-base px-10  pt-4 font-semibold text-indigo-900">
                    For Team Subscription{" "}
                  </h4>
                  <div className="flex items-center justify-center pb-3">
                    <div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/community/star.svg" alt="" />
                    </div>
                    <div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/community/star.svg" alt="" />
                    </div>
                    <div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/community/star.svg" alt="" />
                    </div>
                    <div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/community/star.svg" alt="" />
                    </div>
                    <div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/community/star.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
