import React from 'react';
import { BiTime } from 'react-icons/bi';
import { MdPriceCheck } from 'react-icons/md';
const GigItem = ({ item }) => {
  console.log(item)
  const { avatar, title, userName, attachment, basic_delivery, basic_price, view, comment } = item;
  const cardHeader = {
    background: `url(${attachment[0]}) no-repeat center center`,
    backgroundSize: 'cover',
    height: '240px',
  }
  const cardStyle = {
    borderTopLeftRadius: "9px",
    borderTopRightRadius: "9px",
    overflow: "hidden"
  }
  return (
    <div className='shadow-md border border-gray-400' style={cardStyle}>
      <div style={cardHeader}></div>
      <div className='p-4 mt-3'>
        <div className='relative -top-14'>
          <div className='w-20 top-0 left-0 h-20 border-4 bg-white border-white rounded-full overflow-hidden absolute'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className='w-full h-full' src={avatar} alt={title} />
          </div>
        </div>
        <div className='pt-5'>
          <strong className='text-lg font-bold text-gray-900'>{userName}</strong>
          <p className='text-md font-medium py-2'>{title}</p>
          <div className='flex items-center py-3 justify-between'>
            <div className='flex items-center'>
              <span className='bg-purple-600 p-2 mr-3 text-lg text-white'><MdPriceCheck /></span>
              <span className='text-gray-800 text-md'>{basic_price}</span>
            </div>
            <div className='flex items-center mr'>
              <span className='bg-green-600 p-2 mr-3 text-lg text-white'><BiTime /></span>
              <span className='text-gray-800 text-md'>{basic_delivery}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigItem;