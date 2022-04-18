import React from "react";
import Refer from "../Refer/Refer";
import Banner from '../../components/Community/Banner'
import Cart from "../../components/Community/Cart";
import SocialUnit from "../../components/Community/SocialUnit";

const Coummunity = () => {
  return (
    <div className="bg-orange-100">
      <Banner/>
        <Cart/>
        <SocialUnit/>
      <Refer />
    </div>
  );
};

export default Coummunity;
