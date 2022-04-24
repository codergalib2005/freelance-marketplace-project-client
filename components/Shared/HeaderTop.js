import React, { useEffect, useState } from 'react';
import ThisTime from './ThisTime';
import { FaPinterestSquare } from 'react-icons/fa';
import { BsYoutube, BsDribbble } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
const HeaderTop = () => {


    return (
        <div className='bg-[#ec4899]'>
            <div className='container mx-auto px-4 py-1'>
                <div className='flex items-center justify-between'>
                    <div className='text-[#FFF] text-lg'>
                        <ThisTime />
                    </div>
                    <div>
                        <ul className='flex items-center'>
                            <li className="header_top_social__menu"><FaPinterestSquare /></li>
                            <li className="header_top_social__menu"><BsYoutube /></li>
                            <li className="header_top_social__menu"><BsDribbble /></li>
                            <li className="header_top_social__menu"><AiFillLinkedin /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;