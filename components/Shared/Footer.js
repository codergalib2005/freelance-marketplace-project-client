import { InstagramFilled, LinkedinFilled, TwitterOutlined, YoutubeOutlined } from "@ant-design/icons";
import React from "react";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer_main}>
      <div className={styles.shape}>
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://i.ibb.co/Y7K8NW5/frame-2.png" alt="" />
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_main_container}>
          <div className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1  gap-4 container mx-auto">
            <div className="text-[#FFF5DA] lg:col-span-2 ">
              <div className="logo mb-8">
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i.ibb.co/Ssxh3cj/logo-white.png" alt="" />
              </div>
              <p className="text-[#FFF5DA] mr-3 mb-3 font-sans">
                Workfleek - Top Freelancer Marketplace WordPress Theme Dotem eiusmod tempor incune utnaem labore etdolore maignaiqua enim poskina
                ilukita ylokem lokateise ination voluptate velit ecillum dolore eu fugiat nulla pariatur lokaim urianewce more...
              </p>
              <div className="icon cursor-pointer">
                <div className="inline-block text-xl mr-5 hover:scale-150 duration-500  ">
                  <TwitterOutlined />
                </div>
                <div className="inline-block text-xl mr-5 hover:scale-150 duration-500  ">
                  <LinkedinFilled />{" "}
                </div>
                <div className="inline-block text-xl mr-5 hover:scale-150 duration-500  ">
                  <YoutubeOutlined />
                </div>
                <div className="inline-block text-xl hover:scale-150 duration-500  ">
                  <InstagramFilled />
                </div>
              </div>
            </div>

            <div className="text-[#FFF5DA] ">
              <h3 className="text-2xl text-[#FFF5DA] mb-8 font-sans">Search by location</h3>
              <ul>
                <li className="hover:translate-x-6 cursor-pointer duration-300 font-sans hover:underline my-2 text-base">Jobs In Australia</li>
                <li className="hover:translate-x-6 cursor-pointer duration-300 font-sans hover:underline my-2 text-base">Jobs In Canada </li>
                <li className="hover:translate-x-6 cursor-pointer duration-300 font-sans hover:underline my-2 text-base">Jobs In England </li>
                <li className="hover:translate-x-6 cursor-pointer duration-300 font-sans hover:underline my-2 text-base">Jobs In India </li>
                <li className="hover:translate-x-6 cursor-pointer duration-300 font-sans hover:underline my-2 text-base">Jobs In Turkey </li>
                <li className="hover:translate-x-6 cursor-pointer duration-300 font-sans hover:underline my-2 text-base">Jobs In United Emirates</li>
                <li className="hover:translate-x-6 cursor-pointer duration-300 font-sans hover:underline my-2 text-base">Jobs In United Emirates</li>
                <li className="hover:translate-x-6 cursor-pointer duration-300 font-sans hover:underline my-2 text-base">Jobs In United Kingdom</li>
                <li className="hover:translate-x-6 cursor-pointer duration-300 font-sans hover:underline my-2 text-base">+ View All</li>
              </ul>
            </div>

            <div className="text-[#FFF5DA] ">
              <h3 className="text-2xl text-[#FFF5DA] mb-8 font-sans">Recent Posted Jobs</h3>

              <div className="flex justify-center items-center mb-8">
                <div className="mr-4 ">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="img-responsive w-16 cursor-pointer rounded-sm hover:scale-75 duration-500"
                    src="https://i.ibb.co/txvbK6c/12-100x100.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="font-sans">Web Design</p>
                  <p className="font-sans font-semibold">Freelance Marketplace HR</p>
                  <p className="font-sans">Bangladesh</p>
                </div>
              </div>
              <div className="flex justify-center items-center my-2">
                <div className="mr-4 ">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="img-responsive w-16 cursor-pointer rounded-sm hover:scale-75 duration-500"
                    src="https://i.ibb.co/MkLc59p/15-100x100.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="font-sans">Web Instructor</p>
                  <p className="font-sans font-semibold">Forest Technology Professor</p>
                  <p className="font-sans">India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(0,0,0,0.3)]">
            <div className="flex justify-around items-center ">
              <div>
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-responsive" src="https://i.ibb.co/8dmKBTp/img-07.png" alt="" />
              </div>
              <div className="flex md:flex-wrap md:px-8">
                <input
                  type="text"
                  placeholder="Add your email"
                  className=" block lg:w-[400px] px-4 py-3 bg-white border border-slate-300 lg:rounded-l-lg text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                />
                <button
                  className="bg-[#F72A85] text-white  block  px-8 py-3 lg:rounded-r-lg

text-sm shadow-sm font-sans font-semibold"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <p className="font-sans my-4 text-slate-50">Copyright © 2022 The Workreap, All Right Reserved Amentotech</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
