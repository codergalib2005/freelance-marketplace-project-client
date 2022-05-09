/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Mail from "./Mail";
import Notification from "./Notification";
import { motion } from "framer-motion";
const Sendbox = () => {
  const [current, setCurrent] = useState("notification");
  const menus = [
    {
      image: "/dashboard/notification.gif",
      title: "Notification",
      link: "notification",
    },
    {
      image: "/dashboard/mail.gif",
      title: "Mail",
      link: "mail",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src="/dashboard/notification-banner.gif"
            alt="Notifiction Banner"
          />
        </div>
        <div className="flex pr-3 lg:pr-6 items-center justify-center">
          <div className="w-full min-h-[400px]">
            <div className="bg-white shadow-2xl rounded-lg flex items-center justify-start p-2">
              {menus?.map((menu, index) => (
                <motion.div
                  //   whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setCurrent(menu.link)}
                  key={index}
                  className={`flex items-center border-2 mr-4 cursor-pointer select-none rounded-md overflow-hidden border-transparent ${
                    current === menu.link && "border-[#65ecff]"
                  }`}
                >
                  <img
                    src={menu.image}
                    alt={menu.title}
                    className="h-14 w-14"
                  />
                </motion.div>
              ))}
            </div>
            <div>
              {current === "notification" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white shadow-2xl mt-3 flex items-center justify-start p-2 rounded-lg border-t-8 border-[#65ecff]"
                >
                  <Notification />
                </motion.div>
              )}
              {current === "mail" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white shadow-2xl mt-3 flex items-center justify-start p-2 rounded-lg border-t-8 border-[#65ecff]"
                >
                  <Mail />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sendbox;
