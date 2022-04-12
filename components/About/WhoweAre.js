import React from 'react';

const WhoweAre = () => {
    return (
        <div className='bg-neutral-100 p-20'>
            <h1 className='text-center text-2xl font-semibold'>Who We Are</h1>
            <div className='container mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12 mt-12'>
                <div className='mt-2'>
                    <p className='text-base leading-8'>Workfleek is the best freelancing market place. We are try to best service provide. Online marketplaces are information technology companies that act as intermediaries by connecting buyers and sellers. we provide all of freelancing services like grafix design, web development, programming , data entry etc.Online Security and Safety. Scammers may try to use the internet to steal your personal information or trick you into sending them money. Learn how to stay safe online.</p>
                </div>
                <div className='lg:ml-10'>
                    <img src="https://i.ibb.co/6X3p21Y/about-image-02-1-350x300.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default WhoweAre;