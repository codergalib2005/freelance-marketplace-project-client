/* eslint-disable @next/next/no-img-element */
import React from "react";
import { format } from "timeago.js";

const Message = ({ own, message, user }) => {
  console.log(own, message, user);
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <span className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center text-center text-xl text-white bg-emerald-500 uppercase">
          {user?.name?.slice(0, 1)}
        </span>
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom text-gray-700">
        <p>{format(message.createdAt)}</p>
      </div>
    </div>
  );
};

export default Message;
