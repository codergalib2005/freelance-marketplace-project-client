/* eslint-disable @next/next/no-img-element */
import React from "react";

const SellerCommunity = () => {
  return (
    <section className="bg-[#F7F7F7]">
      <div className="container-fluid mx-auto py-12 mt-20 text-center">
        <h2 className="text-4xl font-sans font-semibold mb-12">How It Works</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 md:mx-4 text-gray-400 gap-8">
          <div className="shadow py-2 px-3 cursor-pointer hover:bg-white duration-300">
            <div>
              <img className="block mx-auto" src="https://i.ibb.co/hc6Xh34/Screenshot-1.png" alt="" />
            </div>
            <h2 className="text-2xl text-gray-500">1. Create A Gig</h2>
            <p>Sign up for free, set up your Gig, and offer your work to our global audience.</p>
          </div>
          <div className="shadow py-2 px-3 cursor-pointer hover:bg-white duration-300">
            <div>
              <img className="block mx-auto" src="https://i.ibb.co/Hp44jfy/Screenshot-2.png" alt="" />
            </div>
            <h2 className="text-2xl text-gray-500">2. Deliver Great Work</h2>
            <p>
              Get notified when you get an order and use our system to discuss details with customers. 3. Get Paid Get paid on time, every time.
              Payment is{" "}
            </p>
          </div>
          <div className="shadow py-2 px-3 cursor-pointer hover:bg-white duration-300">
            <div>
              <img className="block mx-auto" src="https://i.ibb.co/qs42zzX/Screenshot-3.png" alt="" />
            </div>
            <h2 className="text-2xl text-gray-500">3. Get Paid</h2>
            <p>Get paid on time, every time. Payment is transferred to you upon order completion.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerCommunity;
