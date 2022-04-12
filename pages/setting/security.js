import React from "react";
import Menu from "../../components/Setting/Menu";
import Securiry from "../../components/Setting/Security/Security";

const security = () => {
  return (
    <>
      <div className="container grid grid-cols-4 gap-8">
        <div>
          <Menu />
        </div>
        <div className="col-span-3 shadow-lg p-6">
          <Securiry />
        </div>
      </div>
    </>
  );
};

export default security;
