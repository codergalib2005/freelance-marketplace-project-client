/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Footer from "../../components/Shared/Footer";
import io from "socket.io-client";
import Chat from "../../components/Chat/Chat";

const socket = io.connect("http://localhost:5000/");

const index = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  return (
    <div className="feature-font ">
      <div className="mt-12 grid place-items-center">
        {!showChat ? (
          <div className="joinChatContainer flex flex-col">
            <h3 className="text-center text-2xl font-bold">Join a Chat</h3>
            <input
              className="w-72  mx-auto border mt-4 px-4 py-2 rounded-lg outline-none"
              type="text"
              placeholder="Jhon.."
              onBlur={(e) => setUsername(e.target.value)}
              // defaultValue={user?.email}
              // value={username}
            />
            <input
              className="w-72 mx-auto border mt-2 px-4 py-2 rounded-lg outline-none"
              type="text"
              placeholder="Room ID.."
              onChange={(e) => setRoom(e.target.value)}
            />
            <button
              onClick={joinRoom}
              className="bg-blue-400 text-white rounded-lg px-6 py-2 w-32 mx-auto mt-4"
            >
              Join A Room
            </button>
          </div>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default index;
