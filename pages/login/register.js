import React from "react";
import Link from "next/link";

const register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="absolute w-full top-0">
      <div className="absolute top-0 w-full h-full"></div>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-5/12 px-4 pt-32">
            <div className="relative bg-gradient-to-r from-sky-300 to-lime-300 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">Sign up with</h6>
                </div>
                <div className="btn-wrapper text-center">
                  {/*  eslint-disable-next-line @next/next/no-img-element */}
                  <img className="block mx-auto" src="https://i.ibb.co/Ssxh3cj/logo-white.png" alt="" />
                </div>

                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form action="#" onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="px-3 py-3 w-full text-base focus:border shadow-inner shadow-gray-100 rounded-lg  border-gray-300  focus:outline-none focus:border-green-200"
                      placeholder="Name"
                    />
                  </div>
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
                      name="password1"
                      type="password"
                      className="px-3 py-3 w-full text-base focus:border shadow-inner shadow-gray-100  border-gray-300  focus:outline-none focus:border-green-200 rounded-lg"
                      placeholder="Password"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      Confirm Password
                    </label>
                    <input
                      name="password2"
                      type="password"
                      className="px-3 py-3 w-full text-base focus:border shadow-inner shadow-gray-100  border-gray-300  focus:outline-none focus:border-green-200 rounded-lg"
                      placeholder="Re-type password"
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
                      Sign Up
                    </button>
                  </div>
                  <div className="flex justify-between items-center flex-wrap mt-6">
                    <div>
                      <Link href="/">
                        <a className="text-blue-500">
                          <small>Forgot password?</small>
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Link href="/login">
                        <a className="text-blue-500">
                          <small>Already have an account?</small>
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

export default register;
