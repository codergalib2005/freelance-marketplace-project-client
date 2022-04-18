import React from "react";
import Refer from "../Refer/Refer";
import Banner from '../../components/Community/Banner'
import Cart from "../../components/Community/Cart";

const Coummunity = () => {
  return (
    <div className="bg-orange-100">
      <Banner/>
        <Cart/>
      <Refer />
    </div>
  );
};

export default Coummunity;
