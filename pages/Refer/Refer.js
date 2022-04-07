import React from "react";
import useAuth from "../../hooks/useAuth";

const Refer = () => {
  const { user } = useAuth();

  console.log(user);
  return (
    <div>
      <div
        className="h-[700px] "
        style={{
          backgroundImage: "url(refer/banner.jpg)",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto">
          <div className="flex justify-center  pt-12 ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-36 bg-gray-200 rounded-full h-full"
              src="refer/user.png"
              alt=""
            />
          </div>
          <div className="text-center my-6">
            <h4 className="text-4xl text-white font-semibold">
              Invite Friends & <br />
              You Both Get Up To $100
            </h4>
            <h4 className="text-lg text-white font-semibold my-4">
              Introduce your friends to the easiest way to get things done
            </h4>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mx-8 lg:mx-20">
          <div className=" md:flex lg:flex gap-4 md:justify-between lg:justify-between lg:gap-8 md:items-center lg:items-center">
            <button className="bg-orange-700 px-6 py-3 w-full rounded-md md:w-56 lg:w-56 text-white font-semibold ">
              Invite Gmail Contact
            </button>
            <h5 className="text-xl text-center">Or</h5>
            <div className="flex justify-center">
              <input
                className="appearance-none py-3 block w-full md:w-80 lg:w-96 bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                placeholder="Add Email"
              />
            </div>
            <button className="text-lg text-white bg-green-600 hover:bg-green-700 font-semibold rounded-md  py-2 px-2 w-full md:w-40 lg:w-40">
              Send
            </button>
          </div>
        </div>
        <hr className="w-full  lg:w-[65rem] " />
        <div className="mx-8 lg:mx-20">
          <div>
            <h4 className="text-xl  tracking-tighter">Your Invite Link</h4>
          <div className="md:flex lg:flex gap-8">
          <div className="flex">
            <input
              className="appearance-none py-2 border block w-full md:w-80 lg:w-96  text-gray-700 border-gray-400 rounded px-4 border-r-0 rounded-r-none leading-tight focus:outline-none "
              type="text"
            />
            <button className="appearance-none py-2 block w-24 text-gray-700 border rounded-l-none  rounded px-4  leading-tight focus:outline-none bg-gray-200 border-gray-500 focus:bg-gray-300 text-lg font-bold">
              Copy
            </button>
          </div>
          <div className="flex gap-6">
          <a><svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="88.428 12.828 107.543 207.085"><path fill="#3c5a9a" d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"/></svg></a>
          <a><svg className="inline-block" xmlns="http://www.w3.org/2000/svg"  width="30" height="30"  viewBox="0 0 16 16"><path fill="#03A9F4" d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"/></svg></a>
          </div>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Refer;
