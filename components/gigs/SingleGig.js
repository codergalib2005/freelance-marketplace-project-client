import Link from 'next/link';
import React from 'react';
import Moment from 'react-moment';
const SingleGig = ({ gig, gridColumn }) => {
  return (
    <>
      <Link passHref href={`/gig_search/gigdetails/${gig?._id}`}>
        <div style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.2)" }} className={`mb-3 rounded-lg overflow-hidden cursor-pointer ${gridColumn === "grid_row" && "gig_card_row"}`}>
          <div className={`${gridColumn === "grid_row" && "col-span-1"}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={gig?.gallery[0]} alt="" />
          </div>
          <div className={`${gridColumn === "grid_row" && "col-span-2 "} p-3`}>
            <div className=' py-2 mb-3'>
              <strong className='text-black border-b-2 border-[#e83a3b] pb-2 pr-3'><Moment fromNow ago>{gig?.date}</Moment> ago</strong>
            </div>
            <h4 className='text-black hover:text-blue-600 font-bold text-xl'>{gig?.gig_title?.slice(0, 60)}</h4>
            {/*  <p className='text-black font-normal text-base'>{gig?.description?.slice(0, 60)}...</p> */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleGig;