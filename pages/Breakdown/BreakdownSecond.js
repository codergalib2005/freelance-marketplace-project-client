import React from 'react';

const BreakdownSecond = () => {
    return (
        <div>
            <div className="container mx-auto ">
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
                What makes a successful Freelance profile?
              </h4>
              <p className="text-base my-4">
                Your first impression matters! Create a profile that will stand
                out from the crowed on Freelance
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-16"
                    src="/breakdown/icons/profile (1).svg"
                    alt=""
                  />
                  <p>
                    Take your time and creating your profile so it is exactly as
                    you want it to be.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-16"
                    src="/breakdown/icons/link (1).svg"
                    alt=""
                  />
                  <p>
                    Add credibility by linking out to your relevant professional
                    networks.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-14 mb-2"
                    src="/breakdown/icons/writing.svg"
                    alt=""
                  />
                  <p>
                    Accurately describe your professional skill to help you get
                    more work.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-16"
                    src="/breakdown/icons/add-user.svg"
                    alt=""
                  />
                  <p>
                    Put a face to your name! Upload a profile picture that
                    clearly shows your face.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-16"
                    src="/breakdown/icons/lock.svg"
                    alt=""
                  />
                  <p>
                    To keep our community secure for everyone, We may ask you to
                    verify your ID.
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

export default BreakdownSecond;