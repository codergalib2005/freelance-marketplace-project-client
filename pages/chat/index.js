/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import io from "socket.io-client";
import React, { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Conversation from "../../components/Conversation/Conversation";
import Message from "../../components/Message/Message";
import MessengerNav from "../../components/MessangerNav/MessengerNav";
import AllUsers from "../../components/AllUsers/AllUsers";
import { message } from "antd";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import HeaderTop from "../../components/Shared/HeaderTop";
import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";

const warning = () => {
  message.warning("You already have a conversation with this friend!");
};
const warning2 = () => {
  message.warning("You can not create conversation with yourself!");
};

const socket = io.connect("https://freelance-app-socket-server.herokuapp.com");

function ChatApp() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const openforMenu1 = () => {
    setOpen(!open);
    setOpen2(false);
  };
  const openforMenu2 = () => {
    setOpen2(!open2);
    setOpen(false);
  };

  const [conversation, setCoversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const scrollRef = useRef();
  // * add user for socket and get user for socket
  useEffect(() => {
    socket.emit("addUser", user?.email);

    // * we can use them as online friend now
    socket?.on("getUsers", (users) => {
      // console.log(users);
    });
  }, [user?.email]);

  // * create new conversation
  const createNewConversation = async (newUser) => {
    const senderEmail = user?.email;
    const receiverEmail = newUser?.email;
    if (senderEmail !== receiverEmail) {
      const newConversationOfUser = {
        senderEmail,
        receiverEmail,
      };
      const res = await axios.post(
        "https://freelancer-chat-app-api.herokuapp.com/api/conversations/",
        newConversationOfUser
      );

      if (res.data?.members) {
        const res = await axios.get(
          "https://freelancer-chat-app-api.herokuapp.com/api/conversations/" +
            user?.email
        );
        setCoversation(res.data);
        setOpen2(false);
      } else if (res.data.message) {
        warning();
        setOpen2(false);
        return;
      }
    } else {
      warning2();
      return;
    }
  };

  // * get the conversation user specific
  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get(
          "https://freelancer-chat-app-api.herokuapp.com/api/conversations/" +
            user?.email
        );
        setCoversation(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversation();
  }, [user?.email]);

  // * get all users
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          "https://freelancer-chat-app-api.herokuapp.com/api/users"
        );
        setAllUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  // * get messages for specific id
  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await axios.get(
          "https://freelancer-chat-app-api.herokuapp.com/api/messages/" +
            currentChat?._id
        );
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessage();
  }, [currentChat?._id]);

  //* post new messages to database and server
  const handleSendButton = async (e) => {
    // e.preventDefault();
    const message = {
      sender: user?.email,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverEmail = currentChat?.members?.find(
      (member) => member !== user.email
    );

    socket.emit("sendMessage", {
      senderEmail: user.email,
      receiverEmail,
      text: newMessage,
    });
    try {
      const res = await axios.post(
        "https://freelancer-chat-app-api.herokuapp.com/api/messages",
        message
      );
      setMessages([...messages, res.data]);
      const id = document.getElementById("text");
      id.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  // * get message message from socket io
  useEffect(() => {
    socket?.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderEmail,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, [arrivalMessage]);

  // * update texts from socket
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members?.includes(
        arrivalMessage.sender || arrivalMessage.senderEmail
      ) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  // * scroll to bottom
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  //* conversation click
  const conversationClick = (value) => {
    setCurrentChat(value);
    setOpen(false);
  };
  /*
  HiMenuAlt2
  */
  return (
    <div className="  ">
      {/* <HeaderTop /> */}
      <Header />
      {/* //* main messenger part */}
      <div className="mesenger mainChatPart bg-[#EDEEF7]">
        <span onClick={openforMenu1} className="text-3xl block lg:hidden menu1">
          {" "}
          <HiMenuAlt2 />
        </span>
        {/* //? chat conversation part design */}
        <div className="chatMenu ">
          <div className={open ? "chatMenuWrapper2 " : "chatMenuWrapper open"}>
            <p className="text-md font-semibold text-white lg:text-gray-800 mt-8 text-center">
              Your Current Conversations
            </p>

            <div
              className="chatMenuItem"
              style={{
                marginTop: "30px",
              }}
            >
              {conversation.map((c, i) => (
                <div key={i} onClick={() => conversationClick(c)}>
                  <Conversation conversation={c} currentUser={user} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* //* chat message part  */}
        <div className="chatBox">
          {currentChat ? (
            <div className="chatBoxWrapper">
              <p className="chatWrapperP text-gray-700">Start Conversation</p>
              <div className="chatBoxTop ">
                {messages.map((m, i) => (
                  <div key={i} ref={scrollRef}>
                    <Message
                      message={m}
                      user={user}
                      own={m.sender === user?.email}
                    />
                  </div>
                ))}
              </div>
              <div className="chatBoxBottom">
                <textarea
                  onChange={(e) => setNewMessage(e.target.value)}
                  id="text"
                  placeholder="Write your  message.... "
                  className="chatMessageInput text-gray-700"
                  onKeyPress={(e) => {
                    e.key === "Enter" && handleSendButton();
                  }}
                ></textarea>
                <button
                  className="chatBoxButtonSubmit bg-purple-500 text-white"
                  onClick={handleSendButton}
                >
                  Send
                </button>
              </div>
            </div>
          ) : (
            <p
              style={{
                fontSize: "48px",
                color: "#5534A5",
                marginTop: "20px",
                padding: "20px",
              }}
            >
              Open a conversation
            </p>
          )}
        </div>
        {/* //* all user */}
        <div className="chatOnline ">
          <div
            className={
              open2 ? "onlineMenuWrapper2 " : "onlineMenuWrapper open2"
            }
          >
            <p className="text-white lg:text-gray-800 text-center font-bold text-2xl mt-6">
              All Users
            </p>
            <p className="text-white lg:text-gray-800 text-center font-medium">
              click any user to start conversation
            </p>
            <div
              style={{
                marginTop: "30px",
              }}
            >
              {allUsers.map((user, i) => (
                <div
                  key={i}
                  onClick={() => {
                    createNewConversation(user);
                  }}
                >
                  <AllUsers user={user} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <span
          onClick={openforMenu2}
          className="text-3xl block lg:hidden menu2 "
        >
          {" "}
          <HiMenuAlt3 />
        </span>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ChatApp;
