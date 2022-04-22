import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <>
      <nav>
        <ul className="grid grid-rows-4">
          <li className="flex items-center mx-8 space-x-2">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-6 profile"
                src="/menu/manage-profile.svg"
                alt=""
              />
            </div>
            <Link href="/setting/account">
              <a className="hover:text-blue-600 text-lg   ">Account</a>
            </Link>
          </li>
          <li className="flex items-center mx-8 space-x-2">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-6 profile"
                src="/menu/security-setting.svg"
                alt=""
              />
            </div>
            <Link href="/setting/security">
              <a className="hover:text-blue-600 text-lg py-2  ">Security</a>
            </Link>
          </li>
          <li className="flex items-center mx-8 space-x-2">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-6 profile"
                src="/menu/notifications-active.svg"
                alt=""
              />
            </div>
            <Link href="/setting/notification">
              <a className="hover:text-blue-600 text-lg  ">Notification</a>
            </Link>
          </li>
          <li className="flex items-center mx-8 space-x-2">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-6 profile"
                src="/menu/payment-card.svg"
                alt=""
              />
            </div>
            <Link href="/">
              <a className="hover:text-blue-600 py-2 text-lg ">
                Payment methods
              </a>
            </Link>
          </li>
          <li className="flex items-center mx-8 space-x-2">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-6 profile" src="/menu/businessman.svg" alt="" />
            </div>
            <Link href="/ourTeam">
              <a className="hover:text-blue-600 text-lg ">Our Team</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
