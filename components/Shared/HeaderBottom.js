import Link from 'next/link';
import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
const HeaderBottom = () => {
    return (
        <div className='shadow-md py-1 z-40'>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className='flex items-center'>
                        <button className='text-3xl text-gray-900'>
                            <BiMenuAltLeft />
                        </button>
                    </div>
                    <div>
                        <ul className='flex items-center'>
                            <li className='mx-2 relative'>
                                Pages
                                <ul className='absolute top-10 text-md px-2 left-0 w-32 bg-white shadow-md'>
                                    <li className='py-2 border-b border-gray-500 hover:bg-red-600 '><Link href="/"><a>Page 1</a></Link></li>
                                    <li className='py-2 border-b border-gray-500 hover:bg-red-600 '><Link href="/"><a>Page 2</a></Link></li>
                                    <li className='py-2 border-b border-gray-500 hover:bg-red-600 '><Link href="/"><a>Page 3</a></Link></li>
                                    <li className='py-2 border-b border-gray-500 hover:bg-red-600 '><Link href="/"><a>Page 4</a></Link></li>
                                    <li className='py-2 border-b border-gray-500 hover:bg-red-600 '><Link href="/"><a>Page 5</a></Link></li>
                                </ul>
                            </li>
                            <li className='mx-2 relative'>
                                Learning
                                <ul className='absolute top-10 text-md px-2 left-0 w-32 bg-white shadow-md'>
                                    <li className='py-2 border-b border-gray-500 hover:bg-red-600 '><Link href="/"><a>Learning 1</a></Link></li>
                                    <li className='py-2 border-b border-gray-500 hover:bg-red-600 '><Link href="/"><a>Learning 2</a></Link></li>
                                    <li className='py-2 border-b border-gray-500 hover:bg-red-600 '><Link href="/"><a>Learning 3</a></Link></li>
                                    <li className='py-2 border-b border-gray-500 hover:bg-red-600 '><Link href="/"><a>Learning 4</a></Link></li>
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