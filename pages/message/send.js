import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import SideBarMenu from "../../components/SideBar/SideBarMenu";
import useAuth from "../../hooks/useAuth";
import Sendbox from "../../components/Message/dashboard/Sendbox";
import Head from "next/head";
const SendBox = () => {
  const { isOpen } = useAuth();
  return (
    <section>
      <Head>
        <title>Message Sendbox</title>
      </Head>
      <main>
        <div className="dashboard_position bg-[#fff] ">
          <div className="min-h-screen">
            {" "}
            <SideBar />
            <SideBarMenu />
          </div>
          <div className={`${isOpen ? "pl-[200px]" : "pl-[45px]"}`}>
            <Sendbox />
          </div>
        </div>
      </main>
    </section>
  );
};

export default SendBox;
