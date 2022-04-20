import React from "react";
import Banner from '../../components/Community/Banner'
import Cart from "../../components/Community/Cart";
import SocialUnit from "../../components/Community/SocialUnit";
import Features from "../../components/Community/Features";
import Building from "../../components/Community/Building";
import Testimonial from "../../components/About/Testimonial";
import SellerFooter from "../../components/BecomeASeller/SellerFooter";

const Coummunity = () => {
  return (
    <div>
      <Banner/>
        <Cart/>
        <SocialUnit/>
        <Features/>
        <Building/>
      <Testimonial/>
      <SellerFooter/>
    </div>
  );
};

export default Coummunity;
