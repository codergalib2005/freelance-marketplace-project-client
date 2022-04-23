import React, { useState } from "react";
import Menu from "../../components/Setting/Menu";
import AccountSetting from "../../components/Setting/AccountSetting/AccountSetting";

const setting = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);

  const getValue = () => {
    setShow(false);
  };

  return (
    <div className="container grid md:grid-cols-4  gap-8 my-10 relative">
      <div
        className={`${
          !show
            ? "hidden   md:block "
            : " block translate-y-2 duration-1000 md:translate-y-0"
        }  h-screen md:h-0 lg:h-0 bg-white md:bg-none lg:bg-none z-10`}
      >
        <Menu getValue={getValue} show={show} />
      </div>
      <div className="col-span-3 shadow-lg p-3 py-8 absolute md:sticky">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            onClick={() => setShow(true)}
            className="w-14 hover:cursor-pointer  md:sticky left-48 -top-[32rem] md:hidden  "
            src="/menu/arrow.svg"
            alt=""
          />
        </div>
        <AccountSetting />
      </div>
    </div>
  );
};

export default setting;
