/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CgAlignBottom } from "react-icons/cg";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts";
import useAuth from "../../hooks/useAuth";

const MainDashboard = () => {
  const { isOpen } = useAuth()
  const pdata = [
    {
      name: "Python",
      student: 13,
      fees: 10,
    },
    {
      name: "Javascript",
      student: 15,
      fees: 12,
    },
    {
      name: "PHP",
      student: 5,
      fees: 10,
    },
    {
      name: "Java",
      student: 10,
      fees: 5,
    },
    {
      name: "C#",
      student: 9,
      fees: 4,
    },
    {
      name: "C++",
      student: 10,
      fees: 8,
    },
  ];
  return (
    <section className={`bg-[#F3F4F6] h-full ${isOpen ? "pl-[200px]" : "pl-[45px]"}`}>
      <div className="bg-[#00073d]  px-4">
        <div className="flex justify-between items-center">
          <div>
            <img className="" src="https://i.ibb.co/8Pvs63n/download-removebg-preview.png" alt="" />
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <span className="relative inline-block ml-8 mt-3 cursor-pointer">
                <svg className="w-6 h-6 text-xl text-gray-50 fill-current" viewBox="0 0 20 20">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
                <span className="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
              </span>
            </div>
            <div>
              <img className="cursor-pointer" src="https://i.ibb.co/bzQpNYJ/user-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-16 md:mx-12 sm:mx-10 py-24">
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
          <div className="bg-white p-8 rounded-md flex items-center justify-around">
            <div>
              <h2 className="text-2xl font-sans mb-4 font-semibold text-gray-600">Active Seller</h2>
              <h2 className="text-5xl font-sans font-bold">2099+</h2>
              <div className="flex mt-4">
                <div>
                  <CgAlignBottom className="text-2xl text-green-500 mx-1 mt-1" />
                </div>
                <h2 className="text-2xl text-green-500 mx-1"> 29%</h2>
              </div>
            </div>
            <div>
              <img className="w-full" src="https://i.ibb.co/80ftVNV/Screenshot-1.png" alt="" />
            </div>
          </div>
          <div className="bg-white p-8 rounded-md flex items-center justify-around">
            <div>
              <h2 className="text-2xl font-sans mb-4 font-semibold text-gray-600">Active Buyer</h2>
              <h2 className="text-5xl font-sans font-bold">1.5k</h2>
              <div className="flex mt-4">
                <div>
                  <CgAlignBottom className="text-2xl text-green-500 mx-1 mt-1" />
                </div>
                <h2 className="text-2xl text-green-500 mx-1"> 15%</h2>
              </div>
            </div>
            <div>
              <img className="w-full" src="https://i.ibb.co/8B0WjfH/Screenshot-2.png" alt="" />
            </div>
          </div>
          <div className="bg-white p-8 rounded-md flex items-center justify-around">
            <div>
              <h2 className="text-2xl font-sans mb-4 font-semibold text-gray-600">New Seller Review</h2>
              <h2 className="text-5xl font-sans font-bold">106+</h2>
              <div className="flex mt-4">
                <div>
                  <CgAlignBottom className="text-2xl text-green-500 mx-1 mt-1" />
                </div>
                <h2 className="text-2xl text-green-500 mx-1"> 7%</h2>
              </div>
            </div>
            <div>
              <img className="w-full" src="https://i.ibb.co/Zm4MDGL/Screenshot-3.png" alt="" />
            </div>
          </div>
          <div className="bg-white p-8 rounded-md flex items-center justify-around">
            <div>
              <h2 className="text-2xl font-sans mb-4 font-semibold text-gray-600">Total Review</h2>
              <h2 className="text-5xl font-sans font-bold">680+</h2>
              <div className="flex mt-4">
                <div>
                  <CgAlignBottom className="text-2xl text-green-500 mx-1 mt-1" />
                </div>
                <h2 className="text-2xl text-green-500 mx-1"> 16%</h2>
              </div>
            </div>
            <div>
              <img className="w-full" src="https://i.ibb.co/0VdCK0g/Screenshot-4.png" alt="" />
            </div>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-20">
          <div className="bg-white p-8">
            <h2 className="text-3xl mb-4 font-semibold text-center font-sans">Activity</h2>
            <ResponsiveContainer width="100%" aspect={3}>
              <LineChart data={pdata} width={500} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" interval={"preserveStartEnd"} tickFormatter={(value) => value + " Programming"} />
                <YAxis />
                <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
                <Legend />
                <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-8">
            <h2 className="text-3xl mb-4 font-semibold text-center font-sans">Buyer Contributes</h2>
            <ResponsiveContainer width="95%" aspect={3}>
              <AreaChart
                width={500}
                height={300}
                data={pdata}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-20">
          <div className="bg-white p-8">
            <h2 className="text-3xl mb-4 font-semibold text-center font-sans">Seller Analytics</h2>
            <ResponsiveContainer width="95%" aspect={3}>
              <BarChart
                width={500}
                height={300}
                data={pdata}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="student" fill="#8884d8" />
                <Bar dataKey="fees" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-8">
            <h2 className="text-3xl mb-4 font-semibold text-center font-sans">Gig Analytics TOP-3</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">1</td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Sliver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 text-right">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">2</td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td className="px-6 py-4">$1999</td>
                    <td className="px-6 py-4 text-right">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">3</td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="px-6 py-4">$99</td>
                    <td className="px-6 py-4 text-right">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainDashboard;
