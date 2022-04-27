import Link from 'next/link';
import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';
const HeaderBottom = () => {
    return (
        <div className='shadow-md py-1 z-40 header_bottom'>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className='flex items-center'>
                        <button className='text-3xl text-gray-900'>
                            <BiMenuAltLeft />
                        </button>
                    </div>
                    <div>
                        <ul className='flex items-center'>
                            <li className='mx-2 relative main_button'>
                                <span className="flex items-center font-medium">
                                    Pages
                                    <span className='pl-3 text-lg'>
                                        <MdKeyboardArrowDown />
                                    </span>
                                </span>
                                <ul className='absolute top-6 text-md left-0 w-40 bg-white shadow-lg dropdown_button'>
                                    <li className='py-2 border-b border-gray-500 px-6 hover:bg-[#ec4899]'><Link href="/"><a className="block">Page 1</a></Link></li>
                                    <li className='py-2 border-b border-gray-500 px-6 hover:bg-[#ec4899]'><Link href="/"><a className="block">Page 2</a></Link></li>
                                    <li className='py-2 border-b border-gray-500 px-6 hover:bg-[#ec4899]'><Link href="/"><a className="block">Page 3</a></Link></li>
                                    <li className='py-2 border-b border-gray-500 px-6 hover:bg-[#ec4899]'><Link href="/"><a className="block">Page 4</a></Link></li>
                                    <li className='py-2 px-6 hover:bg-[#ec4899]'><Link href="/"><a className="block">Page 5</a></Link></li>
                                </ul>
                            </li>
                            <li className='mx-2 relative main_button'>
                                <span className="flex items-center font-medium">
                                    Learning
                                    <span className='pl-3 text-lg'>
                                        <MdKeyboardArrowDown />
                                    </span>
                                </span>
                                <ul className='absolute top-6 text-md left-0 w-40 bg-white shadow-lg dropdown_button'>
                                    <li className='py-2 border-b border-gray-500 px-6 hover:bg-[#ec4899]'><Link href="/"><a className="block">Learning 1</a></Link></li>
                                    <li className='py-2 border-b border-gray-500 px-6 hover:bg-[#ec4899]'><Link href="/"><a className="block">Learning 2</a></Link></li>
                                    <li className='py-2 border-b border-gray-500 px-6 hover:bg-[#ec4899]'><Link href="/"><a className="block">Learning 3</a></Link></li>
                                    <li className='py-2 px-6 hover:bg-[#ec4899]'><Link href="/"><a className="block">Learning 4</a></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <button>Others</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;
// Complete dropdown menu
