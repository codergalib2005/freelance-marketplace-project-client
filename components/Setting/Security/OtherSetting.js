import React from "react";

const OtherSetting = () => {
  return (
    <>
      <hr />
      <div className="flex space-x-6 py-4">
        <p>PHONE VERIFICATION</p>
        <p className="flex justify-center w-3/4">
          Your phone is verified with Fiverr. Click Edit to change your phone
          number
        </p>
        <button
          type="button"
          className="h-1/6 inline-block px-4 py-1.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Edit
        </button>
      </div>
      <div className="flex space-x-6 py-4">
        <p className="w-2/6">SECURITY QUESTION</p>
        <p className="flex justify-center">
          By creating a security question, you will add an additional layer of
          protection for your revenue withdrawals and for changing your
          password.
        </p>
        <button
          type="button"
          className="h-1/6 inline-block px-4 py-1.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Edit
        </button>
      </div>
      <div className="flex space-x-6 py-4">
        <p className="w-2/6">
          TWO FACTOR AUTHENTICATION <br />
          <small className="text-green-600">RECOMMENDED</small>
        </p>
        <div className="flex justify-center">
          <div className="form-check form-switch">
            <input
              className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-green bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked76"
              checked
            />
          </div>
          <p>
            To help keep your account secure, we`ll ask you to submit a code
            when using a new device to log in. We`ll send the code via SMS,
            email, or Fiverr notification.
          </p>
        </div>
      </div>
    </>
  );
};

export default OtherSetting;