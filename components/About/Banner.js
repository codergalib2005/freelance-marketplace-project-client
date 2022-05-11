/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "../../styles/about-Banner.module.css";

const Banner = () => {
  return (
    <div className={` ${styles.header_container}`}>
      <div className={`${styles.header_section} min-h-screen px-4`}>
        <div className="p-4 md:p-0 container text-center md:text-left m-auto flex justify-between items-center text-gray-700">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}

            <img src="/navbar/image/logo-white.png" alt="" />
          </div>
          <div className="flex md:hidden">
            <ul className="flex items-center">
              <Link href="/">
                <a className="text-gray-300 hover:text-green-400 text-lg font-bold py-4 px-6">
                  Home
                </a>
              </Link>
            </ul>
          </div>
          <ul className="hidden md:flex items-center  text-base font-semibold text-white cursor-pointer">
            <Link href="/">
              <a className="hover:text-green-400 text-lg font-bold py-4 px-6">
                Home
              </a>
            </Link>
            <Link href="/profile">
              <a className="hover:text-green-400 text-lg font-bold py-4">
                Profile
              </a>
            </Link>
            <Link href="/become&seller">
              <a className="hover:text-green-400 text-lg font-bold py-4 px-6">
                Become a Seller
              </a>
            </Link>
          </ul>
        </div>
        <div className="container mx-auto flex items-center min-h-screen md:min-h-[500px]">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold  text-white">
              About Workfleek
              <br /> Why We Are Best?
            </h2>
            <p className="text-white mt-4 text-lg font-medium">
              Workfleek is the best freelancing market place.Workfleek u provide
              all <br /> about sevices like web design, web development,
              programming & teach, <br /> degital marketing, data entry etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
