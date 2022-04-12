import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <>
      <nav>
        <ul className="grid grid-rows-4">
          <li>
            <Link href="/" passHref>
              <a className="hover:text-green-400 text-lg py-4 px-6">Account</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="hover:text-green-400 text-lg py-4 px-6">Security</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="hover:text-green-400 text-lg py-4 px-6">
                Notification
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="hover:text-green-400 text-lg py-4 px-6">
                Payment methods
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="hover:text-green-400 text-lg py-4 px-6">Form W-9</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
