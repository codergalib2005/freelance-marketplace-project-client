/* eslint-disable @next/next/no-img-element */
import React from "react";

const arrInfo = [
  {
    id: 1,
    img: "https://i.ibb.co/JjwBzbz/task.png",
    title: "Thefox & Template",
    subtitle: "your design",
    price: 15.62,
  },
  {
    id: 2,
    img: "https://i.ibb.co/JjwBzbz/task.png",
    title: "TheBrown & Template",
    subtitle: "your design",
    price: 12.62,
  },
  {
    id: 3,
    img: "https://i.ibb.co/JjwBzbz/task.png",
    title: "FireBox & Template",
    subtitle: "your design",
    price: 13.62,
  },
];

const Task = () => {
  return (
    <div className="my-12">
      <p>Here is all of the task items</p>
      {/* adding details */}
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 mt-6 gap-4">
        <div className=" col-span-3 shadow-md rounded-xl p-1 bg-white">
          <div className="flex justify-between p-4 bg-[#F9FBFC]">
            <p className="text-gray-500 text-sm">Gigs</p>
            <p className="text-gray-500 text-sm">Earnings</p>
          </div>
          {arrInfo.map((arr) => (
            <div key={arr.id}>
              <div className="flex items-center justify-between px-4 py-2">
                <div className="bg-blue-300 p-2 h-10 w-10 rounded-full flex justify-center items-center">
                  <img src={arr.img} alt="" />
                </div>
                <div className="">
                  <p className="font-bold text-gray-800 text-md">{arr.title}</p>
                  <p className="text-xs text-gray-300">{arr.subtitle}</p>
                </div>

                <div className="">
                  <p className="text-gray-700 font-semibold">${arr.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  */}
        <div className="col-span-2 shadow-md rounded-xl px-6 py-2 h-48 bg-white flex gap-6 items-center">
          <div className="">
            <img src="/profile/pie-chart.png" alt="" />
            <p className="text-gray-700 text-2xl font-semibold">36.9k</p>
          </div>
          <div className="w-6/12 mx-auto">
            <img src="/profile/Business-failure-pana.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
