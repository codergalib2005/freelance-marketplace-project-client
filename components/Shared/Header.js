import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 bg-indigo-400  w-full shadow">
        <div className="container mx-auto flex justify-between items-center text-gray-700">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-36 cursor-pointer  py-4"
              src="/banner/navbar/image/logo-white.png"
              alt=""
            />
          </div>

          <ul className="hidden text-white md:flex items-center pr-10 text-base font-semibold cursor-pointer">
            <li className="  px-6">Business</li>
            <li className="  px-6">Explore</li>
            <li className="  px-6">$ USD</li>
            <li className="  px-6">Become a Seller </li>
            <button className="bg-indigo-400 hover:bg-orange-400 translate-all transition duration-300 rounded-md font-bold py-1 px-4 border-2">
              Join
            </button>
          </ul>
          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600"></div>
            <div
              className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0
               group-focus:right-0 group-focus:opacity-100 transition-all duration-300"
            >
              <ul className="flex flex-col  items-end w-full text-base cursor-pointer pt-10">
                <button className="bg-green-600 hover:bg-green-800 rounded-sm px-8 py-2 font-bold text-white -mt-6 mr-8 ">
                  Join Freelance
                </button>

                <li className=" py-4 px-6 mr-8 hover:text-green-700 text-semibold text-xl">
                  <Link href="/">  Business</Link>
                </li>
                <li className=" py-4 px-6 mr-8">
                  <Link href="/"> Explore </Link>
                </li>
                <li className=" py-4 px-6 mr-8">
                  <Link href="/"> Become Seller </Link>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;