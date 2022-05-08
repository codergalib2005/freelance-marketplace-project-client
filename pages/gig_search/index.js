/* eslint-disable react-hooks/rules-of-hooks */
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillGrid3X3GapFill, BsFilterLeft } from "react-icons/bs";
import SingleGig from "../../components/gigs/SingleGig";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import HeaderTop from "../../components/Shared/HeaderTop";
import useAuth from "../../hooks/useAuth";
const GigSearch = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);
  const { allGigs } = useAuth();
  const [loading, setLoading] = useState(true);
  const [gridColumn, setGridColumn] = useState("grid_column");
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(allGigs)
  return (
    <div>
      <HeaderTop />
      <Header />
      <div className="border-b-2 border-gray-50">
        {/* Filter box header */}
        <div className="bg-[#0a1929] py-2 border-b-2 border-gray-50">
          <div className="container-fluid mx-auto px-4">
            <div className="flex items-center justify-between">
              <div>
                <button
                  className="border-2 border-[#4c7bbc] w-16 h-16 flex items-center justify-center"
                  onClick={() => setShowSidebar(!showSidebar)}
                >
                  <span className="text-3xl color-white">
                    <BsFilterLeft color="white" />
                  </span>
                </button>
              </div>
              <div>
                <div className="grid grid-cols-2 w-40 h-16 border-2 border-[#4c7bbc]">
                  <button
                    onClick={() => setGridColumn("grid_column")}
                    className="flex items-center justify-center border-r-2 border-[#4c7bbc]"
                  >
                    <span className="text-2xl">
                      <BsFillGrid3X3GapFill color="white" />
                    </span>
                  </button>
                  <button
                    onClick={() => setGridColumn("grid_row")}
                    className="flex items-center justify-center"
                  >
                    <span className="text-2xl">
                      <AiOutlineBars color="white" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] min-h-screen">
          <div className="flex justify-between gap-4 relative">
            {/* This s the menu show sidebar */}
            <div
              className={`transition-all duration-300 ease-linear w-full px-2 min-h-screen bg-[#0a1929] absolute top-0 ${
                showSidebar ? "left-0" : " -left-80"
              }`}
              style={{ maxWidth: "19rem" }}
            >
              <div
                style={{ overflowY: "scroll" }}
                className="h-full sidebar_menu_scrollbar pl-4 py-5"
              >
                <FormControl>
                  <h4 className="text-2xl font-normal text-white">
                    Category Select
                  </h4>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    className="mt-5"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      onClick={(e) => {
                        setSearch(e.target?.value?.toLowerCase());
                      }}
                      value="design"
                      control={<Radio />}
                      label="Design"
                    />
                    <FormControlLabel
                      onClick={(e) => {
                        setSearch(e.target?.value?.toLowerCase());
                      }}
                      value="development"
                      control={<Radio color="success" />}
                      label="Development"
                    />
                    <FormControlLabel
                      onClick={(e) => {
                        setSearch(e.target?.value?.toLowerCase());
                      }}
                      value="graphic"
                      control={<Radio color="success" />}
                      label="Graphic"
                    />
                    <FormControlLabel
                      onClick={(e) => {
                        setSearch(e.target?.value?.toLowerCase());
                      }}
                      value="writing"
                      control={<Radio color="success" />}
                      label="Writing"
                    />
                    <FormControlLabel
                      onClick={(e) => {
                        setSearch(e.target?.value?.toLowerCase());
                      }}
                      value="ceo"
                      control={<Radio color="success" />}
                      label="CEO"
                    />
                    <FormControlLabel
                      onClick={(e) => {
                        setSearch(e.target?.value?.toLowerCase());
                      }}
                      value="Marketing"
                      control={<Radio color="success" />}
                      label="Marketing"
                    />
                    <FormControlLabel
                      onClick={(e) => {
                        setSearch(e.target?.value?.toLowerCase());
                      }}
                      value="apps"
                      control={<Radio color="success" />}
                      label="Mobile Apps"
                    />
                    <FormControlLabel
                      onClick={(e) => {
                        setSearch(e.target?.value?.toLowerCase());
                      }}
                      value="web"
                      control={<Radio color="success" />}
                      label="Web"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            {/* Show All contents Here */}
            <div
              style={{ overflowY: "scroll", maxWidth: "1100px" }}
              className={`content_scrollbar transition-all duration-300 py-10 ease-linear w-full bg-[#fff] h-4 min-h-screen text-white mx-auto px-6 ${
                showSidebar ? "pl-80" : "pl-6"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2  sm:px-5">
                {loading &&
                  [0, 1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item}>
                      <div>
                        <Skeleton
                          sx={{ height: 70 }}
                          animation="wave"
                          variant="rectangular"
                        />
                        <br />
                        <Skeleton
                          sx={{ height: 190 }}
                          animation="wave"
                          variant="rectangular"
                        />
                        <br />
                        <Skeleton
                          sx={{ height: 30 }}
                          animation="wave"
                          variant="rectangular"
                        />
                      </div>
                    </div>
                  ))}
              </div>
              {!loading && (
                <div
                  className={`${
                    gridColumn === "grid_column" && "gig_wrapper_column"
                  }`}
                >
                  {allGigs
                    ?.filter((gig) => {
                      if (search === "") {
                        return gig;
                      } else if (
                        gig.category
                          .toLowerCase()
                          .includes(search?.toLowerCase())
                      ) {
                        return gig;
                      }
                    })
                    .map((gig) => (
                      <SingleGig
                        gridColumn={gridColumn}
                        key={gig?._id}
                        gig={gig}
                      />
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GigSearch;
