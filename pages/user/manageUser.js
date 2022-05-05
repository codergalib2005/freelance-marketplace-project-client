import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import SideBarMenu from "../../components/SideBar/SideBarMenu";
import useAuth from "../../hooks/useAuth";

const ManageUser = () => {
  const { isOpen } = useAuth()
  return (
      <section>
        <main>
        <div className="dashboard_position bg-[#fff] ">
          <div className="min-h-screen">
            {" "}
            <SideBar />
            <SideBarMenu />
          </div>
          <div className={`${isOpen ? "pl-[200px]" : "pl-[45px]"}`}>
            <h2 className="text-black text-center ">Mange User</h2>
          </div>

        </div>
        </main>
      </section>
  );
};

export default ManageUser;
