import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16 text-center ">
        <div className=" shadow-xl rounded-lg  py-10 relative">
          <div className="flex justify-center mb-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="counter/img-1.png" alt="" />
          </div>
          <CountUp
            className=" font-bold text-3xl "
            end={12000}
            duration={10}
            suffix="+"
          />
          <h5 className="my-3 text-xl">Freelance Developer</h5>
          <h4 className=" rounded-br-full  top-0 left-0 absolute bg-orange-700 p-6 inline-block"></h4>
        </div>

        <div className=" shadow-xl rounded-lg py-10 ">
          <div className="flex justify-center mb-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/counter/img-2.png" alt="" />
          </div>
          <CountUp
            className=" font-bold text-3xl "
            end={22500}
            duration={10}
            suffix="+"
          />
          <h5 className="my-3 text-xl">Positive Feedback</h5>
        </div>
        <div className="shadow-xl rounded-lg py-10 relative">
          <div className="flex justify-center mb-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/counter/img-3.png" alt="" />
          </div>
          <CountUp
            className=" font-bold text-3xl "
            end={42500}
            duration={10}
            suffix="+"
          />
          <h5 className="my-3 text-xl">Complete Services</h5>
          <h4 className=" rounded-bl-full  top-0 right-0 absolute bg-orange-700 p-6 inline-block"></h4>
        </div>
      </div>
    </div>
  );
};

export default Counter;
