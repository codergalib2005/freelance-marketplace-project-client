/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Head from "next/head";
const JobProfile = () => {
  const [show, setShow] = useState("about");
  return (
    <div>
      <Head>
        <title>HR. Profile</title>
      </Head>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 ga-6">
          <div className="col-span-2 text-center bg-gray-200 border-white rounded-lg px-4 py-8 border-4 shadow-lg">
            <div className="w-40 h-40 shadow-lg border-4 border-white mx-auto overflow-hidden rounded-full">
              <img
                className="w-full max-w-full min-h-full"
                src="/Reviews.png"
                alt=""
              />
            </div>
            <div>
              <strong className="text-xl font-medium text-gray-800 my-6 block w-full">
                Web Application Developer
              </strong>
            </div>
            <div className="">
              <button
                className={`py-2 px-3 block w-full rounded-lg text-lg font-medium text-white mt-4 ${
                  show === "about" ? "bg-red-600" : "bg-blue-400"
                }`}
                onClick={() => setShow("about")}
              >
                About
              </button>
              <button
                className={`py-2 px-3 block w-full rounded-lg text-lg font-medium text-white mt-4 ${
                  show === "jobs" ? "bg-red-600" : "bg-blue-400"
                }`}
                onClick={() => setShow("jobs")}
              >
                Created Job
              </button>
            </div>
          </div>
          <div className="col-span-4 mx-4 border-4 border-white shadow-lg bg-gray-200 p-8 rounded-lg">
            {show === "about" && (
              <div>
                <div>About</div>
              </div>
            )}
            {show === "jobs" && (
              <div>
                <div>Jobs</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobProfile;
