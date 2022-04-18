/* eslint-disable @next/next/no-img-element */
import React from "react";

const Devices = () => {
  return (
    <div className="container px-4 mx-auto my-36">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14 justify-center items-center">
        <div className="px-8 md:px-2 lg:px-0">
          <h3 className="text-4xl text-[#2a3254] font-bold">
            Download App Free App For
          </h3>
          <h3 className="text-3xl font-bold mt-1 mb-2 text-orange-700">
            Android And IOS
          </h3>
          <p className="text-base mb-8 text-justify font-medium text-gray-600">
            Aliquam bibendum convallis eros malesuada volutpat. Donec odio urna,
            laoreet sed enim vitae, placerat ornare urna. Cras euismod sit amet
            urna eget sagittis. In scelerisque gravida commodo. Aliquam quis mi
            cursus, malesuada turpis non, efficitur elit. Nullam imperdiet ipsum
            quis diam malesuada, ut suscipit enim aliquam.
          </p>
          {/* <div className="flex gap-6">
              <div className=" gap-2 items-center bg-gray-900 inline-flex px-6 py-3 rounded-md ">
                <div>
                  <img className="w-6" src="Devices/playstore.svg" alt="" />
                </div>
                <div>
                  <p className="text-white text-sm">Download on</p>
                  <h4 className="text-white text-md">Google Play</h4>
                </div>
              </div>
            </div> */}
          <div className=" gap-2 items-center bg-orange-600 shadow-xl inline-flex px-6 py-3 rounded-md">
            <div>
              <img className="w-10" src="Devices/apple.svg" alt="" />
            </div>
            <div>
              <p className="text-white text-sm font-bold">Download on</p>
              <h4 className="text-white text-md font-bold mb-0 pb-0">App Store</h4>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img className="w-[30rem] application_animation" src="Devices/app.png" alt="" />
        </div>
      </div>
    </div >
  );
};

export default Devices;
