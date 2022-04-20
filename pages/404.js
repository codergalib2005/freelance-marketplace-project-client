import React from "react";
import Image from "next/image";
import image from "../public/93271-page-not-found.gif";
import Header from "../components/Shared/Header";
const errorPage = () => {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="flex justify-center">
        <Image src={image} alt="" />
      </div>
    </>
  );
};

export default errorPage;
