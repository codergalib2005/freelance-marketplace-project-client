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
  const onSubmit = (data) => {
    if(data){
      reset()
      alert("Resume post successfully")
    }
  };
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
                className="border-[1px] shadow-md py-1 mt-2 border-sky-500 outline-pink-500 w-[100%] md:w-[80%] "
          <div className=" flex justify-center md:mt-14 my-6">
            <div className="md:-ml-12">
              <p>Linkedin Profile Link</p>
              <input
                className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 md:w-96 md:ml-[56px] ml-[52px]  "
                {...register("linkedinLink")}
                type="text"
              />
            </div>
            <div className="md:flex gap-8 mt-4">
              <p className="text-xl text-pink-300  md:w-[20%] must">
                Github Profile Link
              </p>
              <input
                className="border-[1px] shadow-md py-1 mt-2 w-[100%] md:w-[80%] border-sky-500 outline-pink-500   "
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
                className="border-[1px] shadow-md py-1 mt-2 border-sky-500 outline-pink-500 w-[100%] md:w-[80%]  "
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
           <div className="my-14">
           <div className=" mt-4">
              <p className="text-xl text-pink-300  must">
                Have you worked for our team before?
              </p>
              <select
                className="border-[1px] shadow-md mt-2 py-1 border-sky-500 outline-pink-500 w-[100%] "
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

                <option defaultValue disabled>
                <option selected disabled>

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
                  className="border-[1px] py-1 shadow-md mt-2 border-sky-500 outline-pink-500 w-[100%] "
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
              <p className="text-center text-xl text-indigo-300 ">
                Any information you provide will kept confidential and will only
                <br /> be reported in aggregate form your employment Equity
                purposes.
                <br /> In other words, the reported data will not contain and
                personal information.
              </p>
            </div>
            <div className="mt-4">
                <p className="text-xl text-pink-300  must">
                Educations
                </p>
                <textarea
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 w-[100%] "
                  {...register("education")}
                  required
                  type="text"
                />
            </div>
          <div className=" shadow-md p-8 my-8">
            <p className=" text-xl"> Skills</p>
         <div className="md:flex gap-6 ">
         <div className="mt-4 md:w-[50%]">
                <p className="text-xl text-pink-300  must">
                Company Name
                </p>
                <input
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 w-[100%] "
                  {...register("companyName")}
                  required
                  type="text"
                />
            </div>
          <div className="mt-4 md:w-[50%]">
                <p className="text-xl text-pink-300  must">
                That was the role in the company
                </p>
                <input
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 w-[100%] "
                  {...register("roleOfCompany")}
                  required
                  type="text"
                />
            </div>
         </div>
        <div className="md:flex gap-6">
        <div className="mt-4 md:w-[50%]">
                <p className="text-xl text-pink-300  must">
                Experience of Technologies
                </p>
               <div className="border-[1px] shadow-md py-1 mt-2 border-sky-500 outline-pink-500 w-[100%]">
                {/* <div className=" p-2 bg-slate-300 py-[1px] inline-block rounded-3xl ">
                <span className="">Hello</span>
                 <span className="close bg-black ml-1 text-white p-[2px] px-2 rounded-full">&times;</span>
                </div> */}
               <input
                  className="border-0 outline-none w-[100%] "
                  {...register("experience")}
                  placeholder="text here"
                  type="text"
                />
               </div>
            </div>
            <div className="mt-4 md:w-[50%]">
                <p className="text-xl text-pink-300  must">
                How many years expe do you have?
                </p>
                <input
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 w-[100%] "
                  {...register("experienceOfYears")}
                  required
                  type="number"
                />
            </div>
        </div>
          </div>
            <div className=" flex justify-center my-6">
              <div className="md:-ml-12">
                <p className="must text-xl">What is your Gender?(select one)</p>
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
                <p className="must text-xl">Are you veteran?(select one)</p>
                <div className="md:text-start">
                  <div>
                    <input
                      className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                      {...register("veteran")}
                      value="Yes"
                      type="radio"
                    />
                    <label className="ml-2">Yes</label>
                  </div>
                  <div>
                    <input
                      className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                      {...register("veteran")}
                      value="No"
                      type="radio"
                    />
                    <label className="ml-2">No</label>
                  </div>
                  <div>
                    <input
                      className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                      {...register("veteran")}
                      value="Decline to disclose"
                      type="radio"
                    />
                    <label className="ml-2">Decline to disclose</label>
                  </div>
                </div>
                
              </div>
            </div>
            <div className=" flex justify-center my-6">
              <div className="md:-ml-12">
                <p className="must text-xl">Do you Identify yourself as one the following:(select one)</p>
                <div className="md:text-start">
                  <div>
                    <input
                      className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                      {...register("region")}
                      value="Black or african american"
                      type="radio"
                    />
                    <label className="ml-2">Black or african american</label>
                  </div>
                  <div>
                    <input
                      className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                      {...register("region")}
                      value="Hispanic or Latino"
                      type="radio"
                    />
                    <label className="ml-2">Hispanic or Latino</label>
                  </div>
                  <div>
                    <input
                      className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                      {...register("region")}
                      value="Asian"
                      type="radio"
                    />
                    <label className="ml-2">Asian</label>
                  </div>
                  <div>
                    <input
                      className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                      {...register("region")}
                      value="Person of mix origin"
                      type="radio"
                    />
                    <label className="ml-2">Person of mix origin</label>
                  </div>
                  <div>
                    <input
                      className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500  md:ml-[56px] ml-[52px]  "
                      {...register("region")}
                      value="Others"
                      type="radio"
                    />
                    <label className="ml-2">Others</label>
                  </div>
                </div>
                
              </div>
            </div>  
                <p className="text-xl must">Write about your self of 150 words.</p>
                <textarea
                  className="border-[1px] shadow-md mt-2 border-sky-500 outline-pink-500 w-[100%] "
                  {...register("roleOfCompany")}
                  required
                  type="text"
                  style={{height:"7rem"}}
                />
          </div>
          <div className=" flex justify-center my-6">
            <div className="md:-ml-12">
              <p className="must">
                If referred, Please provide the name to your referred.
              </p>
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
            <p className="">
              Any information you provide will kept confidential and will only
              be reported in aggregate form your employment Equity purposes. In
              other words, the reported data will not contain and personal
              information.
            </p>
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
            <input
              className="text-white hover:text-sky-600 w-[25%] bg-sky-600 hover:bg-transparent  border-2 border-sky-600 active:bg-indigo-700  px-8 py-1 "
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
