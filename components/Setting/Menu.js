import Link from 'next/link';
import React from 'react';

const Menu = () => {
    return (
        <>
                <nav className='grid place-items-stretch'>
                    <ul>
                        <Link><li>Account</li></Link>
                        <Link><li>Security</li></Link>
                        <Link><li>Notification</li></Link>
                        <Link><li>Payment methods</li></Link>
                        <Link><li>Form W-9</li></Link>
                    </ul>
                </nav>
            </> 
    );
};

export default Menu;