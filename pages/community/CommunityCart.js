import React from "react";

const CommunityCart = () => {
  return (
    <div>
      <div className="container mx-auto px-8 md:px-0 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
          <div className=" bg-red-700 opacity-80 rounded-lg relative ">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className=" h-[30rem] w-full mt-16 "
                src="/community/hand-2.png"
                alt=""
              />
            </div>
            <div className="  px-6  absolute top-12">
              <h5 className="text-3xl text-white my-8">Events</h5>
              <h4 className="text-4xl text-white block">
                Explore current and upcoming Freelance events
              </h4>
            </div>
          </div>
          <div className=" bg-red-700 opacity-80 rounded-lg relative ">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className=" h-[30rem] w-full mt-16 "
                src="/community/hand-2.png"
                alt=""
              />
            </div>
            <div className="  px-6  absolute top-12">
              <h5 className="text-3xl text-white my-8">Events</h5>
              <h4 className="text-4xl text-white block">
                Explore current and upcoming Freelance events
              </h4>
            </div>
          </div>
          <div className=" bg-red-700 opacity-80 rounded-lg relative ">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className=" h-[30rem] w-full mt-16 "
                src="/community/hand-2.png"
                alt=""
              />
            </div>
            <div className="  px-6  absolute top-12">
              <h5 className="text-3xl text-white my-8">Events</h5>
              <h4 className="text-4xl text-white block">
                Explore current and upcoming Freelance events
              </h4>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CommunityCart;
