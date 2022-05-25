import Link from "next/link";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

const HeaderBottom = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0, visibility: "hidden" }}
      animate={{ y: 0, opacity: 1, visibility: "visible" }}
      transition={{ duration: 0.7 }}
      className="shadow-md py-1 z-40 header_bottom"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="text-3xl text-gray-900">
              <BiMenuAltLeft />
            </button>
          </div>
          <div>
            <ul className="flex items-center">
              <li className="mx-2 relative main_button">
                <span className="text-md font-bold flex items-center text-gray-600">
                  Pages
                  <span className="pl-3 text-lg">
                    <MdKeyboardArrowDown />
                  </span>
                </span>
                <ul className="absolute top-6 text-md left-0 w-40 bg-white shadow-lg dropdown_button">
                  <li className="text-md font-bold py-2 border-b border-gray-500 px-6 hover:bg-[#ec4899]">
                    <Link href="/about">
                      <a className="block text-gray-600">About</a>
                    </Link>
                  </li>
                  <li className="text-md font-bold py-2 border-b border-gray-500 px-6 hover:bg-[#ec4899]">
                    <Link href="/chat">
                      <a className="block text-gray-600">Chat</a>
                    </Link>
                  </li>
                  <li className="text-md font-bold py-2 border-b border-gray-500 px-6 hover:bg-[#ec4899]">
                    <Link href="/invite">
                      <a className="block text-gray-600">Invite</a>
                    </Link>
                  </li>
                  <li className="text-md font-bold py-2 border-b border-gray-500 px-6 hover:bg-[#ec4899]">
                    <Link href="/ourTeam">
                      <a className="block text-gray-600">Our Team</a>
                    </Link>
                  </li>
                  <li className="text-md font-bold py-2 px-6 hover:bg-[#ec4899]">
                    <Link href="/setting">
                      <a className="block text-gray-600">Setting</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mx-2 relative main_button">
                <span className="text-md font-bold flex items-center">
                  Spacial
                  <span className="pl-3 text-lg">
                    <MdKeyboardArrowDown />
                  </span>
                </span>
                <ul className="absolute top-6 text-md left-0 w-40 bg-white shadow-lg dropdown_button">
                  <li className="text-md font-bold py-2 border-b border-gray-500 px-6 hover:bg-[#ec4899]">
                    <Link href="/community">
                      <a className="block text-gray-600">Community</a>
                    </Link>
                  </li>
                  <li className="text-md font-bold py-2 border-b border-gray-500 px-6 hover:bg-[#ec4899]">
                    <Link href="/jobCreate">
                      <a className="block text-gray-600">Make a Job</a>
                    </Link>
                  </li>
                  <li className="text-md font-bold py-2 border-b border-gray-500 px-6 hover:bg-[#ec4899]">
                    <Link href="/support">
                      <a className="block text-gray-600">Support center</a>
                    </Link>
                  </li>
                  <li className="text-md font-bold py-2 px-6 hover:bg-[#ec4899]">
                    <Link href="/search_job">
                      <a className="block text-gray-600">Job Search</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <button>Others</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderBottom;
// Complete dropdown menu
