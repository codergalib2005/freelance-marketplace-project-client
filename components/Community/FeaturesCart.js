import React from "react";

const FeaturesCart = ({ title, dec }) => {
  return (
    <div className="border-[1px] border-orange-200 py-4 px-8 bg-orange-200 hover:bg-orange-300 shadow-md transition-all duration-500 styled">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-20 rounded-full"
          src="/community/tick gif.gif"
          alt=""
        />
      </div>
      <h4 className="text-2xl font-semibold my-4 text">{title}</h4>
      <h4 className="text-base font-semibold pb-4 opacity-40 text">{dec}</h4>
    </div>
  );
};

export default FeaturesCart;
