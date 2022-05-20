/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import HeaderTop from "../../components/Shared/HeaderTop";
import { notification } from "antd";
import axios from "axios";
const JobCreate = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const body = new Object();
    // Responsibilities
    let responsibilities = new Array();
    responsibilities.push(data.responsibility1);
    responsibilities.push(data.responsibility2);
    responsibilities.push(data.responsibility3);
    body.responsibilities = responsibilities;
    // Requirements
    let requirements = new Array();
    requirements.push(data.requirement1);
    requirements.push(data.requirement2);
    requirements.push(data.requirement3);
    requirements.push(data.requirement4);
    requirements.push(data.requirement5);
    requirements.push(data.requirement6);
    requirements.push(data.requirement7);
    requirements.push(data.requirement8);
    body.requirements = requirements;
    // Qualifications
    let qualifications = new Array();
    qualifications.push(data.qualification1);
    qualifications.push(data.qualification2);
    qualifications.push(data.qualification3);
    qualifications.push(data.qualification4);
    qualifications.push(data.qualification5);
    body.qualifications = qualifications;
    // Technologies
    let technologies = new Array();
    technologies.push(data.technology1);
    technologies.push(data.technology2);
    technologies.push(data.technology3);
    technologies.push(data.technology4);
    technologies.push(data.technology5);
    technologies.push(data.technology6);
    body.technologies = technologies;
    body.companyDescription = data.companyDescription;
    body.companyName = data.companyName;
    body.email = data.email;
    body.firstName = data.firstName;
    body.imgUrl = data.imgUrl;
    body.jobTtile = data.jobTtile;
    body.jobType = data.jobType;
    body.lastName = data.lastName;
    body.role = data.role;
    body.salary = data.salary;
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/jobs/jobs`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        notification.success({
          message: "Success",
          description: "Jobs Created Successfully!",
          placement: "top",
          duration: 2,
          style: {
            width: 300,
            //   marginLeft: "calc(50% - 150px)",
            //   marginTop: "calc(50vh - 100px)",
            borderBottom: "6px solid #3a3",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
          },
        });
      })
      .catch(() => {
        notification.error({
          message: "Error",
          description: "Jobs Not Created!",
          placement: "top",
          duration: 2,
          style: {
            width: 300,
            //   marginLeft: "calc(50% - 150px)",
            //   marginTop: "calc(50vh - 100px)",
            borderBottom: "6px solid #e73a3b",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
          },
        });
      });
  };
  return (
    <>
      <HeaderTop />
      <Header />
      <div className="profile_banner2">
        <div className="container mx-auto content_profile_banner">
          <div>
            <h2 className=" content_1 mb-5 text-white font-bold uppercase">
              Create A Job Post
            </h2>
            <p className="content_2 text-white bold ">
              <i>
                Get Results for Us Free Ads Posting Sites. Find Quick Results
                from Multiple Sources. Search for Us Free Ads Posting Sites and
                Discover Millions of Results. Simple in use. Discover us now!
                Easy Acces To Information.
              </i>
            </p>
          </div>
          <div className="w-full">
            <img
              className="img-responsive w-full"
              src="https://i.ibb.co/L6XWHB6/undraw-feeling-proud-qne1-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <form className="p-6" onSubmit={handleSubmit(onSubmit)}>
          <section
            className="my-16 rounded-lg"
            style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.1)" }}
          >
            <h2 className="text-2xl text-white py-4 text-center  font-semibold bg-[#2a3254] mb-4">
              Personal Information
            </h2>
            <div className="px-5 py-10 text-center">
              <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-3 ">
                    <h4 className="text-base inline-block font-semibold">
                      <span className="text-red-500 font-bold">*</span>First
                      Name:
                    </h4>
                  </div>
                  <div className="col-span-9 ">
                    <input
                      style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                      type="text"
                      className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                      {...register("firstName")}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-2 ">
                      <h4 className="text-base inline-block font-semibold">
                        <span className="text-red-500 font-bold">*</span>Role:
                      </h4>
                    </div>
                    <div className="col-span-10 ">
                      <input
                        style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                        type="text"
                        className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                        {...register("role")}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-5">
                <div>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-3 ">
                      <h4 className="text-base inline-block font-semibold">
                        <span className="text-red-500 font-bold">*</span>Last
                        Name:
                      </h4>
                    </div>
                    <div className="col-span-9 ">
                      <input
                        style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                        type="text"
                        className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                        {...register("lastName")}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-2 ">
                      <h4 className="text-base inline-block font-semibold">
                        <span className="text-red-500 font-bold">*</span>Email:
                      </h4>
                    </div>
                    <div className="col-span-10 ">
                      <input
                        style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                        type="text"
                        className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                        {...register("email")}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="my-16 rounded-lg"
            style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.1)" }}
          >
            <h2 className="text-2xl text-white py-4 text-center  font-semibold bg-[#6787fe] mb-4">
              {" "}
              Job Description{" "}
            </h2>
            <div className="px-5 pt-10 text-center">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    {" "}
                    <span className="text-red-500 font-bold">*</span>Job Title:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("jobTtile")}
                    required
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    {" "}
                    <span className="text-red-500 font-bold">*</span>Job Type:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <select
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("jobType")}
                  >
                    <option value=""></option>
                    <option value="Programming & Tech">
                      Remote
                    </option>
                    <option value="WordPress">On Site</option>
                    <option value="Website Builders & CMS">
                      In Office
                    </option>
                    <option value="Digital Marketing">Part Time</option>
                    <option value="Video & Animation">Full Time</option>
                  </select>
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>Salary:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <select
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("salary")}
                  >
                    <option value=""></option>
                    <option value="Under 15k">Under 15k</option>
                    <option value="20k - 30k">20k - 30k</option>
                    <option value="30k - 40k">30k - 40k</option>
                    <option value="40k +">40k +</option>
                  </select>
                </div>
              </div>{" "}
              <br /> <br />
            </div>
          </section>

          <section
            className="my-16 rounded-lg"
            style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.1)" }}
          >
            <h2 className="text-2xl text-white py-4 text-center  font-semibold bg-[#2a3254] mb-4">
              {" "}
              Job Information{" "}
            </h2>
            <div className="px-5 pt-10 text-center">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>Your Image
                    URL:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("imgUrl")}
                    required
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>Company
                    Name:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("companyName")}
                    required
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>Job
                    Description:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <textarea
                    rows="7"
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("companyDescription")}
                    required
                  />
                </div>
              </div>{" "}
              <br /> <br />
            </div>
          </section>

          <section
            className="my-16 rounded-lg"
            style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.1)" }}
          >
            <h2 className="text-2xl text-white py-4 text-center  font-semibold bg-[#6787fe] mb-4">
              Responsibilities
            </h2>
            <div className="px-5 pt-10 text-center">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Responsibility1:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    type="text"
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("responsibility1")}
                    required
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Responsibility2:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("responsibility2")}
                    required
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Responsibility3:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("responsibility3")}
                    required
                  />
                </div>
              </div>{" "}
              <br /> <br />
            </div>
          </section>

          <section
            className="my-16 rounded-lg"
            style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.1)" }}
          >
            <h2 className="text-2xl text-white py-4 text-center  font-semibold bg-[#2a3254] mb-4">
              Requirements
            </h2>
            <div className="px-5 pt-10 text-center">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Requirement1:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("requirement1")}
                    required
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Requirement2:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("requirement2")}
                    required
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Requirement3:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("requirement3")}
                    required
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Requirement4:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("requirement4")}
                    required
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Requirement5:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("requirement5")}
                    required
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Requirement6:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("requirement6")}
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Requirement7:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("requirement7")}
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Requirement8:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("requirement8")}
                  />
                </div>
              </div>{" "}
              <br /> <br />
            </div>
          </section>

          <section
            className="my-16 rounded-lg"
            style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.1)" }}
          >
            <h2 className="text-2xl text-white py-4 text-center  font-semibold bg-[#6787fe] mb-4">
              {" "}
              Qualifications{" "}
            </h2>
            <div className="px-5 pt-10 text-center">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Qualification1:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("qualification1")}
                    required
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Qualification2:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("qualification2")}
                    required
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Qualification3:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("qualification3")}
                    required
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Qualification4:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("qualification4")}
                  />
                </div>
              </div>{" "}
              <br /> <br />
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 ">
                  <h4 className="text-base inline-block font-semibold">
                    <span className="text-red-500 font-bold">*</span>
                    Qualification5:
                  </h4>
                </div>
                <div className="col-span-10 ">
                  <input
                    style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                    type="text"
                    className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[90%] ml-8"
                    {...register("qualification5")}
                  />
                </div>
              </div>{" "}
              <br /> <br />
            </div>
          </section>

          <section
            className="my-16 rounded-lg"
            style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.1)" }}
          >
            <h2 className="text-2xl text-white py-4 text-center  font-semibold bg-[#2a3254] mb-4">
              Technology Requirements
            </h2>
            <div className="px-5 py-10 text-center">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
                <div>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-3 ">
                      <h4 className="text-base inline-block font-semibold">
                        <span className="text-red-500 font-bold">*</span>
                        Technologies1:
                      </h4>
                    </div>
                    <div className="col-span-9 ml-3">
                      <input
                        style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                        type="text"
                        className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[80%] ml-8"
                        {...register("technology1")}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-3 ">
                      <h4 className="text-base inline-block font-semibold">
                        <span className="text-red-500 font-bold">*</span>
                        Technologies2:
                      </h4>
                    </div>
                    <div className="col-span-9 ml-3">
                      <input
                        style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                        type="text"
                        className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[80%] ml-8"
                        {...register("technology2")}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-3 ">
                      <h4 className="text-base inline-block font-semibold">
                        <span className="text-red-500 font-bold">*</span>
                        Technologies3:
                      </h4>
                    </div>
                    <div className="col-span-9 ml-3">
                      <input
                        style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                        type="text"
                        className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[80%] ml-8"
                        {...register("technology3")}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-6">
                <div>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-3 ">
                      <h4 className="text-base inline-block font-semibold">
                        <span className="text-red-500 font-bold">*</span>
                        Technologies4:
                      </h4>
                    </div>
                    <div className="col-span-9 ml-3">
                      <input
                        style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                        type="text"
                        className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[80%] ml-8"
                        {...register("technology4")}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-3 ">
                      <h4 className="text-base inline-block font-semibold">
                        <span className="text-red-500 font-bold">*</span>
                        Technologies5:
                      </h4>
                    </div>
                    <div className="col-span-9 ml-3">
                      <input
                        style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                        type="text"
                        className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[80%] ml-8"
                        {...register("technology5")}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-3 ">
                      <h4 className="text-base inline-block font-semibold">
                        <span className="text-red-500 font-bold">*</span>
                        Technologies6:
                      </h4>
                    </div>
                    <div className="col-span-9 ml-3">
                      <input
                        style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
                        type="text"
                        className="border-[2px] px-2 rounded-2 py-2 focus:outline-none rounded-md w-[80%] ml-8"
                        {...register("technology6")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="ml-auto w-52">
            <input
              className="text-white w-full bg-purple-500 px-8 text-xl py-2 rounded-md font-bold text-center"
              type="submit"
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default JobCreate;
