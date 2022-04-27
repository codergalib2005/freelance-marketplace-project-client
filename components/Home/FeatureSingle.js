{/* eslint-disable-next-line @next/next/no-img-element */}
import React from "react";
const FeatureSingle = ({ feature }) => {
  const { img, title } = feature;
  return (
    <div className="shadow-lg rounded-lg">
      <div className=" rounded-lg">
   
        <img className='rounded-lg' src={img} alt="image" />
      </div>
      <div className="text-left flex justify-between px-2 py-4">
        <p>{title}</p>
        <div className="bg-green-200 rounded-full w-8 h-8 flex justify-center items-center ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-6/12 cursor-pointer"
            src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-13.png"
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSingle;
