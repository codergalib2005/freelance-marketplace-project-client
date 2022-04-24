import React from "react";
import Menu from "../../components/Setting/Menu";
import NotificationCom from "../../components/Setting/Notification/Notification";

const Notification = () => {
  return (
    <>
      <div className="container grid grid-cols-4 gap-8">
        <div>
          <Menu />
        </div>
        <div className="col-span-3 shadow-lg p-6">
          <NotificationCom />
        </div>
      </div>
    </>
  );
};

export default Notification;
