/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import HeaderBottom from "../../components/Shared/HeaderBottom";
import HeaderTop from "../../components/Shared/HeaderTop";
import { FiColumns } from "react-icons/fi";
import { MdOutlineViewColumn, MdOutlineTableRows } from "react-icons/md";
import { GrColumns } from "react-icons/gr";
import Link from "next/link";
import { FaShareAlt } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Head from "next/head";
const buttons = [
  {
    number: 1,
    icon: <MdOutlineTableRows />,
  },
  {
    number: 2,
    icon: <FiColumns />,
  },
  {
    number: 3,
    icon: <MdOutlineViewColumn />,
  },
  {
    number: 4,
    icon: <GrColumns />,
  },
];

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [preview, setPreview] = useState();
  const [column, setColumn] = useState(4);

  const [searchTerm, setSearchTerm] = useState("");
  const Router = useRouter();

  // Click Job

  const handleClickJob = () => {
    Swal.fire({
      title: "Drop your resume Link Here",
      input: "file",
      inputAttributes: {
        autocapitalize: "off",
      },

      showCancelButton: true,
      confirmButtonText: "Apply",
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your apply has been pending",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      }
    });
  };

  // GET ALL JOBS FROM HERE
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/jobs/jobs`).then(
      (response) => {
        setJobs(response?.data?.data);
        console.log(response?.data?.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div>
      <Head>
        <title>Job Search</title>
      </Head>
      <header>
        <HeaderTop />
        <Header />
        {/* <HeaderBottom /> */}
      </header>
      <main className="min-h-[70vh]">
        {!preview && (
          <div>
            {/* Search Bar */}
            <section className="bg-[#f5f8fa] shadow-md">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-8 items-center py-2 gap-5">
                  <div className="col-span-8 sm:col-span-5">
                    <input
                      onChange={(event) => setSearchTerm(event.target.value)}
                      className="w-full text-lg font-medium text-gray-800 border border-gray-800 py-1 px-3 rounded-md"
                      type="text"
                      placeholder="Search your keyword"
                    />
                  </div>
                  <div className="hidden sm:block col-span-3 text-right">
                    <div className="job_search_buttons flex items-center justify-end gap-4">
                      {buttons.map((btn, index) => (
                        <button
                          onClick={() => setColumn(btn?.number)}
                          className={`text-2xl w-10 h-10 shadow-md bg-white text-gray-900 flex items-center justify-center hover:shadow-xl ${
                            column === btn.number ? "" : "shadow-current"
                          }`}
                          key={index}
                        >
                          {btn.icon}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Job Shower */}
            <section className="container mx-auto px-4 py-8 min-h-[60vh]">
              <div
                className={`grid grid-cols-1 sm:grid-cols-${
                  column - 2
                } md:grid-cols-${column - 1} lg:grid-cols-${column} gap-4`}
              >
                {jobs
                  ?.filter((value) => {
                    if (searchTerm === "") {
                      return value;
                    } else if (
                      value.jobTtile
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  ?.map((job, i) => (
                    <div
                      onClick={() => setPreview(job)}
                      key={i}
                      className={`shadow-lg hover:shadow-xl p-4 rounded-md cursor-pointer`}
                    >
                      <div>
                        <img
                          className="max-w-[120px]"
                          src={job?.imgUrl}
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className="text-xl font-medium py-1 color-[#111827]">
                          {job.jobTtile}
                        </h1>
                        <p className="text-gray-500 text-base font-medium">
                          {job?.companyDescription?.slice(0, 100)}
                        </p>
                        <div
                          className={`flex items-center justify-between text-lg text-[#2a3254]`}
                        >
                          <strong>{job?.country}</strong>
                          <strong>{job?.date}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </div>
        )}
        {preview && (
          <div className="bg-gray-50">
            <button
              className="py-3 px-8 bg-black text-white"
              onClick={() => setPreview(null)}
            >
              Back
            </button>
            <section
              style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)" }}
              className="container bg-white mx-auto p-8"
            >
              <div className="flex justify-between">
                <div>
                  <h1 className="text-3xl">{preview?.jobTtile}</h1>
                  <div className="flex mt-4 items-center">
                    <div>
                      <img
                        className="w-16 h-16 rounded-xl mr-3"
                        src={preview?.imgUrl}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-normal font-sans">
                        {preview?.companyName}
                      </h3>
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex mr-4 -mt-1 ">
                    <span className="mt-1 mr-2 text-xl text-gray-400 hover:text-black duration-200 cursor-pointer">
                      <BsBookmark />
                    </span>
                    <span className="text-xl text-gray-400">SAVE</span>
                  </div>
                  <i className="text-xl text-gray-400 hover:text-black duration-200 cursor-pointer">
                    <FaShareAlt />
                  </i>
                </div>
              </div>
              <div>
                <hr className="my-6 w-full" />
                <button
                  onClick={() => handleClickJob()}
                  className="bg-[#1a73e8] py-2 rounded-md px-6 text-white"
                >
                  Easy Apply
                </button>
                <button
                  onClick={() =>
                    Router.push(
                      "https://www.google.com/search?q=developers+jobs&oq=developers+jobs&aqs=chrome..69i57j0i22i30l2j0i10i22i30l2j0i22i30j0i15i22i30l2j0i10i15i22i30j0i15i22i30.5472j1j15&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwiK75yB--r3AhXk6nMBHbx7BkcQutcGKAF6BAgJEAY&sxsrf=ALiCzsZAA_EBYyCQSBkWiSP6uuUU3Y1YSg:1652942594067#htivrt=jobs&htidocid=jRihaQaAQ6UAAAAAAAAAAA%3D%3D&fpstate=tldetail"
                    )
                  }
                  className="bg-[#1a73e8] py-2 rounded-md px-6 text-white ml-3"
                >
                  Apply on {preview?.companyName}
                </button>
                <hr className="my-6 w-full" />
              </div>
              <div>
                <h2 className="text-xl ">About this job:</h2>
                <p className="p-4 text-justify">
                  {preview?.companyDescription}
                </p>
              </div>
              <div>
                <h2 className="text-xl ">Skills:</h2>
                <ul className="p-4">
                  <li className="list-disc">{preview?.technologies[0]}</li>
                  <li className="list-disc">{preview?.technologies[1]}</li>
                  <li className="list-disc">{preview?.technologies[2]}</li>
                  <li className="list-disc">{preview?.technologies[3]}</li>
                  <li className="list-disc">{preview?.technologies[4]}</li>
                  <li className="list-disc">{preview?.technologies[5]}</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl ">Qualifications:</h2>
                <ul className="p-4">
                  <li className="list-disc">{preview?.qualifications[0]}</li>
                  <li className="list-disc">{preview?.qualifications[1]}</li>
                  <li className="list-disc">{preview?.qualifications[2]}</li>
                  <li className="list-disc">{preview?.qualifications[3]}</li>
                  <li className="list-disc">{preview?.qualifications[4]}</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl ">Requirements:</h2>
                <ul className="p-4">
                  <li className="list-disc">{preview?.requirements[0]}</li>
                  <li className="list-disc">{preview?.requirements[1]}</li>
                  <li className="list-disc">{preview?.requirements[2]}</li>
                  <li className="list-disc">{preview?.requirements[3]}</li>
                  <li className="list-disc">{preview?.requirements[4]}</li>
                  <li className="list-disc">{preview?.requirements[5]}</li>
                  <li className="list-disc">{preview?.requirements[6]}</li>
                </ul>
              </div>
              <div>
                <h2 className="p-4">
                  <span className="font-bold">Salary range:</span>{" "}
                  {preview?.salary}{" "}
                </h2>
                <p className="py-4 text-justify">
                  <span className="text-red-600 font-sans font-bold">NOTE</span>
                  : If you’re interested in pursuing an engaging career working
                  on full-time freelance jobs for exclusive clients, take the
                  next step by clicking apply and filling out the short form to
                  get started.
                </p>
              </div>
            </section>
          </div>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default JobSearch;
