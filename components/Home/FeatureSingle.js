/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

const FeatureSingle = ({ feature }) => {
  const { img, title } = feature;
  return (
    <Link href="/gig_search" passHref className="cursor-pointer">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.85 }}
        transition={{ duration: 0.5 }}
        className="shadow-lg rounded-lg"
      >
        <div className=" rounded-lg">
          <img className="rounded-lg cursor-pointer" src={img} alt="image" />
        </div>
        <div className="text-left flex justify-between items-center px-2 py-4 capitalize">
          <p className="cursor-pointer">{title}</p>
          <div className="bg-blue-200 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer">
            <BsBoxArrowInUpRight />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default FeatureSingle;
