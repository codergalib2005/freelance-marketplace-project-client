import React from "react";
import Menu from "../../components/Setting/Menu";
import AccountSetting from "../../components/Setting/AccountSetting/AccountSetting";

const setting = () => {

  
  return (
   <div >
      <div className=" container my-10  grid grid-cols-4 gap-8">
      <div  >
        <Menu />
      </div>
      <div className="col-span-3 p-3 shadow-lg py-8">
        <AccountSetting />
      </div>
    </div>
   </div>
  );
};

export default setting;
