/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import HeaderBottom from "../../components/Shared/HeaderBottom";
import HeaderTop from "../../components/Shared/HeaderTop";
import { popularsupport } from "../../components/Support/Support";
import { supportTeam } from "../../components/Support/SupportTeam";
import ModalSupport from "../../components/Support/Modal";

const SupportPage = () => {
  const [supporter, setSupporter] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
   const showModal = (name) => {
    setIsModalVisible(true);
     setSupporter(name);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <header>
        <div>
          <HeaderTop />
          <Header />
          <HeaderBottom />
        </div>
      </header>
      <div
        style={{
          backgroundImage: `url(https://i.ibb.co/QF9KPG1/home-green-bg-087e27c.png)`,
          height: "100%",
          width: "100%",
        }}
        className="py-24 text-center"
      >
        <h2 className="text-2xl lg:text-3xl mb-8 font-semibold">
          What do you need help with?
        </h2>
        <div className="flex justify-center">
          <input
            className="outline-none  px-6 py-3 w-[70%] md:w-[50%] rounded-l-lg text-lg"
            type="text"
            placeholder="Try 'want to change account details'"
          />
          <button className="px-6 py-3 bg-blue-500 text-white text-xl rounded-r-lg">
            Search
          </button>
        </div>
      </div>
      {/*  */}
      <div className="text-left px-8 md:px-16 lg:px-24">
        <p className="font-semibold text-lg pt-6 text-center md:text-left">
          Popular topics
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 text-center py-8 px-16 md:px-3 lg:px-0">
          {popularsupport.map((ps, index) => (
            <Link passHref key={index} href={`/support/${ps.name}`}>
              <div
                key={ps.id}
                className="shadow-md rounded-md flex items-center justify-center flex-col"
              >
                <img
                  className="w-12 flex justify-center my-8"
                  src={ps.img}
                  alt=""
                />
                <p className="font-medium text-lg mb-6">{ps.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-left px-8 md:px-16 lg:px-24">
        <p className="font-semibold text-lg pt-6 text-center md:text-left">
          Our top supoort instructors
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 my-12 px-16 md:px-3 lg:px-0">
          {supportTeam.map((st) => (
            <div className=" shadow-lg rounded" key={st.id}>
              <div className="flex justify-center">
                <img
                  className="w-28 h-28 rounded-full shadow-lg"
                  src={st.img}
                  alt=""
                />
              </div>
              <p className="font-medium text-lg text-center my-3">{st.name}</p>
              <p className="text-center text-md text-gray-700 my-2">
                {st.support}
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => showModal(st.name)}
                  className="px-12 py-3 rounded-full bg-blue-500 text-white mb-4"
                >
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
      <ModalSupport isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} setIsModalVisible={setIsModalVisible} name={supporter} />
    </div>
  );
};

export default SupportPage;
