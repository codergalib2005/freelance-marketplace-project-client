import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='p-12'>
            <ul className='text-center text-base font-semibold'>
                <Link href="#"> 
                 <a className='text-2xl font-medium py-6 px-8'>Who We Are</a>
                </Link>
                <Link href="#"> 
                 <a className='text-2xl font-medium py-6 px-8'>Meet Our Team</a>
                </Link>
            </ul>
        </div>
    );
};

export default Header;