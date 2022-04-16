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
      <label>Need to update your public profile? Go to My Profile</label>
      <hr />
      <div>
        <form onSubmit={handleSubmit(updateStatus)}>
          <div className="p-2 flex space-x-6">
            <p className="w-2/6">Full Name</p>{" "}
            <input
              className="border-2"
              type="text"
              {...register("name")}
              placeholder="Your Full Name"
            />
          </div>
          <div className="p-2 flex space-x-6">
            <p className="w-2/6">Email</p>{" "}
            <input
              className="border-2"
              type="email"
              {...register("email")}
              placeholder="Email"
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
              className="border-2 form_label h-2/4"
            >
              <option>GO OFFLINE FOR..</option>
              <option value="1 hour">1 HOUR</option>
              <option value="1 day">1 DAY</option>
              <option value="1 week">1 WEEK</option>
              <option value="forever">FOREVER</option>
            </select>
          </div>
          <div>
            <input
              className="rounded bg-blue-500 hover:bg-blue-700 text-white font-bold"
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
