/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React, { useEffect, useState } from "react";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState([]);
  const userInfo = user[0];

  useEffect(() => {
    const friendEmail = conversation?.members?.find(
      (m) => m !== currentUser?.email
    );
    const getUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/users/" + friendEmail
        );
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        src="https://img.freepik.com/free-vector/stomachache-concept-illustration_114360-6591.jpg?t=st=1650191457~exp=1650192057~hmac=04d4b6a4d5fd33245cc64d055c2dbf32bf3bc654a9f91dda2a3b7cbf4bdf86fd&w=740"
        alt=""
        className="conversationImg"
      />
      <p className="conversationName">{userInfo?.name}</p>
    </div>
  );
};

export default Conversation;
