import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../../hooks/useAuth";
import DetailsHeader from "../../../../components/gigs/DetailsHeader";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useForm } from "react-hook-form";

const BuyPlan = () => {
  const [value, setValue] = React.useState(new Date());
  const [gig, setSingleGig] = useState({});
  const { loading } = useAuth();
  const router = useRouter();
  const id = router?.query?.chooseid;
  const { user } = useAuth();

  //hook from function
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    data.seller_email = gig.email,
      data.buyer_email = user.email,
      data.gig_title = gig.gig_title,
      data.category = gig.category,
      data.time = value
    console.log(data)
  };

  useEffect(() => {
    const GETURL = `${process.env.NEXT_PUBLIC_API_URL}/gigs/${id}`;
    axios
      .get(GETURL)
      .then((res) => {
        setSingleGig(res?.data?.result[0]);
      })
      .catch((err) => console.log(err));
  }, [id, router.query.gigid]);
  console.log(gig);

  //post
  // axios.post(
  //   "http://localhost:3000/api/contact",
  //   {
  //     firstName,
  //     lastName,
  //     email,
  //   },
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   },
  //   console.log(res) //this comes back undefined
  // )

  return (
    <div>
      {loading && (
        <div className="min-h-screen flex bg-orange-700 items-center justify-center">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {!loading && (
        <div>
          <DetailsHeader />
          <div>
            <div className="container mx-auto px-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div></div>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={(props) => (
                        <TextField
                          sx={{ color: "#fff" }}
                          className="bg-[#0a1929] text-gray-50 date-picker-task-create"
                          {...props}
                        />
                      )}
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </LocalizationProvider>
                </div>

                <div className="p-10">
                  <div >
                    <div>
                      <div className="h-56 flat_gradient pricing_card flex items-center justify-center flex-col">
                        <h2 className="text-xl font-bold text-center text-white uppercase">
                        {gig.category}
                        </h2>
                      </div>
                      <div className="flex items-center justify-center ">
                        <div className="rounded-full w-24 h-24 flex items-center justify-center bg-white shadow-lg text-center relative -top-12">
                          <div>
                            <h1 className="text-[#2a3254] text-2xl font-bold">
                            </h1>
                            <h4 className="text-xl font-bold text-[#2a3254]">
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 mx-4 pl-2  border-b border-[#2a3254] py-2 rounded-2xl">
                        <div className="col-span-2">
                          <strong className="text-lg font-bold text-[#2a3254]">
                            Title
                          </strong>
                        </div>
                        <div className="col-span-4 self-center text-base">
                          {gig.gig_title}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 mx-4 pl-2  border-b border-[#2a3254] py-2 rounded-2xl">
                        <div className="col-span-2">
                          <strong className="text-lg font-bold text-[#2a3254]">
                            Seller Email
                          </strong>
                        </div>
                        <div className="col-span-4 self-center text-base">
                          {gig.email}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 mx-4 pl-2  border-b border-[#2a3254] py-2 rounded-2xl">
                        <div className="col-span-2">
                          <strong className="text-lg font-bold text-[#2a3254]">
                            Buyer Email
                          </strong>
                        </div>
                        <div className="col-span-4 self-center text-base">
                          {user.email}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 mx-4 pl-2  border-b border-[#2a3254] py-2 rounded-2xl">
                        <div className="col-span-2">
                          <strong className="text-lg font-bold text-[#2a3254]">
                            select Category
                          </strong>
                        </div>
                        <div className="col-span-4 self-center text-base">
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <select {...register("Package")}>
                              <option value="Basic">Basic</option>
                              <option value="Standred">Standred</option>
                              <option value="Primiun">Primiun</option>
                            </select>
                            <button className="button_gradient  flat_gradient">
                              <input type="submit" />
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
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




