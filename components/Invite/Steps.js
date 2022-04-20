import React from 'react';

const Steps = () => {
    return (
        <div>
             <div className="bg-gray-200">
        <div className="container mx-auto mt-32">
          <h4 className="text-center text-3xl my-6 pt-8">Three Easy Steps</h4>
          <div className="md:flex lg:flex gap-20 mx-16 py-7">
            <div className="">
              <div className="flex justify-center ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="refer/messages.png" alt="" />
              </div>
              <div>
                <h5 className="text-center text-xl pb-8">
                  Spread the word by email or with your link via social sharing
                </h5>
              </div>
            </div>
            <div className="my-6 md:my-0 lg:my-0">
              <div className="flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="refer/diary (1).png" alt="" />
              </div>
              <div>
                <h5 className="text-center text-xl pb-8">
                  Your friend signs up to Fiverr & gets 10% off their first
                  purchase
                </h5>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="refer/currency.png" alt="" />
              </div>
              <div>
                <h5 className="text-center text-xl pb-8">
                  You get 10% of their first order amount, up to $100
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-16">
        <h4 className="text-4xl text-center my-8 px-8 md:px-0 lg:px-0">
          Don not Let Your Friends Waste Another Minute
        </h4>
        <p className="text-lg  my-2 text-center">
          Nobody likes to waste time. That is why Fiverr empowers entrepreneurs
          to connect with pros <br /> who can help them do more with less. You
          have experienced this power. Now, you can share it and <br /> earn up
          to $100 for every friend who signs up and makes their first order.
        </p>
        <p className="text-lg text-center text-blue-900 hover:decoration-current font-bold">
          Read Terms
        </p>
      </div>
        </div>
    );
};

export default Steps;