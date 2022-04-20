/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import io from "socket.io-client";
import React, { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Conversation from "../../components/Conversation/Conversation";
import Message from "../../components/Message/Message";
import MessengerNav from "../../components/MessangerNav/MessengerNav";
const socket = io.connect("http://localhost:5000");

function ChatApp() {
  const { user } = useAuth();
  const [conversation, setCoversation] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const scrollRef = useRef();

  return (
    <div className="  ">
      <MessengerNav />
      {/* //* main messenger part */}
      <div className="mesenger mainChatPart">
        {/* //? chat conversation part design */}
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              placeholder="Search your friends"
              className="chatMenuInput"
            />
            <div
              onClick={() => setCurrentChat("true")}
              className=""
              style={{
                marginTop: "30px",
              }}
            >
              <Conversation />
              <Conversation />
              <Conversation />
              {/* {conversation.map((c, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setCurrentChat(c);
                  }}
                >
                  <Conversations conversation={c} currentUser={user} />
                </div>
              ))} */}
            </div>
          </div>
        </div>
        {/* //* chat message part  */}
        <div className="chatBox">
          {currentChat ? (
            <div className="chatBoxWrapper">
              <p className="chatWrapperP">Start Conversation</p>
              <div className="chatBoxTop">
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message />
                {/* {messages.map((m, i) => (
                  <div key={i} ref={scrollRef}>
                    <Message message={m} own={m.sender === user?._id} />
                  </div>
                ))} */}
              </div>
              <div className="chatBoxBottom">
                <input
                  onChange={(e) => setNewMessage(e.target.value)}
                  id="text"
                  placeholder="Write your  message.... "
                  className="chatMessageInput"
                  // onKeyPress={(e) => {
                  //   e.key === "Enter" && handleSendButton();
                  // }}
                ></input>
                <button
                  className="chatBoxButtonSubmit"
                  // onClick={handleSendButton}
                >
                  Send
                </button>
              </div>
            </div>
          ) : (
            <p
              style={{
                fontSize: "48px",
                color: "lightblue",
                marginTop: "30px",
                padding: "20px",
              }}
            >
              Open a conversation
            </p>
          )}
        </div>
        {/* <div className="chatOnline">
          <div className="onlineWrapper">online</div>
        </div> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ChatApp;
