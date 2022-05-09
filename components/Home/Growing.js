/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Growing = () => {
    return (
        <div className='px-4'>
            <div className='container mx-auto py-4 rounded-md my-10 px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 items-center bg-[#f3e5c2] py-4 px-4 rounded-lg'>
                    <div className='col-span-2'>
                        <h1 className='text-2xl sm:text-4xl font-bold text-[#2a3254]'>
                            Find the talent needed to get your business growing.</h1>
                        <p className='text-lg py-3 text-[#2a3254] font-medium'>Advertise your jobs to millions of monthly users and search 15.8 million CVs</p>
                        <Link passHref href="/gig_search">
                            <button className='text-lg font-bold text-white bg-[#2a3254] py-2 px-5 rounded-full'>Explore all jobs</button>
                        </Link>
                    </div>
                    <div className='col-span-1'>
                        <img src="/home/growing.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Growing;