import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import SideBarMenu from "../../components/SideBar/SideBarMenu";
import useAuth from "../../hooks/useAuth";

const ManageGig = () => {
  const { isOpen } = useAuth()
  return (
  <section>
    <main>
      <div className='dashboard_position'>
      <div >
            {" "}
            <SideBar />
            <SideBarMenu />
          </div>
      <div className={`${isOpen ? "pl-[200px]" : "pl-[45px]"}`}>
      <h2 className="text-black">Manage Gig</h2>
    </div>
      </div>
    </main>
  </section>
  );
};

export default ManageGig;
