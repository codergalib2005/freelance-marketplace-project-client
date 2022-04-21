/* eslint-disable @next/next/no-img-element */
import React from 'react';

const AllUsers = ({user}) => {
    return (
        <div className="conversation">
      <img
        src="https://img.freepik.com/free-vector/stomachache-concept-illustration_114360-6591.jpg?t=st=1650191457~exp=1650192057~hmac=04d4b6a4d5fd33245cc64d055c2dbf32bf3bc654a9f91dda2a3b7cbf4bdf86fd&w=740"
        alt=""
        className="conversationImg"
      />
      <p className="conversationName">{user?.name}</p>
    </div>
    );
};

export default AllUsers;