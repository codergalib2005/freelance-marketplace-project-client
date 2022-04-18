import React from "react";
import Refer from "../Refer/Refer";
import Banner from '../../components/Community/Banner'
import Cart from "../../components/Community/Cart";
import SocialUnit from "../../components/Community/SocialUnit";
import Features from "../../components/Community/Features";

const Coummunity = () => {
  return (
    <div>
      <Banner/>
        <Cart/>
        <SocialUnit/>
        <Features/>
      <Refer />
    </div>
  );
};

export default Coummunity;
