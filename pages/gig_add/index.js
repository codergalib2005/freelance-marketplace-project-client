/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";

const GigCreation = () => {
  return (
    <div>
      <Header />
      <div className="mt-16 feature-font ">
        <div className="text-green-500 flex gap-4 md:gap-8 flex-col md:flex-row lg:flex-row  border-b border-t border-gray-400 py-2 text-md mt-20  pl-6 justify-start">
          <div className="flex gap-2">
            <div className=" bg-green-400 text-white h-6 w-6 rounded-full flex justify-center items-center">
              <p className="text-xs">1</p>
            </div>
            <button> Personal Info</button>
          </div>
          <div className="flex gap-2 ">
            <div className="border-2  h-6 w-6 rounded-full flex justify-center items-center">
              <p className="text-xs">2</p>
            </div>
            <button>Pofessional Info</button>
          </div>
          <div className="flex gap-2 ">
            <div className="border-2   h-6 w-6 rounded-full flex justify-center items-center">
              <p className="text-xs">3</p>
            </div>
            <button>Linekd Account</button>
          </div>
          <div className="flex gap-2 ">
            <div className="border-2   h-6 w-6 rounded-full flex justify-center items-center">
              <p className="text-xs">4</p>
            </div>
            <button>Account Security</button>
          </div>
        </div>
        {/* my info section */}
        <div className="w-10/12 mx-auto mt-6">
          <div className="w-full md:w-8/12 lg:w-6/12 mb-3">
            <h2 className="text-3xl font-bold text-gray-700">Personal Info</h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis et deserunt eligendi voluptatem eius incidunt!
            </p>
          </div>
          <hr />
          {/* details input */}
          <div className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 ">
              <div className="flex items-center">
                <p className="text-lg  font-bold text-gray-600 ">Full Name</p>
              </div>
              <div className="col-span-2 flex gap-3">
                <input
                  required
                  className="border outline-green-400 border-gray-300 px-2 w-8/12 md:w-6/12 lg:w-4/12 py-2"
                  type="text"
                  placeholder="first name"
                />
                <input
                  required
                  className="border outline-green-400 border-gray-300 px-2 w-8/12 md:w-6/12 lg:w-4/12 py-2"
                  type="text"
                  placeholder="last name"
                />
              </div>
            </div>
            <div className="my-24 md:my-36 lg:my-36">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div className="">
                  <h2 className="text-lg font-bold text-gray-600 mb-2">
                    Profile Picture
                  </h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cumque enim voluptates ad ipsum inventore. Impedit!
                  </p>
                </div>
                <div className="col-span-2 flex items-center">
                  <input required type="file" name="" id="" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div className="">
                  <h2 className="text-lg font-bold text-gray-600 mb-2">
                    Description
                  </h2>
                </div>
                <div className="col-span-2 flex items-center">
                  <textarea
                    required
                    className="outline-green-400 border border-gray-300 w-full"
                    name=""
                    id=""
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div className="">
                  <h2 className="text-lg font-bold text-gray-600 mb-2">
                    Languages
                  </h2>
                </div>
                <div className="col-span-2 gap-4 ">
                  <div className="flex w-full gap-4">
                    <input
                      required
                      className="border outline-green-400 border-gray-300 px-2 w-8/12 md:w-6/12 lg:w-6/12 py-2"
                      type="text"
                      placeholder="language"
                    />
                    <input
                      required
                      className="border outline-green-400 border-gray-300 px-2 w-8/12 md:w-6/12 lg:w-6/12 py-2"
                      type="text"
                      placeholder="level"
                    />
                  </div>
                  <div className="flex w-full gap-4 mt-4">
                    <input
                      className="border outline-green-400 border-gray-300 px-2 w-8/12 md:w-6/12 lg:w-6/12 py-2"
                      type="text"
                      placeholder="language (optional)"
                    />
                    <input
                      className="border outline-green-400 border-gray-300 px-2 w-8/12 md:w-6/12 lg:w-6/12 py-2"
                      type="text"
                      placeholder="level (optional)"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button className="bg-green-500 text-white px-8 py-2 rounded-sm">
                Continue
              </button>
            </div>
            {/*  */}
          </div>
          {/* personal info part */}
          <div className="mt-12">
            {" "}
            <div className="w-full md:w-6/12 lg:w-6/12   mb-3">
              <h2 className="text-3xl font-bold text-gray-700">
                Professional Info
              </h2>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis et deserunt eligendi voluptatem eius incidunt!
              </p>
            </div>
            <hr />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-8">
              <div className="flex items-center">
                <p className="text-lg  font-bold text-gray-600 ">
                  Your Occupation
                </p>
              </div>
              <div className="col-span-2 flex gap-6 flex-col md:flex-row lg:flex-row">
                <input
                  required
                  className="border outline-green-400 border-gray-300 px-2 w-full md:w-6/12 lg:w-6/12 py-2"
                  type="text"
                  placeholder="Ex-(programming tech)"
                />
                <div className="flex gap-4">
                  <div className="flex gap-2 items-center">
                    <input
                      placeholder="From"
                      className="outline-green-400 border border-gray-300  py-2 px-4 w-10/12 mx-auto"
                      type="text"
                    />
                  </div>
                  <div className="flex gap-2 items-center ">
                    <input
                      placeholder="To"
                      className="outline-green-400 border border-gray-300 py-2 px-4 w-10/12 mx-auto"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-24">
              <div className="flex items-center">
                <p className="text-lg  font-bold text-gray-600 ">Skills</p>
              </div>
              <div className="col-span-2 flex gap-6 flex-col md:flex-row lg:flex-row">
                <div className="w-full md:w-6/12 lg:w-6/12">
                  <input
                    type="text"
                    className="outline-green-400 w-full md:w-10/12 lg:w-10/12 border py-2 px-2"
                    placeholder="Add Skill"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    className="outline-green-400  border py-2 w-full px-2"
                    placeholder="Ex-Adobe"
                  />
                  <input
                    type="submit"
                    value="Add"
                    className=" py-2 px-8 rounded bg-green-500 text-white"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-24">
              <div className="flex items-center">
                <p className="text-lg  font-bold text-gray-600 ">
                  Certification
                </p>
              </div>
              <div className="col-span-2 flex gap-6 flex-col md:flex-row lg:flex-row">
                <div className="w-full md:w-6/12 lg:w-6/12">
                  <input
                    type="text"
                    className="outline-green-400 w-full md:w-10/12 lg:w-10/12 border py-2 px-2"
                    placeholder="Certification or Award"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    className="outline-green-400  border py-2 w-full px-2"
                    placeholder="Certificate From"
                  />
                  <input
                    type="submit"
                    value="Add"
                    className=" py-2 px-8 rounded bg-green-500 text-white"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-24">
              <div className="flex items-center">
                <p className="text-lg  font-bold text-gray-600 ">
                  Personal Website
                </p>
              </div>
              <div className="col-span-2 flex gap-6 flex-col md:flex-row lg:flex-row">
                <input
                  type="text"
                  className="border outline-green-400  border-gray-300 px-2 w-full py-2"
                  placeholder="Provide your website url"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button className="bg-green-500 text-white px-8 py-2 rounded-sm">
                Continue
              </button>
            </div>
            {/*  */}
          </div>
          {/* linked account */}
          <div className="w-full md:w-6/12 lg:w-6/12 mt-12  mb-3">
            <h2 className="text-3xl font-bold text-gray-700">
              Linked Accounts
            </h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis et deserunt eligendi voluptatem eius incidunt!
            </p>
          </div>
          <hr />
          <div className="mt-8">
            <h4 className="text-base font-semibold text-gray-600 mb-8">
              Your Social Presence
            </h4>
            <div className="flex justify-between text-gray-600 mt-4">
              <div className="flex items-center gap-2">
                <img
                  className="w-6 h-6"
                  src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                />
                <p className="font-medium">Google</p>
              </div>

              <button className="py-3 px-8 bg-green-100 rounded shadow-lg border-t-2 border-gray-100">
                Connected
              </button>
            </div>
            <div className="flex justify-between items-center text-gray-600 mt-4">
              <div className="flex items-center gap-2">
                <img
                  className="w-6 h-6"
                  src="https://img.icons8.com/color/48/000000/facebook-new.png"
                />
                <p className="font-medium">Facebook</p>
              </div>
              <button className="py-3 px-8 rounded shadow-lg border-t-2 border-gray-100">
                Connect
              </button>
            </div>
            <div className="flex justify-between text-gray-600 mt-4">
              <div className="flex items-center gap-2">
                <img
                  className="w-6 h-6"
                  src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                />
                <p className="font-medium">Twitter</p>
              </div>
              <button className="py-3 px-8 rounded shadow-lg border-t-2 border-gray-100">
                Connect
              </button>
            </div>
          </div>
          <div className="mt-16">
            <h4 className="text-base font-semibold text-gray-600 mb-8">
              Your Professional Presence
            </h4>
            <div className="flex justify-between text-gray-600 mt-4">
              <div className="flex items-center gap-2">
                <img
                  className="w-6 h-6"
                  src="https://img.icons8.com/fluency/48/000000/stackoverflow.png"
                />
                <p className="font-medium">Stack Overflow</p>
              </div>

              <button className="py-3 px-8 rounded shadow-lg border-t-2 border-gray-100">
                Connect
              </button>
            </div>
            <div className="flex justify-between items-center text-gray-600 mt-4">
              <div className="flex items-center gap-2">
                <img
                  className="w-6 h-6"
                  src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                />
                <p className="font-medium">Github</p>
              </div>
              <button className="py-3 px-8 rounded shadow-lg border-t-2 border-gray-100">
                Connect
              </button>
            </div>
            <div className="mt-12 flex justify-end">
              <button className="bg-green-500 text-white px-8 py-2 rounded-sm">
                Continue
              </button>
            </div>
          </div>
          {/*  */}
          {/* account security */}
          <div className="w-full md:w-6/12 lg:w-6/12 mt-12  mb-3">
            <h2 className="text-3xl font-bold text-gray-700">
              Account Security
            </h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis et deserunt eligendi voluptatem eius incidunt!
            </p>
          </div>
          <hr />
          <div className="flex justify-between text-gray-600 mt-4">
            <div className="flex items-center gap-2">
              <img
                className="w-6 h-6 "
                src="https://img.icons8.com/ios-glyphs/30/000000/new-post.png"
              />
              <p className="font-medium">Email</p>
            </div>
            <button className="py-3 px-8 md:px-12 lg:px-12  bg-green-100 rounded shadow-lg border-2 border-gray-200">
              Verified
            </button>
          </div>
          <div className="flex justify-between text-gray-600 mt-8">
            <div className="flex items-start gap-2">
              <img
                className="w-6 h-6"
                src="https://img.icons8.com/ios-filled/50/000000/phone.png"
              />
              <div className="">
                <p className="font-medium ">Phone Number</p>
                <p className="text-gray-500 text-xs">we will never share it</p>
              </div>
            </div>
            <button className="py-3 px-8 md:px-12 lg:px-12  rounded shadow-lg border-2 border-gray-200">
              Add now
            </button>
          </div>
          <div className="mt-12 flex justify-end">
            <button className="bg-green-500 text-white px-8 py-3 rounded-sm">
              Continue & Create Your First Gig
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GigCreation;
