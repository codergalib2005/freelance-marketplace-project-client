import React from "react";
import { useForm } from "react-hook-form";

const Resume_form = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div></div>
      <h4 className="text-center font-medium text-2xl my-6 border-b-2 border-gray-500 pb-6">
        {" "}
        Submit A Resume
      </h4>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[80%] mx-auto sm:mx-auto">
            <div className="mx-auto">
              <div className="md:flex mt-4  ">
                <p className="must text-sky-600 md:w-[20%]  ">First Name</p>
                <input
                  className="border-[1px] shadow-md px-2 py-1 border-sky-500 outline-pink-500 w-[100%] md:w-[80%]  "
                  {...register("firstName")}
                  required
                  type="text"
                />
              </div>
            </div>
            <div className="md:flex mt-4">
              <p className="must text-sky-600 md:w-[20%]  ">last Name</p>
              <input
                className="border-[1px] shadow-md px-2 py-1 border-sky-500 outline-pink-500 w-[100%] md:w-[80%]  "
                {...register("lastName")}
                required
                type="text"
              />
            </div>
            <div className="md:flex mt-4">
              <p className="must text-sky-600 md:w-[20%]  ">Email</p>
              <input
                className="border-[1px] shadow-md px-2 py-1 border-sky-500 outline-pink-500 w-[100%] md:w-[80%] "
                {...register("email")}
                required
                type="text"
              />
            </div>
            <div className="md:flex mt-4">
              <p className="must text-sky-600 md:w-[20%]  ">Phone</p>
              <input
                className="border-[1px] shadow-md px-2 py-1 border-sky-500 outline-pink-500 w-[100%] md:w-[80%]"
                {...register("phone")}
                required
                type="number"
              />
            </div>
            <div className="md:flex gap-8">
              <div className="md:flex mt-4 md:w-[50%]">
                <p className="must text-sky-600 w-[41%] ">Address</p>
                <input
                  className="border-[1px] shadow-md px-2 py-1 border-sky-500 outline-pink-500 w-[100%] md:w-[59%] "
                  {...register("address")}
                  required
                  type="text"
                />
              </div>
              <div className="md:flex mt-4 md:w-[50%]">
                <p className="must text-sky-600 md:w-[20%] ">Zip </p>
                <input
                  className="border-[1px] shadow-md px-2 py-1 border-sky-500 outline-pink-500 w-[100%] md:w-[80%]  "
                  {...register("zip")}
                  required
                  type="text"
                />
              </div>
            </div>
            <div className="md:flex gap-8">
              <div className="md:flex mt-4 md:w-[50%]">
                <p className="must text-sky-600  md:w-[41%] ">City</p>
                <input
                  className="border-[1px] shadow-md px-2 py-1 border-sky-500 outline-pink-500 w-[100%] md:w-[59%]  "
                  {...register("city")}
                  required
                  type="text"
                />
              </div>
              <div className="md:flex mt-4 md:w-[50%]">
                <label className="must text-sky-600 w-[100%] md:w-[20%]">Country</label>
                <input
                  className="border-[1px] shadow-md px-2 py-1 border-sky-500 outline-pink-500 w-[100%] md:w-[80%] "
                  {...register("country")}
                  required
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="w-[80%]  mx-auto my-20">
            <div className="md:flex gap-8  ">
              <p className="text-xl text-pink-300 md:w-[20%]">
                Linkedin Profile Link
              </p>
              <input
                className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 w-[100%] md:w-[80%] "
                {...register("linkedinLink")}
                type="text"
              />
            </div>

            <div className="md:flex gap-8 mt-4">
              <p className="text-xl text-pink-300  md:w-[20%] must">
                Github Profile Link
              </p>
              <input
                className="border-[1px] shadow-md mt-2 w-[100%] md:w-[80%] border-sky-500 outline-pink-500   "
                {...register("githubLink")}
                type="text"
                required
              />
            </div>

            <div className="md:flex gap-8 mt-4 ">
              <p className="text-xl text-pink-300 md:w-[20%] must">
                Portfolio Link
              </p>
              <input
                className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 w-[100%] md:w-[80%]  "
                {...register("portfolioLink")}
                type="text"
              />
            </div>

           <div className="my-14">
           <div className=" mt-4">
              <p className="text-xl text-pink-300  must">
                Have you worked for our team before?
              </p>
              <select
                className="border-[1px] shadow-md mt-2 py-1 border-sky-500 outline-pink-500 w-[100%] "
                {...register("familiar")}
                required
                type="text"
              >
                <option defaultValue disabled>
                  --select--
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

           
              <div className="mt-4">
                <p className="text-xl text-pink-300  must">
                  If referred, Please provide the name to your referred.
                </p>
                <input
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 w-[100%] "
                  {...register("referredName")}
                  required
                  type="text"
                />
              
            </div>
           </div>
            {/* <div className=" flex justify-center my-6">
              <div className="md:-ml-12">
                <p className="must">What is your salary expectation?</p>
                <input
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 md:w-96 md:ml-[56px] ml-[52px]  "
                  {...register("salaryExpect")}
                  required
                  type="text"
                />
              </div>
            </div> */}

            <div className="text-center  ">
              <p className="text-center text-xl ">
                Any information you provide will kept confidential and will only
                <br /> be reported in aggregate form your employment Equity
                purposes.
                <br /> In other words, the reported data will not contain and
                personal information.
              </p>
            </div>
            <div className=" flex justify-center my-6">
              <div className="md:-ml-12">
                <p className="must">What is your Gender?(select one)</p>
                <div className="md:text-start">
                  <div>
                    <input
                      className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                      {...register("gender")}
                      value="Male"
                      type="radio"
                    />
                    <label className="ml-2">Male</label>
                  </div>
                  <div>
                    <input
                      className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                      {...register("gender")}
                      value="Female"
                      type="radio"
                    />
                    <label className="ml-2">Female</label>
                  </div>
                  <div>
                    <input
                      className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                      {...register("gender")}
                      value="Non-binary"
                      type="radio"
                    />
                    <label className="ml-2">Non-binary</label>
                  </div>
                </div>
                <div>
                  <input
                    className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                    {...register("gender")}
                    value="Decline to disclose"
                    type="radio"
                  />
                  <label className="ml-2">Decline to disclose</label>
                </div>
              </div>
            </div>
            <div className=" flex justify-center my-6">
              <div className="md:-ml-12">
                <p className="must">CV/Resume</p>
                <textarea
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 md:w-96 md:ml-[56px] ml-[52px]  "
                  {...register("cv")}
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center my-6">
            <input
              className="text-white hover:text-sky-600 bg-sky-600 hover:bg-transparent  border-2 border-sky-600 active:bg-indigo-700  px-8 py-1 "
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resume_form;
4;
