import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import axios from "axios";
const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    const getNotifictions = async () => {
      try {
        const res = await axios.get(
          "https://intense-forest-11415.herokuapp.com/auth/notifictions",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setNotifications(res?.data?.result);
        setPreview(res?.data?.result[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getNotifictions();
  }, []);
  const handlePreview = (data) => {
    // setPreview(data);
  };
  console.log(preview);
  return (
    <div className="flex">
      <div>
        {notifications.map((notification) => (
          <div
            onClick={() => setPreview(notification)}
            className="my-4 shadow-md hover:shadow-xl p-1 transition-all duration-200 cursor-pointer"
          >
            <div className="grid grid-cols-5 gap-3 py-2 w-[300px]">
              <div className="h-14 col-span-1">
                <img
                  src={notification?.image}
                  alt="notification"
                  className="notification-image w-full h-full"
                />
              </div>
              <div className="col-span-4">
                <div className="notification-header">
                  <div className="notification-header-title text-gray-800">
                    <strong>{notification?.title}</strong>
                  </div>
                  <div className="notification-header-date">
                    {format(notification?.date)}
                  </div>
                </div>
              </div>
            </div>
            <div className="notification-body pt-2">
              {notification?.message?.slice(0, 30)}
            </div>
          </div>
        ))}
      </div>
      <div>
        {preview && (
          <div className="p-2">
            <div className="flex gap-2">
              <button className="bg-[#ec4899] text-white shadow-sm hover:shadow-xl duration-200 transition-all py-2 px-4 rounded-full">
                Previous
              </button>
              <button className="bg-[#ec4899] text-white shadow-sm hover:shadow-xl duration-200 transition-all py-2 px-4 rounded-full">
                Next
              </button>
            </div>
            <div>
              <div className="notification-header-title  capitalize text-2xl text-gray-800">
                <strong>{preview?.title}</strong>
              </div>
              <div className="notification-header-date">
                {format(preview?.date)}
              </div>
              <div className="">{preview?.message}</div>
            </div>
            <div>
              <img
                src={preview?.image}
                alt="notification"
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
