/* eslint-disable @next/next/no-img-element */
import { Avatar } from "@mui/material";
import { Input, message, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import axios from "axios";
import React, { useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { BsCheck2Square } from "react-icons/bs";
import { FcCameraAddon } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import About from "../../components/Profile/About";
import BannerPicChange from "../../components/Profile/BannerPicChange";
import ProfileModal from "../../components/Profile/ProfileModal";
import Review from "../../components/Profile/Review";
import Task from "../../components/Profile/Task";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import HeaderTop from "../../components/Shared/HeaderTop";
import { withPrivate } from "../../hooks/PrivateRoute";
import useAuth from "../../hooks/useAuth";
const editorMood = {
  editor: null,
};
const controlReducer = (state, action) => {
  switch (action.type) {
    case "PROFESSION_EDIT":
      return { editor: (state.editor = "PROFESSION_EDIT") };
      break;
    case "SKILLS_EDIT":
      return { editor: (state.editor = "SKILLS_EDIT") };
      break;
    case "EDUCATION_EDIT":
      return { editor: (state.editor = "EDUCATION_EDIT") };
      break;
    case "BIO_EDIT":
      return { editor: (state.editor = "BIO_EDIT") };
      break;
    case "CLOSE_EDITOR":
      return { editor: (state.editor = null) };
      break;
    default:
      return state;
      break;
  }
};
const Profile = () => {
  const [state, dispatch] = useReducer(controlReducer, editorMood);
  // const [thisUser, setThisUser] = useState({})
  const [tabs, setTabs] = useState("about");
  const { user, thisUser, userStatus, loading, setIsLoadind } = useAuth();
  const [professionText, setProfessionText] = useState(
    `${thisUser?.profession}`
  );
  const [bioText, setBioText] = useState(`${thisUser?.bio}`);
  const [openProfile, setOpenProfile] = useState(false);
  const [openBanner, setOpenBanner] = useState(false);

  const profileBanner = {
    background: `radial-gradient(#3981c06d, #e83a3a6d),url(${thisUser?.image}) no-repeat center center`,
    backgroundSize: "cover",
    height: "200px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };
  const profileSelectableCard = {
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  };
  // axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/email/${user?.email}`)
  //   .then(response => {
  //     setThisUser(response?.data?.result[0]);
  //   }, error => {
  //     console.log(error);
  //   });
  // Handle Bio Edit Submit____
  const handleBioSubmit = () => {
    if (!bioText) {
      message.error("Bio field Must need to fill-up!");
      return;
    } else {
      axios
        .put(`${process.env.NEXT_PUBLIC_API_URL}/users/bio/${thisUser?._id}`, {
          bio: bioText,
        })
        .then(function (response) {
          message.success("Bio Update Successfully!");
          dispatch({ type: "CLOSE_EDITOR" });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const handleProfessionSubmit = (e) => {
    if (!professionText) {
      message.error("Profession field Must need to fill-up!");
      return;
    } else {
      axios
        .put(
          `${process.env.NEXT_PUBLIC_API_URL}/users/profession/${thisUser?._id}`,
          {
            profession: professionText,
          }
        )
        .then(function (response) {
          message.success("Profession Update Successfully!");
          dispatch({ type: "CLOSE_EDITOR" });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  // ================ Here are all props
  const bioProps = {
    defaultValue: bioText,
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleProfileOpen = () => setOpenProfile(true);
  const handleProfileClose = () => setOpenProfile(false);
  const handleBannerOpen = () => setOpenBanner(true);
  const handleBannerClose = () => setOpenBanner(false);
  return (
    <div>
      <HeaderTop />
      <Header />
      <div className="single_user_profile_section text_no_select px-8 feature-font bg-[#F5F7FB]">
        <div className="container px-4  mx-auto py-12">
          <div className="mb-8 flex justify-end">
            <div className="flex gap-4 md:gap-8 lg:gap-16  items-center">
              <input
                type="text"
                placeholder="search here!"
                className="border border-blue-300 pl-2 py-2 rounded-lg outline-none"
              />
              <button className="px-4 py-2 rounded-lg bg-[#EFDCE7]">
                Hire Me
              </button>
              <img className="w-6 h-6" src="/profile/select.png" alt="" />
              <div className="w-8 h-8 rounded-full border-4 border-white ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {!thisUser?.avatar && (
                  <img
                    className="w-full rounded-full hover:scale-105 h-full transition-all duration-300 ease-linear"
                    src="https://i.ibb.co/bb4pZNP/boy-avatar.png"
                    alt=""
                  />
                )}
                {thisUser?.avatar && (
                  <img
                    className="w-full rounded-full hover:scale-105 h-full transition-all duration-300 ease-linear"
                    src={thisUser?.avatar}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
          {/* new section */}
          <div className="mb-8">
            <div className="">
              <h2 className="text-4xl text-gray-800 font-semibold">
                Hello {user?.displayName}
              </h2>
              <div className="flex  gap-4 items-center">
                <p className="text-xl text-gray-500 font-medium">
                  Have a nice day at work
                </p>
                <div className="p-1 w-12 h-12  rounded-full bg-yellow-100 flex justify-center items-center">
                  <img
                    className="rounded-full"
                    src="https://i.ibb.co/BtdZT51/clapping.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/*  */}
            <div className="bg-white shadow-lg rounded-lg mb-16 mt-6">
              <div className="flex gap-4 flex-col md:flex-row lg:flex-row justify-around items-center">
                <img
                  className="w-48"
                  src="/profile/Online-report-pana.png"
                  alt=""
                />
                <div className="shadow-lg md:shadow-none p-6 md:p-0">
                  <p className="text-3xl text-gray-700">$3553.6</p>
                  <div className="bg-blue-400 w-12 mx-auto h-2 my-4 rounded-lg"></div>
                  <p className="text-gray-500 font-semibold text-lg">
                    My Funds
                  </p>
                </div>
                <div className="shadow-lg  md:shadow-none p-6 md:p-0">
                  <p className="text-3xl text-gray-700">$5153.60</p>
                  <div className="bg-purple-400 w-12 mx-auto h-2 my-4 rounded-lg"></div>
                  <p className="text-gray-500 font-semibold text-lg">
                    Total Earnings
                  </p>
                </div>
                <img className="w-48" src="/profile/clock.jpg" alt="" />
              </div>
            </div>
          </div>
          {/* new section */}

          <div className="profile_wrapper grid grid-cols-12 gap-5">
            {/* -------------Left Side Box------------- */}
            <div className="col-span-12 xl:col-span-8">
              {/* Left side Header */}
              <div className="shadow-md flex">
                <div
                  style={profileSelectableCard}
                  className={`w-4/12 flex items-center justify-center flex-col py-2 border-b-2 cursor-pointer ${
                    tabs === "about"
                      ? "bg-[#c3d9ec] text-[#c3d9ec] border-[#3980c0]"
                      : "border-gray-500 bg-50"
                  }`}
                  onClick={() => setTabs("about")}
                >
                  <span className="text-xl">
                    <GrUserManager />
                  </span>
                  <span
                    className={`text-base font-medium ${
                      tabs === "about" ? "text-[#3980c0]" : "text-gray-800"
                    }`}
                  >
                    About
                  </span>
                </div>
                <div
                  style={profileSelectableCard}
                  className={`w-4/12 flex items-center justify-center flex-col py-2 border-b-2 cursor-pointer ${
                    tabs === "task"
                      ? "bg-[#c3d9ec] text-[#c3d9ec] border-[#3980c0]"
                      : "border-gray-500 bg-50"
                  }`}
                  onClick={() => setTabs("task")}
                >
                  <span className="text-xl text-gray-800">
                    <GrUserManager />
                  </span>
                  <span
                    className={`text-base font-medium ${
                      tabs === "task" ? "text-[#3980c0]" : "text-gray-800"
                    }`}
                  >
                    Tasks
                  </span>
                </div>
                <div
                  style={profileSelectableCard}
                  className={`w-4/12 flex items-center justify-center flex-col py-2 border-b-2 cursor-pointer ${
                    tabs === "review"
                      ? "bg-[#c3d9ec] text-[#c3d9ec] border-[#3980c0]"
                      : "border-gray-500 bg-50"
                  }`}
                  onClick={() => setTabs("review")}
                >
                  <span className="text-xl text-gray-800">
                    <GrUserManager />
                  </span>
                  <span
                    className={`text-base font-medium ${
                      tabs === "review" ? "text-[#3980c0]" : "text-gray-800"
                    }`}
                  >
                    Review
                  </span>
                </div>
              </div>
              {/* Left side Bdy */}
              <div>
                {tabs === "about" && (
                  <div>
                    <About
                      id={thisUser?._id}
                      aboutt={thisUser?.about}
                      skills={thisUser?.skills}
                      education={thisUser?.education}
                    />
                  </div>
                )}
                {tabs === "task" && (
                  <div>
                    <Task />
                  </div>
                )}
                {tabs === "review" && (
                  <div>
                    <Review />
                  </div>
                )}
              </div>
            </div>
            {/* -------------Right Side Box------------- */}
            <div className="col-span-12 xl:col-span-4">
              {/* User Profile Box */}
              <div className="shadow-md">
                <div className="relative" style={profileBanner}>
                  <span
                    className="text-2xl rounded-md absolute bottom-3 right-3 bg-gray-50 px-2 py-2"
                    onClick={() => setOpenBanner(!openBanner)}
                  >
                    <FcCameraAddon />
                  </span>
                  <BannerPicChange
                    id={thisUser?._id}
                    openBanner={openBanner}
                    handleBannerClose={handleBannerClose}
                    handleBannerOpen={handleBannerOpen}
                    setOpenBanner={setOpenBanner}
                  />
                </div>
                <div className="p-3">
                  <div className="relative -top-16">
                    <div className="absolute">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <div className="w-20 h-20 rounded-full overflow-hidden">
                        {thisUser?.avatar === "" && (
                          <Avatar
                            alt="Remy Sharp"
                            src="https://i.ibb.co/bb4pZNP/boy-avatar.png"
                            sx={{ width: "100%", height: "100%" }}
                          />
                        )}
                        {thisUser?.avatar && (
                          <Avatar
                            alt={thisUser?.name}
                            src={thisUser?.avatar}
                            sx={{ width: "100%", height: "100%" }}
                          />
                        )}
                      </div>
                      <div className="position ">
                        <span
                          className="text-xl profilePicUploadIcon bg-gray-50 px-2 py-2 rounded-md shadow-lg"
                          onClick={() => setOpenProfile(true)}
                        >
                          <FcCameraAddon />
                          <ProfileModal
                            id={thisUser?._id}
                            openProfile={openProfile}
                            handleProfileOpen={handleProfileOpen}
                            setOpenProfile={setOpenProfile}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-12">
                    <strong className="block text-xl text-gray-700">
                      {thisUser?.name}
                    </strong>
                    {state.editor === "PROFESSION_EDIT" ? (
                      <div className="mt-2">
                        <Input
                          showCount
                          maxLength={40}
                          placeholder="input with clear icon"
                          allowClear
                          defaultValue={thisUser?.profession}
                          onChange={(e) => setProfessionText(e.target.value)}
                        />
                        <div className="py-2">
                          <button
                            className="text-xl mr-3 mt-3"
                            onClick={() => dispatch({ type: "CLOSE_EDITOR" })}
                          >
                            <IoMdClose />
                          </button>
                          <button
                            onClick={handleProfessionSubmit}
                            className="text-xl mr-3 mt-3"
                          >
                            <BsCheck2Square />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <span className="block text-lg font-normal">
                        {thisUser?.profession}{" "}
                        <span
                          className="text-lg pl-1 flex items-center cursor-pointer text-[#e83a3b]"
                          onClick={() => dispatch({ type: "PROFESSION_EDIT" })}
                        >
                          <Tooltip title="Edit profession box and add your profession!">
                            <FiEdit />
                          </Tooltip>
                          <span className="ml-2 text-gray-800 font-medium text-md">
                            Edit your Profession
                          </span>
                        </span>
                      </span>
                    )}
                    <p className="block text-base text-gray-500 text-justify">
                      {state.editor === "BIO_EDIT" ? (
                        <div className="mt-2">
                          <TextArea
                            showCount
                            maxLength={100}
                            placeholder="input with clear icon"
                            allowClear
                            // {...bioProps}
                            defaultValue={thisUser?.bio}
                            onChange={(e) => setBioText(e.target.value)}
                          />
                          <div className="py-2">
                            <button
                              className="text-xl mr-3 mt-3"
                              onClick={() => dispatch({ type: "CLOSE_EDITOR" })}
                            >
                              <IoMdClose />
                            </button>
                            <button
                              onClick={handleBioSubmit}
                              className="text-xl mr-3 mt-3"
                            >
                              <BsCheck2Square />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <span className="block text-lg font-normal">
                          {thisUser?.bio}{" "}
                          <span
                            className="text-lg pl-1 flex items-center cursor-pointer text-[#e83a3b]"
                            onClick={() => dispatch({ type: "BIO_EDIT" })}
                          >
                            <Tooltip title="Edit Bio box, add your simple introduction">
                              <FiEdit />
                            </Tooltip>
                            <span className="ml-2 text-gray-800 font-medium text-md">
                              Edit your bio
                            </span>
                          </span>
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withPrivate(Profile);
