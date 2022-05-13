import React, { useEffect, useState } from "react";
import MainDashboard from "../../components/Dashboard/MainDashboard";
import SideBar from "../../components/SideBar/SideBar";
import SideBarMenu from "../../components/SideBar/SideBarMenu";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Dashboard = () => {
  const [admin, setAdmin] = useState(false);
  const [email, setEmail] = useState();
  const { user, setIsOpen, isOpen } = useAuth();

  //   function getUrl(admin) {
  //     console.log(admin)
  // }
  // setInterval(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/admin/${user?.email}`)
  //   .then(res => res.json())
  //   .then(data => getUrl(data))
  // },1000)

  useEffect(()=>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/admin/${user?.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.access))
  },[user?.email])
  return (
    <section>
      <main>
        <div className="dashboard_position bg-[#00073d]">
          <div>
            {" "}
            { admin && <div> <SideBar />
            <SideBarMenu /> </div>}
          </div>
          <div>
            <MainDashboard />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
