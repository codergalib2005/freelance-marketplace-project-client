import React, { useEffect, useState } from "react";
import MainDashboard from "../../components/Dashboard/MainDashboard";
import SideBar from "../../components/SideBar/SideBar";
import SideBarMenu from "../../components/SideBar/SideBarMenu";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { user, admin, loading, setIsOpen, isOpen } = useAuth();
  const router = useRouter();

  useEffect(() =>{
  if(!admin){
    setTimeout(()=>{
      router.push("/")
    },4000)
  }
  },[])
  return (
    <section>
  { admin &&  <main>
        <div className="dashboard_position bg-[#00073d]">
          <div>
            {" "}
             <div> <SideBar />
            <SideBarMenu /> </div>
          </div>
          <div>
            <MainDashboard />
          </div>
        </div>
      </main>} {
        !admin && <div className="container mx-auto">
          
          <h2 className="text-2xl text-red-500 p-5">404 No Admin Found</h2>
         <div className="min-h-screen">
         <img className="w-full max-w-[600px] max-h-[600px]" src="https://raw.githubusercontent.com/prottay190/Image-uploaded/main/18246-covid-19-get-punched.gif" alt="" />
         </div>
        </div>
      }
    </section>
  );
};

export default Dashboard;
