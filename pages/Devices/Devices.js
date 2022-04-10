/* eslint-disable @next/next/no-img-element */
import React from "react";

const Devices = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14 justify-center items-center">
        <div className="px-8 md:px-2 lg:px-0">
          <h3 className="text-3xl text-indigo-900 font-bold">
            Download App Free App For
          </h3>
          <h3 className="text-3xl text-blue-600 font-bold mt-1 mb-5">
            Android And Iphone
          </h3>
          <p className="text-sm mb-8 text-gray-600 leading-6">
            Aliquam bibendum convallis eros malesuada volutpat. Donec odio urna,
            laoreet sed enim vitae, placerat ornare urna. Cras euismod sit amet
            urna eget sagittis. In scelerisque gravida commodo. Aliquam quis mi
            cursus, malesuada turpis non, efficitur elit. Nullam imperdiet ipsum
            quis diam malesuada, ut suscipit enim aliquam. Nunc suscipit, dolor
            ac euismod accumsan, justo diam consectetur nibh, in congue est
            neque sed magna. Donec sed felis vitae tellus maximus finibus.
            Praesent semper dapibus arcu,
          </p>
          <div className="flex gap-6">
            <div className=" gap-2 items-center bg-gray-900 inline-flex px-6 py-3 rounded-md ">
              <div>
                <img className="w-6" src="Devices/playstore.svg" alt="" />
              </div>
              <div>
                <p className="text-white text-sm">Download on</p>
                <h4 className="text-white text-md">Google Play</h4>
              </div>
            </div>
            <div className=" gap-2 items-center bg-blue-900 inline-flex px-6 py-3 rounded-md">
              <div>
                <img className="w-6" src="Devices/apple.svg" alt="" />
              </div>
              <div>
                <p className="text-white text-sm">Download on</p>
                <h4 className="text-white text-md">App Store</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-[30rem]" src="Devices/app.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Devices;
