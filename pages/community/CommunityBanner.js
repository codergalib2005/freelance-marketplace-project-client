import React from 'react';

const CommunityBanner = () => {
    return (
        <div>
             <div className="bg-slate-200">
              <div className="container-fluid m-0">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <div className="">
                        <h4>Welcome to the Freelance <span>Community</span></h4>
                        <h5>Get access to upcoming events, exclusive content, the latest and greatest industry news, and more.</h5>
                        <button className="bg-green-500 border-2 hover:bg-emerald-50 border-green-500 px-6 py-2 text-lg font-medium  transition-all duration-500 hover:text-green-500 text-white rounded-md">Sign up now</button>
                    </div>
                    <div className="">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="w-full" src="/community/1_hero-artwork.jpg" alt="" />
                    </div>
                </div>
              </div>
             </div>
        </div>
    );
};

export default CommunityBanner;