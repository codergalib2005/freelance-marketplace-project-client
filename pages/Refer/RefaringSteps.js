import React from "react";

const RefaringSteps = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto my-32">
        <h4 className="text-center text-3xl my-6 pt-8">Three Easy Steps</h4>
        <div className="md:flex lg:flex gap-20 mx-16 py-7">
          <div className="">
            <div className="flex justify-center ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="refer/messages.png" alt="" />
            </div>
            <div>
              <h5 className="text-center text-xl">
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
              <h5 className="text-center text-xl">
                Spread the word by email or with your link via social sharing
              </h5>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="refer/currency.png" alt="" />
            </div>
            <div>
              <h5 className="text-center text-xl">
                Spread the word by email or with your link via social sharing
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefaringSteps;
