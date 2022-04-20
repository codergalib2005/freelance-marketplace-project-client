/* eslint-disable @next/next/no-img-element */
import React from "react";

const Message = ({ own, message }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://img.freepik.com/free-photo/surprised-unshaven-man-holds-phone-shows-empty-space-points-index-finger-wears-spectacles-brown-jumper-keeps-mouth-opened-isolated-blue-background_273609-34132.jpg?t=st=1650191457~exp=1650192057~hmac=f4e94fd4042ac2948a64c95912c6d6dc3e4bd9b10be63fabafe628117a467fd4&w=740"
          alt=""
        />

        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, error.
        </p>
      </div>
      <div className="messageBottom">
        <p>1 hour ago</p>
      </div>
    </div>
  );
};

export default Message;
