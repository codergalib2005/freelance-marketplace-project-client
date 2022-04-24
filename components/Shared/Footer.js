/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-gray-900 py-3">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 py-6">
          <div className="md:col-span-3">
            <div>
              <img className="w-40" src="/navbar/image/logo-white.png" alt="" />
            </div>
            <div>
              <p className="text-gray-400 font-medium py-2 text-lg">328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
              <p className="text-gray-400 font-medium py-1 text-lg">support@prolancer.com</p>
              <div className="flex items-stretch justify-between pt-5">
                <input className="w-9/12 text-lg font-medium py-2 px-2" type="text" placeholder="Your email address" />
                <button className="w-3/12 bg-[#6787fe] flex items-center justify-center text-white text-center ">Sign Up</button>
              </div>
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div>
              <strong className="text-white font-medium text-2xl border-b border-[#e83a3b]pb-2 mb-4">Categories</strong>
              <ul>
                <li className="block pb-2">
                  <Link href="/"><a className="no-underline hover:underline hover:text-[#e83a3b] text-lg font-medium text-gray-400">Business</a></Link>
                </li>
                <li className="block pb-2">
                  <Link href="/"><a className="no-underline hover:underline hover:text-[#e83a3b] text-lg font-medium text-gray-400">Programming & Tech</a></Link>
                </li>
                <li className="block pb-2">
                  <Link href="/"><a className="no-underline hover:underline hover:text-[#e83a3b] text-lg font-medium text-gray-400">Graphics & Design</a></Link>
                </li>
                <li className="block pb-2">
                  <Link href="/"><a className="no-underline hover:underline hover:text-[#e83a3b] text-lg font-medium text-gray-400">Video & Animation</a></Link>
                </li>
                <li className="block pb-2">
                  <Link href="/"><a className="no-underline hover:underline hover:text-[#e83a3b] text-lg font-medium text-gray-400">Digital Marketing</a></Link>
                </li>
              </ul>
            </div>
            <div>
              <strong className="text-white font-medium text-2xl border-b border-[#e83a3b]pb-2 mb-4">Community</strong>
              <ul>
                <li className="block pb-2">
                  <Link href="/"><a className="no-underline hover:underline hover:text-[#e83a3b] text-lg font-medium text-gray-400">Business</a></Link>
                </li>
                <li className="block pb-2">
                  <Link href="/"><a className="no-underline hover:underline hover:text-[#e83a3b] text-lg font-medium text-gray-400">Programming & Tech</a></Link>
                </li>
                <li className="block pb-2">
                  <Link href="/"><a className="no-underline hover:underline hover:text-[#e83a3b] text-lg font-medium text-gray-400">Graphics & Design</a></Link>
                </li>
                <li className="block pb-2">
                  <Link href="/"><a className="no-underline hover:underline hover:text-[#e83a3b] text-lg font-medium text-gray-400">Video & Animation</a></Link>
                </li>
                <li className="block pb-2">
                  <Link href="/"><a className="no-underline hover:underline hover:text-[#e83a3b] text-lg font-medium text-gray-400">Digital Marketing</a></Link>
                </li>
              </ul>
            </div>
            <div>
              <strong className="text-white font-medium text-2xl border-b border-[#e83a3b]pb-2 mb-4">Support</strong>
              <ul>
                <li className="block pb-2">
                  <Link href="/"><a className="no-underline hover:underline hover:text-[#e83a3b] text-lg font-medium text-gray-400">Business</a></Link>
                </li>
                <li className="block pb-2">
                  <Link href="/"><a className="no-underline hover:underline hover:text-[#e83a3b] text-lg font-medium text-gray-400">Programming & Tech</a></Link>
                </li>
                <li className="block pb-2">
                  <Link href="/"><a className="no-underline hover:underline hover:text-[#e83a3b] text-lg font-medium text-gray-400">Graphics & Design</a></Link>
                </li>
                <li className="block pb-2">
                  <Link href="/"><a className="no-underline hover:underline hover:text-[#e83a3b] text-lg font-medium text-gray-400">Video & Animation</a></Link>
                </li>
                <li className="block pb-2">
                  <Link href="/"><a className="no-underline hover:underline hover:text-[#e83a3b] text-lg font-medium text-gray-400">Digital Marketing</a></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap">
            <div>
              <p className="text-[#e83a3b]">Copyright © 2022 || All Rights Reserved by Team Unique gamer.</p>
            </div>
            <div className="text-right">
              <img src="/footer/paypal.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
