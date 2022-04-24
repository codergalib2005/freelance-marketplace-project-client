import React from 'react';

const Building = () => {
    return (
        <div className="container mx-auto px-8 md:px-8 lg:px-0 my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <div className="flex gap-2">
            <div className=" flex-col justify-around">
              <div className="flex items-end mr-4">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-48 rounded-full object-cover"
                    src="/community/bayer-.png"
                    alt=""
                  />
                </div>
                <div className="bg-green-700 opacity-80 px-12 py-10 rounded-3xl rounded-bl-none">
                  <h4 className="text-lg text-white mb-3 ">
                    Thank you for your answer! Here is a 16% discount coupon for
                    you
                  </h4>
                  <button className="text-white opacity-60 bg-emerald-500 border-[1px] border-green-600 px-4 py-[1px] text-base">
                    Start conversation
                  </button>
                </div>
              </div>
              <div className="flex items-end mt-6 ml-16">
                <div className=" bg-orange-200 px-6 py-4  inline-block rounded-3xl rounded-br-none">
                  <h4 className="text-lg  mb-3">
                    Wow really? Thank you, just in time to buy the accessories!
                  </h4>
                </div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-48 rounded-full object-cover"
                    src="/community/bayer-.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                src="/community/bayer-.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div>
              <h4 className="text-lg tracking-[.30rem] text-red-600 font-bold">
                WHY CHOOSE US
              </h4>
              <h4 className="text-5xl text-indigo-900 font-bold tracking-tighter">
                community building <br />
                and organizing
              </h4>
              <h4 className="text-base opacity-50 my-6">
                in virtual space through communication platform. Durable <br />{" "}
                relations that extend beyond immediate genealogical <br /> ties
                also define a sense of community.
              </h4>
  
              <div className="flex items-center gap-8">
                <button className="bg-indigo-900 px-4 py-2 ">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/community/right-arrow.svg" alt="" />
                </button>
                <h4 className="text-base text-indigo-900 font-semibold">
                  Get Started
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Building;