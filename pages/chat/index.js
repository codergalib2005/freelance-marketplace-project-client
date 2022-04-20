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
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef();

  // * get the conversation user specific
  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/conversations/" + user?.email
        );
        setCoversation(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversation();
  }, [user?.email]);

  // * get messages for specific id
  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/messages/" + currentChat?._id
        );
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessage();
  }, [currentChat?._id]);
  console.log(messages);

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
              style={{
                marginTop: "30px",
              }}
            >
              {conversation.map((c, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setCurrentChat(c);
                  }}
                >
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
              <p className="chatWrapperP">Start Conversation</p>
              <div className="chatBoxTop">
                {/* <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message /> */}
                {messages.map((m, i) => (
                  <div key={i} ref={scrollRef}>
                    <Message message={m} own={m.sender === user?.email} />
                  </div>
                ))}
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
