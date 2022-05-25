/* eslint-disable @next/next/no-img-element */
import React from "react";

const AllUsers = ({ user }) => {
  return (
    <div className="conversation text-white lg:text-gray-800">
      <span className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center text-center text-xl text-white bg-emerald-500 uppercase">
        {user?.name?.slice(0, 1)}
      </span>
      <p className="conversationName">{user?.name}</p>
    </div>
  );
};

export default AllUsers;
