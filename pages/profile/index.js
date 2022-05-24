/* eslint-disable @next/next/no-img-element */
import { Avatar } from "@mui/material";
import { Input, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import axios from "axios";
import React, { useReducer, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsCheck2Square } from "react-icons/bs";
import { FcCameraAddon } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import About from "../../components/Profile/About";
import Notifications from "../../components/Profile/Notification";
import Review from "../../components/Profile/Review";
import Task from "../../components/Profile/Task";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import HeaderTop from "../../components/Shared/HeaderTop";
import { withPrivate } from "../../hooks/PrivateRoute";
import useAuth from "../../hooks/useAuth";
import { notification } from "antd";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiImageAddLine } from "react-icons/ri";
import { ImCheckboxChecked } from "react-icons/im";
import Head from "next/head";
const editorMood = {
  editor: null,
};
const controlReducer = (state, action) => {
  switch (action.type) {
    case "PROFESSION_EDIT":
      return { editor: (state.editor = "PROFESSION_EDIT") };
    case "SKILLS_EDIT":
      return { editor: (state.editor = "SKILLS_EDIT") };
    case "EDUCATION_EDIT":
      return { editor: (state.editor = "EDUCATION_EDIT") };
    case "BIO_EDIT":
      return { editor: (state.editor = "BIO_EDIT") };
    case "CLOSE_EDITOR":
      return { editor: (state.editor = null) };
    default:
      return state;
  }
};
const Profile = () => {
  const [thisUser, setThisUser] = useState({});
  const [state, dispatch] = useReducer(controlReducer, editorMood);
  // const [thisUser, setThisUser] = useState({})
  const [tabs, setTabs] = useState("about");
  const { user, userStatus, loading, setIsLoadind } = useAuth();
  const [professionText, setProfessionText] = useState(
    `${thisUser?.profession}`
  );
  const [bioText, setBioText] = useState(`${thisUser?.bio}`);
  // const [openProfile, setOpenProfile] = useState(false);
  const [openBanner, setOpenBanner] = useState(false);

  // Profile Image Upload
  const [profilePicture, setProfilePicture] = useState(null);
  const [bannerPicture, setBannerPicture] = useState(null);
  const [profilePopup, setProfilePopup] = useState(false);
  const [bannerPopup, setBannerPopup] = useState(false);
  const handlePopup1 = () => {
    setProfilePopup(!profilePopup);
  };
  const handlePopup2 = () => {
    setBannerPopup(!bannerPopup);
  };
  const handleUploadProfile = () => {
    if (profilePicture) {
      const formData = new FormData();
      formData.append("file", profilePicture[0]);
      formData.append("upload_preset", "jsjb2bic");
      formData.append("upload_preset", "jsjb2bic");
      axios
        .post("https://api.cloudinary.com/v1_1/gsbsoft/image/upload", formData)
        .then((res) => {
          axios
            .patch(
              `${process.env.NEXT_PUBLIC_API_URL}/users/avatar/${thisUser?._id}`,
              {
                avatar: res.data.secure_url,
              }
            )
            .then((response) => {
              if (response.statusText === "OK") {
                setThisUser(response?.data?.result);
                setProfilePopup(false);
                notification.success({
                  message: "Success",
                  description: "Profile Image Update successfully",
                  placement: "top",
                  duration: 2,
                  style: {
                    width: 300,
                    borderBottom: "6px solid #3a3",
                    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
                  },
                });
              }
            });
        })
        .catch((err) => console.log(err));
    }
  };
  const handleUploadBanner = () => {
    if (bannerPicture) {
      const formData2 = new FormData();
      formData2.append("file", bannerPicture[0]);
      formData2.append("upload_preset", "jsjb2bic");
      formData2.append("upload_preset", "jsjb2bic");
      axios
        .post("https://api.cloudinary.com/v1_1/gsbsoft/image/upload", formData2)
        .then((res) => {
          axios
            .patch(
              `${process.env.NEXT_PUBLIC_API_URL}/users/banner/${thisUser?._id}`,
              {
                image: res.data.secure_url,
              }
            )
            .then((response) => {
              if (response.statusText === "OK") {
                setThisUser(response?.data?.result);
                console.log();
                setBannerPopup(false);
                notification.success({
                  message: "Success",
                  description: "Banner Image Update successfully",
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
              }
            });
        })
        .catch((err) => console.log(err));
    }
  };

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
  const handleBioSubmit = () => {
    if (!bioText) {
      notification.error({
        message: "Error",
        description: "Please enter your bio",
        placement: "top",
        duration: 2,
        style: {
          width: 300,
          borderBottom: "6px solid #e83a3b",
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
        },
      });
      return;
    } else {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/bio/${thisUser?._id}`,
          {
            bio: bioText,
          }
        )
        .then(function (response) {
          if (response.statusText === "OK") {
            setThisUser(response?.data?.result);
            notification.success({
              message: "Success",
              description: "Bio Update successfully",
              placement: "top",
              duration: 2,
              style: {
                width: 300,
                borderBottom: "6px solid #3a3",
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
              },
            });
            dispatch({ type: "CLOSE_EDITOR" });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const handleProfessionSubmit = (e) => {
    if (!professionText) {
      notification.error({
        message: "Error",
        description: "Please enter your profession",
        placement: "top",
        duration: 2,
        style: {
          width: 300,
          borderBottom: "6px solid #e83a3b",
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
        },
      });
      return;
    } else {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/profession/${thisUser?._id}`,
          {
            profession: professionText,
          }
        )
        .then(function (response) {
          if (response.statusText === "OK") {
            setThisUser(response?.data?.result);
            notification.success({
              message: "Success",
              description: "Bio Update successfully",
              placement: "top",
              duration: 2,
              style: {
                width: 300,
                borderBottom: "6px solid #3a3",
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
              },
            });
            dispatch({ type: "CLOSE_EDITOR" });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  // Loadded Loggined User Data
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/users/email/${user?.email}`)
      .then(
        (response) => {
          setThisUser(response?.data?.result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [user?.email]);
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
      <Head>
        <title>Profile {user?.displayName}</title>
      </Head>
      <HeaderTop />
      <Header />
      <div className="single_user_profile_section text_no_select px-8 feature-font bg-[#F5F7FB]">
        <div className="container px-4  mx-auto py-12">
          {/* <div className="mb-8 flex justify-end">
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
          </div> */}
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
                <div
                  style={profileSelectableCard}
                  className={`w-4/12 flex items-center justify-center flex-col py-2 border-b-2 cursor-pointer ${
                    tabs === "notification"
                      ? "bg-[#c3d9ec] text-[#c3d9ec] border-[#3980c0]"
                      : "border-gray-500 bg-50"
                  }`}
                  onClick={() => setTabs("notification")}
                >
                  <span className="text-xl text-gray-800">
                    <AiOutlineMail />
                  </span>
                  <span
                    className={`text-base font-medium ${
                      tabs === "notification"
                        ? "text-[#3980c0]"
                        : "text-gray-800"
                    }`}
                  >
                    Mails
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
                      setThisUser={setThisUser}
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
                {tabs === "notification" && (
                  <div className="bg-white min-h-[50vh]">
                    <Notifications />
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
                    onClick={handlePopup2}
                  >
                    <FcCameraAddon />
                  </span>
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
                          onClick={handlePopup1}
                        >
                          <FcCameraAddon />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-12">
                    <strong className="block text-xl text-gray-700">
                      {thisUser?.name}
                    </strong>
                    <p className="block text-xs text-gray-700">
                      {thisUser?.email}
                    </p>
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
                          <Tooltip title="Edit your Profession!">
                            <FiEdit />
                          </Tooltip>
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
                            <Tooltip title="Edit your bio">
                              <FiEdit />
                            </Tooltip>
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
      <div>
        {profilePopup && (
          <div className="animated-popup fixed transition-all duration-500 bg-[#0000007e] h-screen left-0 top-0 w-screen flex items-center justify-center p-4 select-none">
            <div className="w-full max-w-sm min-h-[400px] bg-white rounded-lg flex justify-between flex-col">
              <div className="flex items-center justify-between p-3 border-b-2">
                <strong className="text-gray-800 font-medium text-lg">
                  Upload Profile Image
                </strong>
                <span
                  className="text-red-400 font-medium text-xl cursor-pointer"
                  onClick={handlePopup1}
                >
                  <AiOutlineCloseCircle />
                </span>
              </div>
              <div className="p-3">
                <div className="bg-[#c6cad2] min-h-[260px] rounded-lg flex items-center justify-center">
                  <label htmlFor="profile-picture">
                    {!profilePicture && (
                      <div className="min-w-[150px] h-full max-w-[150px] min-h-[150px] rounded-full border-2 border-white  text-4xl text-white flex items-center justify-center">
                        <RiImageAddLine />
                      </div>
                    )}
                    {profilePicture && (
                      <div className="min-w-[150px] h-full max-w-[150px] min-h-[150px] rounded-full border-2 border-white  text-4xl text-white flex items-center justify-center">
                        <ImCheckboxChecked />
                      </div>
                    )}
                  </label>
                  <input
                    onChange={(e) => setProfilePicture(e.target.files)}
                    className="hidden"
                    type="file"
                    id="profile-picture"
                    accept="image/png, image/jpeg, image/jpg"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-3">
                <span className="text-gray-800 font-medium text-lg">
                  {profilePicture ? "Image Selected" : "Select jpg png or jpeg"}
                </span>
                <div>
                  {profilePicture ? (
                    <button
                      onClick={handleUploadProfile}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      Upload
                    </button>
                  ) : (
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                      Upload
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* End Profile Picture Upload Popup */}
        {/* Start Banner Picture Upload Popup */}
        {bannerPopup && (
          <div className="animated-popup fixed transition-all duration-500 bg-[#00000070] h-screen left-0 top-0 w-screen flex items-center justify-center p-4 select-none">
            <div className="w-full max-w-sm min-h-[400px] bg-white rounded-lg flex justify-between flex-col">
              <div className="flex items-center justify-between p-3 border-b-2">
                <strong className="text-gray-800 font-medium text-lg">
                  Upload Banner Image
                </strong>
                <span
                  className="text-red-400 font-medium text-xl cursor-pointer"
                  onClick={handlePopup2}
                >
                  <AiOutlineCloseCircle />
                </span>
              </div>
              <div className="p-3">
                <div className="bg-[#c6cad2] min-h-[260px] rounded-lg flex items-center justify-center">
                  <label htmlFor="profile-picture">
                    {!bannerPicture && (
                      <div className="min-w-[220px] h-full max-w-[220px] min-h-[150px] rounded-2xl border-2 border-white  text-4xl text-white flex items-center justify-center">
                        <RiImageAddLine />
                      </div>
                    )}
                    {bannerPicture && (
                      <div className="min-w-[220px] h-full max-w-[220px] min-h-[150px] rounded-2xl border-2 border-white  text-4xl text-white flex items-center justify-center">
                        <ImCheckboxChecked />
                      </div>
                    )}
                  </label>
                  <input
                    onChange={(e) => setBannerPicture(e.target.files)}
                    className="hidden"
                    type="file"
                    id="profile-picture"
                    accept="image/png, image/jpeg, image/jpg"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-3">
                <span className="text-gray-800 font-medium text-lg">
                  {bannerPicture ? "Image Selected" : "Select jpg png or jpeg"}
                </span>
                <div>
                  {bannerPicture ? (
                    <button
                      onClick={handleUploadBanner}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      Upload
                    </button>
                  ) : (
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                      Upload
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* End Banner Picture Upload Popup */}
      </div>
      <Footer />
    </div>
  );
};

export default withPrivate(Profile);
