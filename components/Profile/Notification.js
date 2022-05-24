/* eslint-disable @next/next/no-img-element */
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
  const handlePreview = (data) => { }
  // setPreview(data);
  return (
    <div className="flex">
      <div>
        {notifications.map((notification, index) => (
          <div
            key={index}
            onClick={() => setPreview(notification)}
            style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.1)" }}
            className="my-2 p-1 transition-all border mx-2 rounded-md duration-200 cursor-pointer"
          >
            <div className="grid grid-cols-5 gap-3 p-2 w-[300px]">
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
            <div className="flex justify-between my-4 gap-2">
              <button className="bg-[#2a3254] text-white shadow-sm hover:shadow-xl duration-200 transition-all py-2 px-4 rounded-[30px]">
                Previous
              </button>
              <button className="bg-[#2a3254] text-white shadow-sm hover:shadow-xl duration-200 transition-all py-2 px-4 rounded-[30px]">
                Next
              </button>
            </div>
            <div>
              <div className="notification-header-title  capitalize text-2xl text-gray-800 my-2">
                <strong>{preview?.title}</strong>
              </div>
              <div className="notification-header-date">
                {format(preview?.date)}
              </div>
              <div className="mb-2">{preview?.message}</div>
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
