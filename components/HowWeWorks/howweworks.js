/* eslint-disable @next/next/no-img-element */
import React from "react";

const howWeWorks = [
  {
    title: "Reach Us",
    desc: " First you can contact our team by ohone and What's app number 01989832323 and out email is freelance@gmail.com.",
    id: "01",
    img: "https://i.ibb.co/wwwqLFV/call-us.jpg",
  },

  {
    title: "Kick of you project",
    desc: "To fullfill your needs such as consultation design process and other desgin matters get peace of mind fast though.",
    id: "02",
    img: "https://i.ibb.co/7C3nx2c/kich-1.png",
  },
  {
    title: "Virtual Reports",
    desc: "After discussing virtualy you will get some reports of the usages in our company which may helps you to grow here.",
    id: "03",
    img: "https://i.ibb.co/pjGTSFw/reporting-1.png",
  },
  {
    title: "Consultant",
    desc: "By using a video meeting platform we are here to give you consultation about your journey in our company. ",
    id: "04",
    img: "https://i.ibb.co/MhvbCWm/consultant-1.png",
  },
];

const HowWeWorks = () => {
  return (
    <div>
      <h2 className="text-center text-3xl lg:text-5xl text-[#2A3254] font-semibold mt-16">
        See How We Works
      </h2>
      <p className="text-sm text-gray-600 text-center w-[80%] lg:w-[30%] mx-auto pt-2">
        our offical interior design and build team have more than 10 years of
        experience in the workplace design industry.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-24 mt-10 gap-y-3 md:gap-8">
        {howWeWorks.map((hw, ind) => (
          <div className="flex shadow-sm shadow-orange-700 rounded-md overflow-hidden" key={ind}>
            <div className="w-[40%] h-full">
              <img className="w-full h-full" src={hw.img} alt="" />
            </div>
            <div className="w-[60%]">
              <p className="text-gray-300 px-4 font-semibold text-lg bg-orange-700">
                {hw.id}
              </p>
              <div className="px-3">
                <h4 className="font-bold text-[#2a3254] my-2 text-lg">
                  {hw.title}
                </h4>
                <p className=" text-gray-400 ">{hw.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWorks;
