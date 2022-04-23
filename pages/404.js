import React from "react";
import Image from "next/image";
import image from "../public/93271-page-not-found.gif";
import Header from "../components/Shared/Header";
import Footer from '../components/Shared/Footer';
import HeaderTop from "../components/Shared/HeaderTop";

const errorPage = () => {
  return (
    <>
      <div>
        <HeaderTop />
        <Header></Header>
      </div>
      <div className="flex justify-center">
        <Image src={image} alt="" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default errorPage;
