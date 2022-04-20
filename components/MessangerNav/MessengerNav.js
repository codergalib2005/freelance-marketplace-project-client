/* eslint-disable @next/next/no-img-element */
import { IconButton } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { AccountCircle } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";
import Link from "next/link";

const MessengerNav = () => {
  return (
    <nav className=" bg-gray-700 py-2 px-8 flex items-center justify-between">
      <div className="">
        <Link href="/" alt="logo">
          <a>
            <img
              className="w-24 md:w-36 lg:w-36 cursor-pointer  py-4"
              src="/banner/navbar/image/logo-white.png"
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="">
          <input
            type="text"
            placeholder="Search ..."
            className="border px-4 py-2 rounded outline-none w-full"
          />
        </div>
        <div className="flex">
          <IconButton
            // size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            {/* <Badge badgeContent={4} color="error"> */}
            <MailIcon />
            {/* </Badge> */}
          </IconButton>
          <IconButton
            // size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            {/* <Badge badgeContent={17} color="error"> */}
            <NotificationsIcon />
            {/* </Badge> */}
          </IconButton>
          <IconButton
            // size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default MessengerNav;
