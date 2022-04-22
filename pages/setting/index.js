import React from "react";
import Menu from "../../components/Setting/Menu";
import AccountSetting from "../../components/Setting/AccountSetting/AccountSetting";

const setting = () => {

  
  return (
   <div className="container mx-auto lg:container lg:mx-0 ">
      <div className="grid grid-cols-4 gap-8">
      <div className="hidden lg:block" >
        <Menu />
      </div>
      <div className="col-span-3 p-3 shadow-lg ">
        <AccountSetting />
      </div>
    </div>
   </div>
  );
};

export default setting;
