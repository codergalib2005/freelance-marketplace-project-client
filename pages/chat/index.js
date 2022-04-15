/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */

// import React, { useState } from "react";
// import useAuth from "../../hooks/useAuth";
// import Footer from "../../components/Shared/Footer";
// import io from "socket.io-client";
// import Chat from "../../components/Chat/Chat";

// const socket = io.connect("http://localhost:5000/");

// const index = () => {
//   const { user } = useAuth();
//   const [username, setUsername] = useState("");
//   const [room, setRoom] = useState("");
//   const [showChat, setShowChat] = useState(false);
//   const joinRoom = () => {
//     if (username !== "" && room !== "") {
//       socket.emit("join_room", room);
//       setShowChat(true);
//     }
//   };
//   return (
//     <div className="feature-font ">
//       <div className="mt-12 grid place-items-center">
//         {!showChat ? (
//           <div className="joinChatContainer flex flex-col">
//             <h3 className="text-center text-2xl font-bold">Join a Chat</h3>
//             <input
//               className="w-72  mx-auto border mt-4 px-4 py-2 rounded-lg outline-none"
//               type="text"
//               placeholder="Jhon.."
//               onChange={(e) => setUsername(e.target.value)}
//               // defaultValue={user?.email}
//               // value={username}
//             />
//             <input
//               className="w-72 mx-auto border mt-2 px-4 py-2 rounded-lg outline-none"
//               type="text"
//               placeholder="Room ID.."
//               onChange={(e) => setRoom(e.target.value)}
//             />
//             <button
//               onClick={joinRoom}
//               className="bg-blue-400 text-white rounded-lg px-6 py-2 w-32 mx-auto mt-4"
//             >
//               Join A Room
//             </button>
//           </div>
//         ) : (
//           <Chat socket={socket} username={username} room={room} />
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default index;

import io from "socket.io-client";
import { useState } from "react";
import Chat from "../../components/Chat/Chat";
import Footer from "../../components/Shared/Footer";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";

const socket = io.connect("http://localhost:5000");

function ChatApp() {
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
    <div className="App  ">
      <nav className="mb-8 bg-gray-700 py-2 px-8 flex items-center justify-between">
        <div className="">
          <Link href="/" alt="logo">
            <a>
              <img
                className="w-24 md:w-36 lg:w-36 cursor-pointer  py-4"
                src="/banner/navbar/image/logo-white.png"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="">
            <input
              type="text"
              placeholder="Search ..."
              className="border px-4 py-2 rounded outline-none w-full"
            />
          </div>
          <div className="flex">
            <IconButton
              // size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              {/* <Badge badgeContent={4} color="error"> */}
              <MailIcon />
              {/* </Badge> */}
            </IconButton>
            <IconButton
              // size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              {/* <Badge badgeContent={17} color="error"> */}
              <NotificationsIcon />
              {/* </Badge> */}
            </IconButton>
            <IconButton
              // size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </div>
      </nav>
      {!showChat ? (
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
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
      <Footer />
    </div>
  );
}

export default ChatApp;
