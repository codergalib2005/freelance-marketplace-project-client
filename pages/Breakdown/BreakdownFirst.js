import React from 'react';

const BreakdownFirst = () => {
    return (
        <div>
             <div className="container mx-auto my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 justify-center">
          <div>
            <div>
              <h4 className="text-3xl tracking-tighter font-medium">
                Ready to start selling on Freelance?
                <br />
                Here is the breakdown:
              </h4>
            </div>
            <hr className=" my-4" />
            <div className="flex gap-4">
              <div className="w-24 ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full ml-2"
                  src="/breakdown/icons/diary.svg"
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-xl tracking-tighter">
                  Learn what makes a successful profile
                </h4>
                <p className="text-lg tracking-tighter">
                  {" "}
                  Discover the do is and do not is to ensure you are always on
                  the right track.
                </p>
              </div>
            </div>
            <hr className=" my-4" />

            <div className="flex gap-4">
              <div className="w-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full"
                  src="/breakdown/icons/profile.svg"
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-xl tracking-tighter">
                  Create your seller profile
                </h4>
                <p className="text-lg tracking-tighter">
                  {" "}
                  App your profile picture, description, and professional
                  information.
                </p>
              </div>
            </div>
            <hr className=" my-4" />
            <div className="flex gap-4">
              <div className="w-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full ml-2"
                  src="/breakdown/icons/astronomy-document.svg"
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-xl tracking-tighter">Publish your Gig</h4>
                <p className="text-lg tracking-tighter">
                  {" "}
                  Create a Gig of the service you are offering and start selling
                  instantly
                </p>
              </div>
            </div>
            <hr className=" my-4" />

            <button className="text-lg bg-green-600 hover:bg-green-700 transition-all duration-500 px-10 py-2 text-white font-semibold rounded-md my-4">
              Continue
            </button>
          </div>
          <div className="flex justify-center w-full">
            <iframe
              className="w-full"
              height="440"
              src="https://www.youtube.com/embed/77g4KA9WQL4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
        </div>
    );
};

export default BreakdownFirst;
