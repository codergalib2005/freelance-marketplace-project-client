// import { Header } from 'antd/lib/layout/layout';
import React from "react";
import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";

const index = () => {
  return (
    <div className="feature-font ">
      {/* <div className="">
        <Header className="" />
      </div> */}
      <div className="mt-12">
        {/* <h2 className="text-center text-3xl font-bold">This is chat js</h2> */}
        <div className="joinChatContainer flex flex-col">
          <h3 className="text-center text-2xl font-bold">Join a Chat</h3>
          <input
            className="w-72  mx-auto border mt-4 px-4 py-2 rounded-lg outline-none"
            type="text"
            placeholder="Jhon.."
            // onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-72 mx-auto border mt-2 px-4 py-2 rounded-lg outline-none"
            type="text"
            placeholder="Room ID.."
            // onChange={(e) => setRoom(e.target.value)}
          />
          <button className="bg-blue-400 text-white rounded-lg px-6 py-2 w-32 mx-auto mt-4">
            Join A Room
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
