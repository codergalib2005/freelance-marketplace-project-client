/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
const TryIt = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5">
                    <div>
                        <h1 className='text-4xl text-[#273067] font-bold'>Let customers see a good friend in you</h1>
                        <p className='py-3 text-lg font-medium text-[#2a3254]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel veniam odio cum aliquam fugit fugiat aut iste delectus vitae itaque!</p>
                        <div className='grid grid-cols-2 gap-4 items-center justify-between'>
                           <Link href="/gig_search"> 
                           <button className='bg-[#273067] flex items-center rounded-full py-1 px-4 justify-between text-white font-bold'>Try It
                                <span className='text-[#273067] bg-white w-8 h-8 rounded-full flex items-center justify-center text-xl '><AiOutlineDoubleRight /></span>
                            </button>
                            </Link>
                         <Link href="https://www.youtube.com/">
                         <div className='flex items-center justify-between pr-4 font-bold text-md md:text-lg'>
                                <button className='bg-white flex items-center justify-center rounded-full shadow-xl text-3xl shadow-[#ee7c18] text-[#ee7c18] w-10 h-10 '><BsFillPlayFill /> </button>
                                Play Video
                            </div>
                         </Link>
                        </div>
                    </div>
                    <div className='py-8 sm:py-0'>
                        <img className='rounded-full' src="/home/freelancer.jpg" alt="" />
                    </div>
                    <div>
                        <div className='flex items-center justify-between flex-col sm:flex-row lg:flex-col w-full col-span-2'>
                            <div className="py-4 text-center  px-12 ">
                                <div>
                                    <span>
                                        <img className="mx-auto w-28" src="/home/one.png" alt="" />
                                    </span>
                                </div>
                                <strong className="text-lg font-bold text-[#2a3254]">User Monitoring</strong>
                                <p className="text-md  text-medium">Lorem ipsum dolor sit.</p>
                            </div>
                            <div className="py-4 text-center shadow-md px-12 rounded-lg">
                                <div>
                                    <span>
                                        <img className="mx-auto w-28" src="/home/two.png" alt="" />
                                    </span>
                                </div>
                                <strong className="text-lg font-bold text-[#2a3254]">Market Analysis</strong>
                                <p className="text-md  text-medium">Lorem ipsum dolor sit.</p>
                            </div>
                            <div className="py-4 text-center  px-12 ">
                                <div>
                                    <span>
                                        <img className="mx-auto w-28" src="/home/three.png" alt="" />
                                    </span>
                                </div>
                                <strong className="text-lg font-bold text-[#2a3254]">Busness Consulting</strong>
                                <p className="text-md  text-medium">Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TryIt;