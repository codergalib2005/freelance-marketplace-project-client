import { Rate } from 'antd';
import React from 'react';


const Review = () => {
  
  const user = {
    banner: "https://themesbrand.com/symox/layouts/assets/images/profile-bg-1.jpg",
    avatar: "https://themesbrand.com/symox/layouts/assets/images/users/avatar-5.jpg",
    name: "User Name",
    profession: "Front End Web Developer",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum debitis quo eaque tenetur consequuntur esse ratione animi minus consequatur, quisquam unde blanditiis consectetur. Et voluptatum neque autem impedit quos sint! className",
    gender: "female"
  }
  const { banner, avatar, name, profession, about, gender } = user;
  return (
    <div className='py-6'>
      <div className='p-6 shadow-lg mb-4'>
        <div className='flex'>
          <div>
            <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-l-blue-900 shadow-md'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              {avatar && <img className='w-full h-full' src={avatar} />}
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              {!avatar && <img className='w-full h-full' src={gender === "mail" ? "/profile/boy_avatar.png" : "/profile/girl_avatar.png"} />}
            </div>
          </div>
          <div className='flex justify-around items-start pl-5 flex-col'>
            <strong className='text-xl font-bold text-gray-800'>{name}</strong>
            <span className='text-gray-700 text-md'>{profession}</span>
            <Rate disabled allowHalf defaultValue={2.5} />
            <button className='bg-gray-50 hover:bg-gray-800 text-gray-800 hover:text-gray-50 border border-gray-800 rounded-md py-2 px-6 transition-all duration-300 ease-linear'>Contact Me</button>
          </div>
        </div>
        <div className='p-4 border border-gray-400 mt-5 rounded-md'>
          <div></div>
          <div>
            <p className='text-gray-400 text-md pb-3'>Hi I am shahnaz Ahmad and I am here to give you the services of both iOS and Android app development. I have 8+ years of experience in mobile app development. I can develop any app based on client requirements as I have worked from basics to advanced concepts of app development. I am here to take your ideas and make them a reality. I will also help you to make these realities even better. I work with full dedication and treat my s work as my own.
              Contact me without hesitation with your requirements.</p>
            <p className='text-gray-400 text-md pt-3 border-t border-gray-500'>Hi I am shahnaz Ahmad and I am here to give you the services of both iOS and Android app development. I have 8+ years of experience in mobile app development. I can develop any app based on client requirements as I have worked from basics to advanced concepts of app development. I am here to take your ideas and make them a reality. I will also help you to make these realities even better. I work with full dedication and treat my s work as my own.
              Contact me without hesitation with your requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;