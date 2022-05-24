import axios from "axios";
import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import SideBarMenu from "../../components/SideBar/SideBarMenu";
import useAuth from "../../hooks/useAuth";
import Head from "next/head";
const Inbox = () => {
  const [allSupportMsg, setAllSupportMsg] = useState([]);
  console.log(allSupportMsg);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/support`).then((res) => {
      setAllSupportMsg(res.data.result);
    });
  }, []);

  const { isOpen } = useAuth();
  return (
    <section>
      <Head>
        <title>Inbox</title>
      </Head>
      <main className="flex ">
        <div className={isOpen ? "w-[20%]" : "w-[5%]"}>
          <SideBar />
          <SideBarMenu />
        </div>
        <div className={isOpen ? "w-[80%]" : "w-[95%] px-16 lg:px-8"}>
          <h3 className="text-gray-700 text-xl md:text-2xl lg:text-3xl my-8 ">
            Message Inbox for admin
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {allSupportMsg.map((sm) => (
              <div className="shadow-lg rounded-lg p-8" key={sm._id}>
                <div className="flex gap-4 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  <p className="text-gray-600 text-lg font-medium text-center">
                    This is message for <b>{sm.receiver}</b>
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="text-gray-500 mt-3 border px-4 py-1 rounded-md w-[50%]">
                    Name: {sm.sender}
                  </p>
                  <p className="text-gray-500 mt-3 border px-4 py-1 rounded-md w-[50%]">
                    Email: {sm.email}
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="text-gray-500 mt-3 border px-4 py-1 rounded-md w-[50%]">
                    Title: {sm.title}
                  </p>
                  <p className="text-gray-500 mt-3 border px-4 py-1 rounded-md w-[50%]">
                    Subject: {sm.subject}
                  </p>
                </div>
                <p className="text-gray-500 mt-3 px-4 border py-1 rounded-md">
                  Message: {sm.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Inbox;
