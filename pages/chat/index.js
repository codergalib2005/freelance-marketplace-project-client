/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import io from "socket.io-client";
import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
// import { IconButton } from "@mui/material";
// import { AccountCircle } from "@mui/icons-material";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MailIcon from "@mui/icons-material/Mail";
import useAuth from "../../hooks/useAuth";
import Conversation from "../../components/Conversation/Conversation";
import Message from "../../components/Message/Message";
import MessengerNav from "../../components/MessangerNav/MessengerNav";

const socket = io.connect("http://localhost:5000");

function ChatApp() {
  const { user } = useAuth();
  console.log(user?.displayName);

  return (
    <div className="  ">
      <MessengerNav />
      <div className="">
        <div className="joinChatContainer  grid place-items-center my-36">
          <h3>Join a Chat</h3>
          <input
            type="text"
            placeholder="Jhon.."
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Room ID.."
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>

        <div className=" grid place-items-center">
          {/* <Chat socket={socket} username={username} room={room} /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ChatApp;
