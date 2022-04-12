import React from 'react';
import Moment from 'react-moment';

const SingleGig = ({ gig, gridColumn }) => {
  console.log(gig);
  return (
    <div className={`mb-3 shadow-lg shadow-[#0a1929] p-2 rounded-lg overflow-hidden ${gridColumn === "grid_row" && "gig_card_row"}`}>
      <div className={`${gridColumn === "grid_row" && "col-span-1"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/login/register.png" alt="" />
      </div>
      <div className={`${gridColumn === "grid_row" && "col-span-2 "}`}>
        <div className=' py-2 mb-3'>
          <strong className='text-white border-b-2 border-[#e83a3b] pb-2 pr-3'><Moment fromNow ago>{gig?.date}</Moment></strong>
        </div>
        <h4 className='text-white font-bold text-xl'>{gig?.gig_title?.slice(0, 40)}</h4>
        <p className='text-white font-normal text-base'>{gig?.description?.slice(0, 60)}...</p>

      </div>
    </div>
  );
};

export default SingleGig;