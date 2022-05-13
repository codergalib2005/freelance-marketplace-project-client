/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import SideBarMenu from "./SideBarMenu";
import useAuth from "../../hooks/useAuth";

// icon and path distribute
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/user/manageUser",
        name: "Mange User",
        icon: <BsCartCheck />,
      },
    ],
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
    subRoutes: [
      {
        path: "/message/inbox",
        name: "Inbox ",
        icon: <FaUser />,
      },
      {
        path: "/message/send",
        name: "Send",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/analytics/earning",
    name: "Earning",
    icon: <BiAnalyse />,
  },
  {
    path: "/admin",
    name: "Admin",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/admin/makeAdmin",
        name: "Make Admin ",
        icon: <FaUser />,
      },
      {
        path: "/admin/manageAdmin",
        name: "Manage Admin",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/gig",
    name: "Gigs",
    icon: <BsCartCheck />,
    subRoutes: [
      {
        path: "/gig/totalGigs",
        name: "Total Gigs",
        icon: <FaUser />,
      },
      {
        path: "/gig/topGigs",
        name: "TOP Gig",
        icon: <FaUser />,
      },
      {
        path: "/gig/manageGig",
        name: "Manage Gig",
        icon: <FaUser />,
      },
    ],
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/editProfile",
        name: "Edit Profile",
        icon: <FaLock />,
      },
      {
        path: "/settings/manageProfile",
        name: "Manage Profile",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
  {
    path: "/sellers",
    name: "Sellers",
    icon: <AiFillHeart />,
    subRoutes: [
      {
        path: "/sellers/topSellers",
        name: "TOP Sellers ",
        icon: <FaUser />,
      },
      {
        path: "/sellers/manageSeller",
        name: "Manage Seller",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/buyers",
    name: "Buyers",
    icon: <AiFillHeart />,
    subRoutes: [
      {
        path: "/buyers/manageBuyers",
        name: "Manage Buyers",
        icon: <FaLock />,
      },
    ],
  },
];

const SideBar = ({ children }) => {
  const { toggle, isOpen, setIsOpen } = useAuth();

  // animation
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <div className="main-container ">
        <motion.div
          animate={{
            width: isOpen ? "225px" : "70px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar min-h-screen fixed top-0 left-0`}
          style={{ zIndex: "500" }}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <img src="https://i.ibb.co/Ssxh3cj/logo-white.png" alt="" />
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
          {/*  <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && <motion.input initial="hidden" animate="show" exit="hidden" variants={inputAnimation} type="text" placeholder="Search" />}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SideBarMenu
                    key={index}
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <Link href={route?.path} key={index}>
                  <a className="link" activeclassname="active">
                    <div className="icon">{route?.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text "
                        >
                          {route?.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </a>
                </Link>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
