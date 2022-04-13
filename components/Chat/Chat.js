import React, { useEffect, useState } from "react";
// import "./Chat.css";

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      const id = document.getElementById("messageID");
      id.value = "";
    }
  };

  useEffect(() => {
    socket.on("received_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        {messageList.map((message, ind) => (
          <div
            key={ind}
            className="message"
            id={username === message.author ? "you" : "other"}
          >
            <div className="">
              <div className="message-content">
                <p>{message.message}</p>
              </div>
              <div className="message-meta">
                <p id="time">{message.time}</p>
                <p id="author">{message.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          id="messageID"
          onChange={(e) => setCurrentMessage(e.target.value)}
          type="text"
          placeholder="write message.."
          onKeyPress={(e) => {
            e.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
};

export default Chat;
