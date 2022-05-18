/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainDashboard from "../../components/Dashboard/MainDashboard";
import SideBar from "../../components/SideBar/SideBar";
import SideBarMenu from "../../components/SideBar/SideBarMenu";
import { withAdmin } from "../../hooks/AdminRoute";

const Dashboard = () => {

  return (
     <section>
       <main>
          <div className="dashboard_position bg-[#00073d]">
            <div>
            <div> 
              <SideBar />
            <SideBarMenu /> 
            </div>
            </div>
            <div>
            <MainDashboard />
            </div>
          </div>
      </main>
    </section>

  );
};

export default withAdmin(Dashboard);
