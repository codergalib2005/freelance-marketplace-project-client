import React from "react";

const WhoweAre = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl md:text-4xl font-semibold text-[#2a3254]">
        Who We Are
      </h1>
      <div className="container mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 px-5 gap-12 mt-12 items-center">
        <div className="mt-2">
          <p className="text-lg leading-8 text-justify xl:-skew-x-12">
            Workfleek is the best freelancing market place. We are try to best
            service provide. Online marketplaces are information technology
            companies that act as intermediaries by connecting buyers and
            sellers. we provide all of freelancing services like grafix design,
            web development, programming , data entry etc.Online Security and
            Safety. Scammers may try to use the internet to steal your personal
            information or trick you into sending them money. Learn how to stay
            safe online.
          </p>
        </div>
        <div className="lg:ml-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-lg shadow-2xl"
            src="https://i.ibb.co/6X3p21Y/about-image-02-1-350x300.jpg"
            alt="About Image"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoweAre;
