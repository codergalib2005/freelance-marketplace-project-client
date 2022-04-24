import React from "react";
import Menu from "../../components/Setting/Menu";
import AccountSettingCom from "../../components/Setting/AccountSetting/AccountSetting";

const AccountSetting = () => {
  return (
    <>
      <div className="container grid grid-cols-4 gap-8">
        <div>
          <Menu />
        </div>
        <div className="col-span-3 shadow-lg p-6">
          <AccountSettingCom />
        </div>
      </div>
    </>
  );
};

export default AccountSetting;
