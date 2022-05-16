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
const localJobs = [
  {
    title: "The Shawshank Redemption",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
  {
    title: "The Shawshank Redemption",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
  {
    title: "The Shawshank Redemption",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
  {
    title: "The Shawshank Redemption",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
  {
    title: "The Shawshank Redemption",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
  {
    title: "The Shawshank Redemption",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
  {
    title: "The Shawshank Redemption",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
  {
    title: "The Shawshank Redemption",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
  {
    title: "The Shawshank Redemption",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
  {
    title: "The Shawshank Redemption",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
  {
    title: "The Shawshank Redemption",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
  {
    title: "The Shawshank Redemption",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
  {
    title: "The Shawshank Redemption",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
  {
    title: "The Shawshank Redemption",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
  {
    title: "The Shawshank Redemption",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
  {
    title: "Al Amin Jobs",
    desctiption:
      "Two imprisoned, innocent, and very close friends find a way to escape from the prison.",
    logo: "https://corporate.bdjobs.com/logos/81446_0.jpg",
    date: "1994",
    language: "English",
    country: "USA",
    _id: "23jkj343kf",
  },
];
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
  const [jobs, setJobs] = useState(localJobs);
  const [preview, setPreview] = useState();
  const [column, setColumn] = useState(4);

  const [searchTerm, setSearchTerm] = useState("");

  // GET ALL JOBS FROM HERE
  // useEffect(()=>{
  //     const getAllJobs = async () => {
  //          const res = await axios.get(jobs)
  //          console.log(res);
  //     }
  //     getAllJobs()
  // },[])

  return (
    <div>
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
                      onChange={event => (setSearchTerm(event.target.value))}
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
                          className={`text-2xl w-10 h-10 shadow-md bg-white text-gray-900 flex items-center justify-center hover:shadow-xl ${column === btn.number ? "" : "shadow-current"
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
                className={`grid grid-cols-1 sm:grid-cols-${column - 2
                  } md:grid-cols-${column - 1} lg:grid-cols-${column} gap-4`}
              >
                {jobs.filter(value => {
                  if (searchTerm === "") {
                    return value;
                  } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return value;
                  }
                }).map((job, i) => (
                  <div
                    onClick={() => setPreview(job)}
                    key={i}
                    className={`shadow-lg hover:shadow-xl p-4 rounded-md`}
                  >
                    <div>
                      <img className="max-w-[120px]" src={job?.logo} alt="" />
                    </div>
                    <div>
                      <h1 className="text-xl font-medium py-1 color-[#111827]">
                        {job.title}
                      </h1>
                      <p className="text-gray-500 text-base font-medium">
                        {job?.desctiption?.slice(0, 100)}
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
          <div>
            <button onClick={() => setPreview(null)}>Back</button>
            <h1 className="text-3xl">{preview?.title}</h1>
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
