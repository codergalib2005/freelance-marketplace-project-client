import React from "react";
import Menu from "../../components/Setting/Menu";
import AccountSetting from "../../components/Setting/AccountSetting/AccountSetting";

const setting = () => {
  return (
    <div className="container grid grid-cols-4 gap-8">
      <div>
        <Menu />
      </div>
      <div>
        <AccountSetting />
      </div>
    </div>
  );
};

export default setting;
