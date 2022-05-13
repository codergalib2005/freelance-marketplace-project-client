/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Input, message } from "antd";
import useAuth from "../../hooks/useAuth";
import Footer from "../../components/Shared/Footer";
import { notification } from "antd";
import SideBar from "../../components/SideBar/SideBar";
import SideBarMenu from "../../components/SideBar/SideBarMenu";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { loading, isOpen } = useAuth();
  const handleONBlur = (e) => {
    setEmail(e.target?.value);
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const User = { email };
    if (!email) {
      notification.warning({
        message: "Warning",
        description: "Please enter your email",
        placement: "top",
        duration: 2,
        style: {
          width: 300,
          //   marginLeft: "calc(50% - 150px)",
          //   marginTop: "calc(50vh - 100px)",
          borderBottom: "6px solid #FFFF00",
        },
      });
      return;
    } else {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/admin/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(User),
      })
        .then((res) => res.json())
        .then((data) => {
          setEmail(data);
          notification.success({
            message: "Success",
            description: "Admin added successfully",
            placement: "top",
            duration: 2,
            style: {
              width: 300,
              //   marginLeft: "calc(50% - 150px)",
              //   marginTop: "calc(50vh - 100px)",
              borderBottom: "6px solid #3a3",
            },
          });
        })
        .catch((err) => {
          console.log(err);
          notification.error({
            message: "Error",
            description: "Please Try to another Email",
            placement: "topCenter",
            duration: 2,
            style: {
              width: 300,
              //   marginLeft: "calc(50% - 150px)",
              //   marginTop: "calc(50vh - 100px)",
              borderBottom: "6px solid #e83a3b",
            },
          });
        });
    }
  };
  return (
    <div>
      {loading && (
        <div className="min-h-screen flex items-center justify-center">
          <div
            style={{ minHeight: "90vh" }}
            className="flex items-center justify-center"
          >
            <span className="main-loader"></span>
          </div>
        </div>
      )}
      <>
        {!loading && (
          <div>
            <div>
              <div>
                {" "}
                <SideBar />
                <SideBarMenu />
              </div>
            </div>
            <div className={`${isOpen ? "pl-[200px]" : "pl-[50px]"}`}>
              <div className="mx-auto py-10 min-h-screen">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12  pr-5 lg:pr-0">
                  <div className="flex justify-center bg-white shadow-[#ec4892] items-center shadow-lg rounded-lg ">
                    <form
                      onSubmit={handleAdminSubmit}
                      className="w-full flex items-center justify-center flex-col min-h-[400px]"
                      style={{ width: "100% !important" }}
                    >
                      <Input
                        className="w-full max-w-[300px] mx-auto border border-[#ec4899] py-1 px-4 text-lg focus:outline-none focus:border-2 focus:border-[#ec48] focus:shadow-none"
                        placeholder="New admin email"
                        type="email"
                        onBlur={handleONBlur}
                      />
                      <br />
                      <div className="mt-8 flex justify-center">
                        <button
                          type="submit"
                          className="bg-white  text-gray-800 text-lg font-medium px-8 py-3 rounded-md border-2 border-[#ec4899]"
                        >
                          Make Admin
                        </button>
                      </div>
                    </form>
                  </div>

                  <div>
                    <img
                      className="max-w-full"
                      src="/dashboard/admin.gif"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default MakeAdmin;
