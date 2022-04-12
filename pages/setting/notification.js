import React from "react";
import Menu from "../../components/Setting/Menu";
import Notification from "../../components/Setting/Notification/Notification";

const notification = () => {
  return (
    <>
      <div className="container grid grid-cols-4 gap-8">
        <div>
          <Menu />
        </div>
        <div>
          <Notification />
        </div>
      </div>
    </>
  );
};

export default notification;
