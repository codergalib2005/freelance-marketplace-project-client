import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import HeaderBottom from "../../components/Shared/HeaderBottom";
import HeaderTop from "../../components/Shared/HeaderTop";
import { popularsupport } from "../../components/support/Support";

console.log(popularsupport);

const SupportId = () => {
  const router = useRouter();
  const supportId = router?.query?.supportId;

  var mathced = popularsupport.find((ps) => ps.name === supportId);
  const { title, description, title2, description2 } = mathced || {};

  return (
    <div>
      <header>
        <div>
          <HeaderTop />
          <Header />
          <HeaderBottom />
        </div>
      </header>
      <div className="my-12 mx-16 text-center">
        <p className="text-3xl font-semibold text-gray-700 my-6">{title}</p>
        <p className=" text-left text-gray-500 my-6">{description}</p>
        <p className="text-3xl font-semibold text-gray-700 my-6">{title2}</p>
        <p className=" text-left text-gray-500 my-6">{description2}</p>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SupportId;
