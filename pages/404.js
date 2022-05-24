/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();
  const cry = "Awww...Don't Cry.";
  const error = "It's just a 404 error.";
  const look = "What you are looking for may have been misplaced";
  const memory = "in long-term memory.";
  const handleBack = () => {
    router.push("/");
  };
  return (
    <div>
      <div className="container px-4 mx-auto">
        <div className="grid gap-4 items-center grid-cols-1 md:grid-cols-2 min-h-screen">
          <div>
            <img
              src="/found/cry.gif"
              className="shadow-xl rounded-lg"
              alt="Not Found Image"
            />
          </div>
          <div>
            <h1 className="text-3xl font-medium text-gray-800 text-center">
              {cry}
            </h1>
            <h2 className="text-2xl font-medium text-gray-800 text-center">
              {error}
            </h2>
            <p className="text-lg font-medium text-gray-800 text-center">
              {look}
            </p>
            <p className="text-lg font-medium text-gray-800 text-center">
              {memory}
            </p>
            <button
              className="text-xl font-medium py-1 px-4 bg-red-400 rounded-md "
              onClick={handleBack}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
// Complete not found page
