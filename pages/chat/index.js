/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import io from "socket.io-client";
import React, { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Conversation from "../../components/Conversation/Conversation";
import Message from "../../components/Message/Message";
import MessengerNav from "../../components/MessangerNav/MessengerNav";
import AllUsers from "../../components/AllUsers/AllUsers";


const socket = io.connect("http://localhost:8900");

function ChatApp() {
  const { user } = useAuth();
  
  const [conversation, setCoversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const scrollRef = useRef();

// * add user for socket and get user for socket
  useEffect(() => {
    socket.emit("addUser", user.email);

    // * we can use them as online friend now
    socket?.on("getUsers", (users) => {
      // console.log(users);
    });
  }, [user.email]);

  // * create new conversation
  const createNewConversation= async(newUser)=>{
    const senderEmail = user?.email;
    const receiverEmail = newUser?.email;
    if (senderEmail !== receiverEmail){
      const newConversationOfUser= {
        senderEmail,
        receiverEmail
    }
    const res = await axios.post('http://localhost:8800/api/conversations/', newConversationOfUser)
    console.log(res);
    if(res.data.members){
       const res = await axios.get(
          "http://localhost:8800/api/conversations/" + user?.email
        );
        setCoversation(res.data);
    }
    
   else if(res.data.message){
      alert("You already have a conversation with this friend!")
    }
    }
    else{
      alert("You can not create conversation with yourself!")
      return
    }
    
  }

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

  // * get all users
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
         "http://localhost:8800/api/users"
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
          "http://localhost:8800/api/messages/" + currentChat?._id
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
      const res = await axios.post("http://localhost:8800/api/messages", message);
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
            <div className='chatMenuItem'
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
                <textarea
                  onChange={(e) => setNewMessage(e.target.value)}
                  id="text"
                  placeholder="Write your  message.... "
                  className="chatMessageInput"
                  onKeyPress={(e) => {
                    e.key === "Enter" && handleSendButton();
                  }}
                ></textarea>
                <button
                  className="chatBoxButtonSubmit"
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
                color: "lightblue",
                marginTop: "30px",
                padding: "20px",
              }}
            >
              Open a conversation
            </p>
          )}
        </div>
        {/* //* all user */}
        <div className="chatOnline">
          <div className="onlineWrapper">
            <p>All Users</p>
            <div
              style={{
                marginTop: "30px",
              }}
            >
              {allUsers.map((user, i) => (
                <div
                  key={i}
                  onClick={() => {
                    createNewConversation(user)
                  }}
                >
                  <AllUsers user={user}  />
                </div>
              ))}
               
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ChatApp;
