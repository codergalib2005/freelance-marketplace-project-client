import React from "react";
import useAuth from "../../hooks/useAuth";
import RefaringSteps from "./RefaringSteps";
import SharePartOfRefer from "./SharePartOfRefer";

const Refer = () => {
  const { user } = useAuth();
  console.log(user);
  
  return (
    <div>
      <div
        className="h-[500px] "
        style={{
          backgroundImage: "url(refer/banner.jpg)",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <div className="container mx-auto">
          {" "}
          <div className="flex justify-center  pt-12 ">
            {" "}
            {/* eslint-disable-next-line @next/next/no-img-element */}{" "}
            <img
              className="w-36 bg-gray-200 rounded-full h-full"
              src="refer/user.png"
              alt=""
            />{" "}
          </div>{" "}
          <div className="text-center my-6">
            {" "}
            <h4 className="text-4xl text-white font-semibold">
              {" "}
              Invite Friends & <br /> You Both Get Up To $100{" "}
            </h4>{" "}
            <h4 className="text-lg text-white font-semibold my-4">
              {" "}
              Introduce your friends to the easiest way to get things done{" "}
            </h4>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <SharePartOfRefer/>
      <RefaringSteps/>
    </div>
  );
};

export default Refer;
