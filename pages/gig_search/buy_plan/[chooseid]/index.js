/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../../hooks/useAuth";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useForm } from "react-hook-form";
import { message } from "antd";
import Header from "../../../../components/Shared/Header";
import HeaderTop from "../../../../components/Shared/HeaderTop";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDateTimePicker from "@mui/lab/StaticDateTimePicker";
import { Box, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Head from "next/head";
import { notification } from "antd";
const BuyPlan = () => {
  const [calenderValue, setCalenderValue] = React.useState(new Date());
  const [gig, setSingleGig] = useState({});
  const [thisUser, setThisUser] = useState({});
  const { loading, user } = useAuth();
  const router = useRouter();
  const id = router?.query?.chooseid;
  //hook from function
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // post
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/task/`,
        {
          sellerEmail: gig?.email,
          buyerEmail: user?.email,
          title: gig?.gig_title,
          category: gig?.category,
          price: data?.budge,
          to: calenderValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        notification.success({
          message: "Success",
          description: "Task Created Successfully!",
          placement: "top",
          duration: 2,
          style: {
            width: 300,
            //   marginLeft: "calc(50% - 150px)",
            //   marginTop: "calc(50vh - 100px)",
            borderBottom: "6px solid #3a3",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
          },
        });
        // GO to the back page
        // router.push(`/gig_search/gigdetails/${gig?._id}`)
        router.back();
        reset();
      })
      .catch((err) => console.log(message));
  };
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/email/${user?.email}`,
        configJson
      )
      .then(
        (response) => {
          setThisUser(response?.data?.result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  console.log(thisUser);
  useEffect(() => {
    const GETURL = `${process.env.NEXT_PUBLIC_API_URL}/gigs/${id}`;
    axios
      .get(GETURL)
      .then((res) => {
        setSingleGig(res?.data?.result[0]);
      })
      .catch((err) => console.log(err));
  }, [id, router.query.gigid]);
  const handleBuyPlan = () => {
    notification.error({
      message: "Error",
      description: "Only Buyer Can Create A task!",
      placement: "top",
      duration: 2,
      style: {
        width: 300,
        //   marginLeft: "calc(50% - 150px)",
        //   marginTop: "calc(50vh - 100px)",
        borderBottom: "6px solid #e83a3b",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
      },
    });
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <Head>
        <title>Buy Plan | {gig?.title}</title>
        <meta name="title" content={gig?.gig_title} />
        <meta name="description" content={gig?.description} />
      </Head>
      {loading && (
        <div className="min-h-screen flex items-center justify-center w-screen">
          <span className="main-loader"></span>
        </div>
      )}
      {!loading && (
        <div>
          {/* <div>
            <HeaderTop />
            <Header />
          </div> */}
          <div>
            <div className="bg-white relative overflow-x-hidden">
              <div className="grid grid-cols-6 w-screen min-h-screen">
                <div className="col-span-4"></div>
                <div
                  style={{
                    borderBottomLeftRadius: "45%",
                    borderTopLeftRadius: "45%",
                  }}
                  className="col-span-2 bg-[#1cc7c1] "
                ></div>
              </div>
              <div className="absolute top-0 left-0 w-screen min-h-screen flex items-center justify-center px-4">
                <div className="container mx-auto shadow-2xl rounded-2xl py-4 overflow-hidden">
                  <Paper
                    elevation={5}
                    style={{ background: "none", minHeight: "100%" }}
                  >
                    <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-4 relative">
                      <div>
                        <button
                          onClick={handleBack}
                          className="bg-[#1cc7c1] text-lg text-white font-bold py-2 px-8 absolute top-3 left-3 rounded-full"
                        >
                          Back
                        </button>
                        <img src="/buy_plan/agenda.gif" alt="" />
                      </div>
                      <div>
                        <div>
                          <Paper
                            style={{ background: "rgba(255, 255,255,0.4)" }}
                            elevation={5}
                          >
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <StaticDateTimePicker
                                displayStaticWrapperAs="desktop"
                                value={calenderValue}
                                onChange={(newValue) => {
                                  setCalenderValue(newValue);
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                          </Paper>
                        </div>
                        <h2 className="text-[#1cc7c1] mt-1 buy_task_glass font-medium">
                          {gig?.gig_title}
                        </h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <h2 className="text-[#1cc7c1] buy_task_glass font-medium">
                            {gig?.email}
                          </h2>
                          <h2 className="text-[#1cc7c1] buy_task_glass font-medium">
                            {user?.email}
                          </h2>
                        </div>
                        <h2 className="text-[#1cc7c1] buy_task_glass font-medium">
                          {gig?.category}
                        </h2>
                        <div>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 pt-2">
                              <input
                                className="buy_task_glass outline w-full outline-[#c2410c]"
                                type="number"
                                {...register("budge", { required: true })}
                                placeholder="$ Price / budge"
                              />
                              {thisUser?.status === "buyer" && (
                                <input
                                  className="mt-1 sm:mt-0 sm:ml-3 text-lg font-medium uppercase bg-[#c2410c] text-gray-50 text-center w-full py-2 shadow-md rounded-full cursor-pointer no-select"
                                  type="submit"
                                  value="Confirm Order"
                                />
                              )}
                              {thisUser?.status === "seller" && (
                                <input
                                  onClick={handleBuyPlan}
                                  className="mt-1 sm:mt-0 sm:ml-3 text-lg font-medium uppercase bg-[#c2410c] text-gray-50 text-center w-full py-2 shadow-md rounded-full cursor-pointer no-select"
                                  value="Confirm Order"
                                />
                              )}
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Paper>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BuyPlan;
