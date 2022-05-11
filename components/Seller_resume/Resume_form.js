import { placeholder } from "@babel/types";
import React from "react";
import { useForm } from "react-hook-form";

const Resume_form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h4 className="text-center font-medium text-2xl my-6 border-b-2 border-gray-500 pb-6">
        {" "}
        Submit A Resume
      </h4>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center">
            <div className=" md:text-justify">
              <div className="md:flex mt-4">
                <label className="must text-sky-600 ">First Name</label>
                <input
                  className="border-[1px] shadow-md  border-sky-500 outline-pink-500 md:w-96 md:ml-[28px] ml-[24px]  "
                  {...register("firstName")}
                  required
                  type="text"
                />
              </div>
              <div className="md:flex mt-4">
                <label className="must text-sky-600 ">last Name</label>
                <input
                  className="border-[1px] shadow-md  border-sky-500 outline-pink-500 md:w-96 md:ml-[33px] ml-[18px]    "
                  {...register("lastName")}
                  required
                  type="text"
                />
              </div>
              <div className="flex mt-4">
                <label className="must text-sky-600 ">Email</label>
                <input
                  className="border-[1px] shadow-md  border-sky-500 outline-pink-500 md:w-96 md:ml-[61px] ml-[18px]  "
                  {...register("email")}
                  required
                  type="text"
                />
              </div>
              <div className="flex mt-4">
                <label className="must text-sky-600 ">Phone</label>
                <input
                  className="border-[1px] shadow-md  border-sky-500 outline-pink-500 md:w-96 md:ml-[56px] ml-[18px]  "
                  {...register("phone")}
                  required
                  type="number"
                />
              </div>
            </div>
          </div>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Resume_form;
4;
