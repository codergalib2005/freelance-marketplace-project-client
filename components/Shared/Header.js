import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [showBg, setShowBg] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", OnScrollHeader)
  }, [])
  const OnScrollHeader = e => {
    if (window.scrollY >= 100) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
  }
  return (
    <div style={{ zIndex: "1000" }} className="fixed top-0 left-0 w-full">
      <nav
        className={`fixed top-0 left-0 w-full shadow transition-all duration-300 ease-linear ${showBg ? "bg-gray-900" : "bg-[rgba(0, 0, 0, 0.9)]"}`}
        style={{ zIndex: "289" }}
      >
        <div className="container px-2 m-auto flex justify-between items-center text-gray-700">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-36 cursor-pointer  py-4"
              src="/banner/navbar/image/logo-white.png"
              alt=""
            />
          </div>
          <ul className="hidden md:flex items-center  text-base font-semibold text-white cursor-pointer">
            <Link href="/gig_add">
              <a className="hover:text-green-400 text-lg py-4 px-6">Create a Gig</a>
            </Link>
            <Link href="/">
              <a className="hover:text-green-400 text-lg py-4 px-6">Business</a>
            </Link>
            <Link href="/">
              <a className="hover:text-green-400 text-lg py-4 px-6">Explore</a>
            </Link>
            <Link href="/">
              <a className="hover:text-green-400 text-lg py-4 px-6">$ USD</a>
            </Link>
            <Link href="/">
              <a className="hover:text-green-400 text-lg py-4 px-6">
                Become a Seller
              </a>
            </Link>
            <Link href="/profile">
              <a className="hover:text-green-400 text-lg py-4 px-6">Profile</a>
            </Link>
            <button className="bg-indigo-400 text-lg hover:bg-orange-400 translate-all transition duration-300 rounded-md font-bold py-1 px-4 border-2">
              <Link href="/login">Join</Link>
            </button>
          </ul>
          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-non group scale-100 hover:scale-105 transition-all duration-200 ease-linear">
            <div className="w-5 h-1 bg-gray-50 mb-1"></div>
            <div className="w-5 h-1 bg-gray-50 mb-1"></div>
            <div className="w-5 h-1 bg-gray-50"></div>
            <div
              style={{ width: "240px" }}
              className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0
      group-focus:right-0 group-focus:opacity-100 transition-all duration-300 flex items-center flex-column"
            >
              <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                <li className="bg-green-600 hover:bg-green-800 rounded-sm px-8 py-2 font-bold text-white -mt-6 mr-8 ">
                  Join Freelance
                </li>

                <Link href="/login">
                  <a className="hover:text-green-400 mr-10 text-lg pt-6 pb-2 px-6">
                    Sign in
                  </a>
                </Link>
                <Link href="/">
                  <a className="hover:text-green-400 mr-10 text-lg  px-6">
                    Freelance Business
                  </a>
                </Link>
                <Link href="/">
                  <a className="hover:text-green-400 mr-10 text-lg py-2 px-6">
                    Explore
                  </a>
                </Link>
                <li className=" pt-2 px-6 font-medium mr-10 text-semibold">
                  General
                </li>
                <hr className="w-full" />
                <Link href="/">
                  <a className="hover:text-green-400 mr-10 text-lg pt-6 pb-2 px-6">
                    Home
                  </a>
                </Link>
                <Link href="/">
                  <a className="hover:text-green-400 mr-10 text-lg py-2  px-6">
                    Contact
                  </a>
                </Link>
                <Link href="/">
                  <a className="hover:text-green-400 mr-10 text-lg py-2  px-6">
                    Services
                  </a>
                </Link>
                <Link href="/">
                  <a className="hover:text-green-400 mr-10 text-lg py-2  px-6">
                    About
                  </a>
                </Link>
              </ul>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
