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

const BuyPlan = () => {
  const [value, setValue] = React.useState(new Date());
  const [gig, setSingleGig] = useState({});
  const { loading } = useAuth();
  const router = useRouter();
  const id = router?.query?.chooseid;
  useEffect(() => {
    const GETURL = `${process.env.NEXT_PUBLIC_API_URL}/gigs/${id}`;
    axios
      .get(GETURL)
      .then((res) => {
        setSingleGig(res?.data?.result[0]);
      })
      .catch((err) => console.log(err));
  }, [id, router.query.gigid]);

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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BuyPlan;
