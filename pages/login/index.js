import Link from "next/link";
import React from "react";

const login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="absolute w-full h-screen top-0 bg-[url(https://i.ibb.co/ZmNnL4k/x4esim9lgly41.webp)] bg-cover">
      <div className="absolute top-0 w-full h-full "></div>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative bg-gray-100 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">Sign in with</h6>
                </div>
                <div className="btn-wrapper text-center">
                  {/* sign in with google and github */}
                  <button
                    className="bg-transparent active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-2 ring-sky-100 ring-1  inline-flex items-center hover:scale-75  duration-500"
                    type="button"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-8" src="https://i.ibb.co/zF4kkP8/download-1-removebg-preview.png" alt="" />
                  </button>
                  <button
                    className="bg-transparent active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ring-1 ring-sky-100 hover:scale-75  duration-500 inline-flex items-center "
                    type="button"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-8" src="https://i.ibb.co/cCLf41q/download-removebg-preview.png" alt="" />
                  </button>
                </div>

                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form action="#" onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="px-3 py-3 w-full text-base focus:border shadow-inner shadow-gray-100 rounded-lg  border-gray-300  focus:outline-none focus:border-green-200"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      className="px-3 py-3 w-full text-base focus:border shadow-inner shadow-gray-100  border-gray-300  focus:outline-none focus:border-green-200 rounded-lg"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input id="customCheckLogin" type="checkbox" className="form-checkbox text-gray-800 ml-1 w-5 h-5" />
                      <span className="ml-2 text-sm font-semibold text-gray-700">Remember me</span>
                    </label>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                      type="button"
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="flex flex-wrap mt-6">
                    <div className="w-1/2">
                      <Link href="/">
                        <a className="text-blue-500">
                          <small>Forgot password?</small>
                        </a>
                      </Link>
                    </div>
                    <div className="w-1/2 text-right">
                      <Link href="/register">
                        <a className="text-blue-500">
                          <small>Create new account?</small>
                        </a>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default login;
