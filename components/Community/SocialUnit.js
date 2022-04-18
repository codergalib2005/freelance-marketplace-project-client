import React from "react";

const SocialUnit = () => {
  return (
    <div className="container mx-auto px-8 md:px-8 lg:px-8 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
        <div className="">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/community/social .png" alt="" />
        </div>
        <div className="">
          <div>
            <h4 className="text-lg tracking-[.30rem] text-red-600 font-bold">
              WHY CHOOSE US
            </h4>
            <h4 className="text-5xl text-indigo-900 font-bold tracking-tighter">
              A community is a <br /> social unit
            </h4>
            <h4 className="text-base opacity-50 my-6">
              in virtual space through communication platform. Durable relations
              that extend beyond immediate genealogical ties also define a sense
              of community.
            </h4>
          </div>
          <div className=" inline-block w-96 rounded-md bg-yellow-300">
            <div className="flex items-start justify-center px-4   gap-4 ">
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="pt-6" src="/community/connection.svg" alt="" />
              </div>
              <div className="">
                <h4 className="text-2xl my-3">Projected community relations</h4>
                <h4 className="text-base opacity-50 my-6">
                  This is where a community is self-consciously treated as am
                  entity as a projected and re-created.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialUnit;
