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
                  className="border-[1px] shadow-md  border-sky-500 outline-pink-500 md:w-96 md:ml-[33px] ml-[28px]    "
                  {...register("lastName")}
                  required
                  type="text"
                />
              </div>
              <div className="flex mt-4">
                <label className="must text-sky-600 ">Email</label>
                <input
                  className="border-[1px] shadow-md  border-sky-500 outline-pink-500 md:w-96 md:ml-[61px] ml-[56px]  "
                  {...register("email")}
                  required
                  type="text"
                />
              </div>
              <div className="flex mt-4">
                <label className="must text-sky-600 ">Phone</label>
                <input
                  className="border-[1px] shadow-md  border-sky-500 outline-pink-500 md:w-96 md:ml-[56px] ml-[52px]  "
                  {...register("phone")}
                  required
                  type="number"
                />
              </div>
            </div>
           
          </div>
          <div className=" flex justify-center md:mt-14 my-6">
             <div className="md:-ml-12">
             <p>Linkedin Profile Link</p>
              <input
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 md:w-96 md:ml-[56px] ml-[52px]  "
                  {...register("linkedinLink")}
                   
                  type="text"
                />
             </div>
            </div>
          <div className=" flex justify-center my-6">
             <div className="md:-ml-12">
             <p>Github Profile Link</p>
              <input
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 md:w-96 md:ml-[56px] ml-[52px]  "
                  {...register("githubLink")}
                   
                  type="text"
                />
             </div>
            </div>
          <div className=" flex justify-center my-6">
             <div className="md:-ml-12">
             <p>Portfolio Link</p>
              <input
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 md:w-96 md:ml-[56px] ml-[52px]  "
                  {...register("portfolioLink")}
                  type="text"
                />
             </div>
            </div>
          <div className=" flex justify-center my-6">
             <div className="md:-ml-12">
             <p className="must">Have you worked for our team before?</p>
              <select
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 md:w-96 md:ml-[56px] ml-[52px]  "
                  {...register("familiar")}
                  required
                  type="text"
                >
                  <option selected disabled >--select--</option>
                  <option>Yes</option>
                  <option>No</option>
                  </select>
             </div>
            </div>
          <div className=" flex justify-center my-6">
             <div className="md:-ml-12">
             <p className="must">If referred, Please provide the name to your referred.</p>
              <input
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 md:w-96 md:ml-[56px] ml-[52px]  "
                  {...register("referredName")}
                  required
                  type="text"
               />
             </div>
            </div>
          <div className=" flex justify-center my-6">
             <div className="md:-ml-12">
             <p className="must">What is your salary expectation?</p>
              <input
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 md:w-96 md:ml-[56px] ml-[52px]  "
                  {...register("salaryExpect")}
                  required
                  type="text"
               />
             </div>
            </div>
          
             <div className="text-center  md:ml-16">
             <p className="">Any information you provide will kept confidential  and will only  be reported  in aggregate form your employment Equity purposes. In other words, the reported data will not contain and personal information.</p>
             
            
            </div>
            <div className=" flex justify-center my-6">
             <div className="md:-ml-12">
             <p className="must">What is your Gender?(select one)</p>
              <input
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                  {...register("gender")}
                  required
                  type="radio"
               />
               <label>Male</label>
              <input
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                  {...register("gender")}
                  required
                  type="radio"
               />
               <label>Female</label>
              <input
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                  {...register("gender")}
                  required
                  type="radio"
               />
               <label>Non-binary</label>
              <input
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                  {...register("gender")}
                  required
                  type="radio"
               />
               <label>Decline to disclose</label>
             </div>
            </div>
            <div className=" flex justify-center my-6">
             <div className="md:-ml-12">
             <p className="must">CV/Resume</p>
              <textarea
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 md:w-96 md:ml-[56px] ml-[52px]  "
                  {...register("salaryExpect")}
                  required
                  type="text"
               />
             </div>
            </div>

        <div className="flex justify-center my-6">
        <input className="text-white hover:text-sky-600 bg-sky-600 hover:bg-transparent  border-2 border-sky-600 active:bg-indigo-700  px-8 py-1 " type="submit" />
        </div>
        </form>
      </div>
    </div>
  );
};

export default Resume_form;
4;
