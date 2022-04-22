import React from "react";
import { useForm } from "react-hook-form";
import DeactiveAccount from "./DeactiveAccount";

const UpdateProfile = () => {
  const { register, handleSubmit } = useForm();
  const updateStatus = (data) => {
    console.log(data);
  };
  return (
    <>
      <p className="text-base font-extralight">Need to update your public profile? <span className="text-pink-500 hover:underline hover:cursor-pointer">Go to My Profile</span></p>
      <hr className="border-2 border-blue-700 w-full" />
      <hr className="border-2 border-blue-700 w-full" />
      <div>
        <form onSubmit={handleSubmit(updateStatus)}  >
          <div className="p-2 flex space-x-6">
            <p className="text-sm   w-2/6">Full Name* </p>{" "}
            <input
              className="border-[1px]  text-sm  bg-indigo-100 rounded-md shadow-md px-2 py-[3px] border-blue-700 outline-[1px] outline-blue-700"
              type="text"
              {...register("name")}
              placeholder="Your Full Name"
              required
            />
          </div>
          <div className="p-2 flex space-x-6">
            <p className="w-2/6 text-sm  ">Email*</p>{" "}
            <input
              className="border-[1px] rounded-md text-sm  bg-indigo-100 shadow-md px-2 py-[3px] border-blue-700 outline-[1px] outline-blue-700"
              type="email"
              {...register("email")}
              placeholder="Email"
              required
            />
          </div>
          <div className="p-2 flex space-x-6">
            <div className="w-2/6">
              <p>
                ONLINE STATUS <br />
                <small>
                  When online, your Gigs are visible under <br /> the Online
                  search filter.
                </small>
              </p>
            </div>
            <select
              {...register("status")}
              className="border-[1px] rounded-md shadow-md px-2 py-[3px] border-blue-700 outline-[1px] outline-blue-700 form_label h-2/4 text-sm bg-indigo-100 "
            >
              <option disabled selected>GO OFFLINE FOR..</option>
              <option value="1 hour">1 HOUR</option>
              <option value="1 day">1 DAY</option>
              <option value="1 week">1 WEEK</option>
              <option value="forever">FOREVER</option>
            </select>
          </div>
          <div>
            <input
              className="rounded bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-[2px]"
              color="primary"
              type="submit"
              value="Save Changes"
            />
          </div>
        </form>
        <DeactiveAccount />
      </div>
    </>
  );
};

export default UpdateProfile;
