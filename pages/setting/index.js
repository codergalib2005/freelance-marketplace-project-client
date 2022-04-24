import React from "react";
import Menu from "../../components/Setting/Menu";
import AccountSetting from "../../components/Setting/AccountSetting/AccountSetting";
import HeaderTop from "../../components/Shared/HeaderTop";
import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";

const Setting = () => {
  return (
    <div>
      <div>
        <HeaderTop />
        <Header />
      </div>
      <div className="container grid grid-cols-4 gap-8">
        <div>
          <Menu />
        </div>
        <div className="col-span-3 shadow-lg p-6">
          <AccountSetting />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Setting;
