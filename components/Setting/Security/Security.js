import React from "react";
import LoginDevice from "./LoginDevice";
import OtherSetting from "./OtherSetting";
import Updatepass from "./Updatepass";

const Security = () => {
  return (
    <>
      <div>
        <Updatepass />
        <OtherSetting />
        <LoginDevice />
      </div>
    </>
  );
};

export default Security;
