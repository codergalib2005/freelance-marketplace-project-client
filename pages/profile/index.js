import { Input } from "antd";
import React, { useReducer, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import About from "../../components/Profile/About";
import Review from "../../components/Profile/Review";
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
  console.log(state.editor);
  const [tabs, setTabs] = useState("about");
  const [professionText, setProfessionText] = useState(
    "Web Application developer"
  );
  const user = {
    banner:
      "https://themesbrand.com/symox/layouts/assets/images/profile-bg-1.jpg",
    avatar:
      "https://themesbrand.com/symox/layouts/assets/images/users/avatar-5.jpg",
    name: "User Name",
    profession: "Front End Web Developer",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum debitis quo eaque tenetur consequuntur esse ratione animi minus consequatur, quisquam unde blanditiis consectetur. Et voluptatum neque autem impedit quos sint! className",
  };
  const { banner, avatar, name, profession, about } = user;
  const profileBanner = {
    background: `radial-gradient(#3981c06d, #e83a3a6d),url(${banner}) no-repeat center center`,
    backgroundSize: "cover",
    height: "200px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };
  const profileSelectableCard = {
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  };
  console.log(professionText);
  return (
    <div className="single_user_profile_section text_no_select px-8 feature-font">
      <div className="container-fluid px-5 xl:px-0  mx-auto py-12">
        <div className="mb-16 flex justify-end ">
          <div className="flex gap-6 ">
            <input
              type="text"
              placeholder="search here!"
              className="border border-blue-400 px-4 py-1 rounded-lg outline-none"
            />
            <button className="px-8 py-2 rounded-lg bg-[#fa7962]">
              Hire Me
            </button>
            <div className="w-8 h-8 rounded-full border-4 border-white ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full rounded-full hover:scale-105 h-full transition-all duration-300 ease-linear"
                src={avatar}
                alt=""
              />
            </div>
          </div>
        </div>
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
                  <About />
                </div>
              )}
              {tabs === "task" && <div>Tasks Items</div>}
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
              <div className="" style={profileBanner}></div>
              <div className="p-3">
                <div className="relative -top-16">
                  <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden absolute">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full hover:scale-105 h-full transition-all duration-300 ease-linear"
                      src={avatar}
                      alt=""
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <strong className="block text-xl text-gray-700">
                    {name}
                  </strong>
                  {state.editor === "PROFESSION_EDIT" ? (
                    <Input
                      placeholder="input with clear icon"
                      allowClear
                      onChange={(e) => setProfessionText(e)}
                    />
                  ) : (
                    <span className="block text-lg font-normal">
                      {professionText}{" "}
                      <span
                        className="text-lg pl-3 cursor-pointer text-[#e83a3b]"
                        onClick={() => dispatch({ type: "PROFESSION_EDIT" })}
                      >
                        <FiEdit />
                      </span>
                    </span>
                  )}
                  <p className="block text-base text-gray-500 text-justify">
                    {about}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
