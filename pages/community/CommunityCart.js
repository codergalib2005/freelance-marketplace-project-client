import React from 'react';

const CommunityCart = () => {
    return (
        <div>
            <div className="container mx-auto px-8 md:px-0 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                    <div className=" bg-red-700 opacity-80 rounded-lg  ">
                        <div className=" my-12 px-6 ">
                        <h5 className="text-3xl text-white">Events</h5>
                        <h4 className="text-2xl text-white">Explore current and upcoming Freelance events</h4>
                        </div>
                        <div>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className=" h-[30rem] w-full " src="/community/hand-2.png" alt="" />
                        </div>
                    </div>
                    <div className="">

                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityCart;