import React, { useState } from 'react';
import { GrUserManager } from 'react-icons/gr';
const Profile = () => {
  const [tabs, setTabs] = useState("about")
  const user = {
    banner: "https://themesbrand.com/symox/layouts/assets/images/profile-bg-1.jpg",
    avatar: "https://themesbrand.com/symox/layouts/assets/images/users/avatar-5.jpg",
    name: "User Name",
    profession: "Front End Web Developer",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum debitis quo eaque tenetur consequuntur esse ratione animi minus consequatur, quisquam unde blanditiis consectetur. Et voluptatum neque autem impedit quos sint! className"
  }
  const { banner, avatar, name, profession, about } = user;
  const profileBanner = {
    background: `url(${banner}) no-repeat center center`,
    backgroundSize: 'cover',
    height: '200px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: "10px"
  }
  return (
    <div className='text_no_select'>
      <div className="container-fluid mx-auto py-12">
        <div className="profile_wrapper flex">
          {/* -------------Left Side Box------------- */}
          <div className="w-8/12">
            {/* Left side Header */}
            <div className='shadow-md flex'>
              <div className={`w-4/12 flex items-center justify-center flex-col py-2 border-b-2 cursor-pointer ${tabs === "about" ? "bg-[#c3d9ec] text-[#c3d9ec] border-[#3980c0]" : "border-gray-500 bg-50"}`} onClick={() => setTabs("about")}>
                <span className='text-xl'>
                  <GrUserManager />
                </span>
                <span className={`text-base font-medium ${tabs === "about" ? "text-[#3980c0]" : "text-gray-800"}`}>About</span>
              </div>
              <div className={`w-4/12 flex items-center justify-center flex-col py-2 border-b-2 cursor-pointer ${tabs === "task" ? "bg-[#c3d9ec] text-[#c3d9ec] border-[#3980c0]" : "border-gray-500 bg-50"}`} onClick={() => setTabs("task")}>
                <span className='text-xl text-gray-800'>
                  <GrUserManager />
                </span>
                <span className={`text-base font-medium ${tabs === "task" ? "text-[#3980c0]" : "text-gray-800"}`}>Tasks</span>
              </div>
              <div className={`w-4/12 flex items-center justify-center flex-col py-2 border-b-2 cursor-pointer ${tabs === "review" ? "bg-[#c3d9ec] text-[#c3d9ec] border-[#3980c0]" : "border-gray-500 bg-50"}`} onClick={() => setTabs("review")}>
                <span className='text-xl text-gray-800'>
                  <GrUserManager />
                </span>
                <span className={`text-base font-medium ${tabs === "review" ? "text-[#3980c0]" : "text-gray-800"}`}>Review</span>
              </div>
            </div>
            {/* Left side Bdy */}
            <div>
              {tabs === "about" && (
                <div>About Items</div>
              )}
              {tabs === "task" && (
                <div>Tasks Items</div>
              )}
              {tabs === "review" && (
                <div>Review Items</div>
              )}
            </div>
          </div>
          {/* -------------Right Side Box------------- */}
          <div className='w-4/12'>
            {/* User Profile Box */}
            <div className='shadow-md'>
              <div className='' style={profileBanner}></div>
              <div className='p-3'>
                <div className='relative -top-16'>
                  <div className='w-20 h-20 rounded-full border-4 border-white overflow-hidden absolute'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className='w-full h-full' src={avatar} alt="" />
                  </div>
                </div>
                <div className='pt-4'>
                  <strong className="block text-xl text-gray-700">{name}</strong>
                  <span className="block text-lg font-normal">{profession}</span>
                  <p className="block text-base text-gray-500 text-justify">{about}</p>
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