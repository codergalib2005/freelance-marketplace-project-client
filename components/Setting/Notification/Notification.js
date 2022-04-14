import React from "react";

const Notification = () => {
  return (
    <>
      <div className="my-4 grid grid-cols-4 gap-8">
        <div className="text-left">
          <h6 className="font-semibold mb-2">NOTIFICATIONS</h6>
          <p>
            For important updates regarding your Fiverr activity, certain
            notifications cannot be disabled.
          </p>
        </div>
        <div className="text-left">
          <ul>
            <li className="font-semibold mb-2">Type</li>
            <li>Inbox Messages</li>
            <li>Order Messages</li>
            <li>Order Updates</li>
            <li>Buyer Requests</li>
            <li>My Gigs</li>
            <li>My Account</li>
            <li>To-dos</li>
          </ul>
        </div>
        <div className="text-left">
          <ul>
            <li className="font-semibold mb-2">Email</li>
            <li>
              <input type="checkbox" className="checked:bg-blue-500 " />
            </li>
            <li>
              <input type="checkbox" className="checked:bg-blue-500 " />
            </li>
            <li>
              <input type="checkbox" className="checked:bg-blue-500 " />
            </li>
          </ul>
        </div>
        <div className="text-left">
          <ul>
            <li className="font-semibold mb-2">Mobile</li>
            <li>
              <input type="checkbox" className="checked:bg-blue-500 " />
            </li>
            <li>
              <input type="checkbox" className="checked:bg-blue-500 " />
            </li>
            <li>
              <input type="checkbox" className="checked:bg-blue-500 " />
            </li>
            <li>
              <input type="checkbox" className="checked:bg-blue-500 " />
            </li>
            <li>
              <input type="checkbox" className="checked:bg-blue-500 " />
            </li>
            <li>
              <input type="checkbox" className="checked:bg-blue-500 " />
            </li>
            <li>
              <input type="checkbox" className="checked:bg-blue-500 " />
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="text-left">
          <ul>
            <li className="font-semibold mb-2">REAL-TIME NOTIFICATIONS</li>
            <li>Enable/disable real-time notifications</li>
            <li>Enable/disable sound</li>
          </ul>
        </div>
        <div className="text-left">
          <ul>
            <li>
              <label
                htmlFor="toogleA"
                className="my-3 flex items-center cursor-pointer"
              >
                <div className="relative">
                  <input id="toogleA" type="checkbox" className="sr-only" />
                  <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                  <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
              </label>
            </li>
            <li>
              <label
                htmlFor="toogleA"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <input id="toogleA" type="checkbox" className="sr-only" />
                  <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                  <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
              </label>
            </li>
          </ul>
        </div>
        <div className=" ">
          <button className="h-2/4 inline-block px-4 py-1.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default Notification;
