import React from 'react';

const BreakdownThird = () => {
    return (
        <div>
             <div className="container mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-flow-col lg:grid-flow-col gap-20 ">
          <div className="md:col-span-6 lg:col-span-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-full"
              src="breakdown/images/developer.jpg"
              alt=""
            />
          </div>
          <div className=" ">
            <div>
              <h4 className="text-3xl tracking-tighter ">
                Now, let is talk about the things you wants to  steer clear of. 
              </h4>
              <p className="text-base my-4">
                Your success on Freelance is important to us. Avoid the following to keep in line with our community standers:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-14 mb-2"
                    src="/breakdown/icons/i-card.svg"
                    alt=""
                  />
                  <p>
                   Providing any misleading or inaccurate information about your identify.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-14 mb-2"
                    src="/breakdown/icons/duplicate.svg"
                    alt=""
                  />
                  <p>
                    Opening duplicate accounts. Remember, you can always create more Gig.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-14 mb-2"
                    src="/breakdown/icons/bag.svg"
                    alt=""
                  />
                  <p>
                   Soliciting other community members for work on Freelance.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-16 mb-2"
                    src="/breakdown/icons/payment.svg"
                    alt=""
                  />
                  <p>
                   Requesting to take communication and payment outside of Freelance.
                  </p>
                </div>
              </div>
              
            </div>
            <div className="my-8 flex gap-10 ">
              <button className="text-white font-semibold text-lg rounded-md transition-all duration-500 bg-green-600 hover:bg-green-700 px-10 py-2">
                Continue
              </button>
              <button className="text-blue-500 font-medium text-lg">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default BreakdownThird;