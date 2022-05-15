import React from 'react';
import { FaRegCommentDots, FaRegIdBadge } from "react-icons/fa";

const KeepItConnect = () => {
    return (
        <div>
            <div className='container px-4 mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12'>
                <div className='p-10'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://i.ibb.co/pb3Vdf8/4077407.jpg" alt="" />
                </div>
                <div className='mt-20 p-5'>
                    <h2 className='text-3xl font-semibold'>Be In Control. keep In Contact.</h2>
                    <p className='text-lg mt-3'>Use Our Site & tools to work efficiently with your freeleancer. Shear files, Real time chat, monitor prograss, and so much more. </p>
                    <div className='flex gap-10 mt-6'>
                        <div>
                            <FaRegCommentDots style={{ fontSize: '50px', color: '#800080' }} />
                            <div>
                                <h4 className='text-lg font-semibold mt-3'>Live Chat</h4>
                                <p className='text-base mt-2 leading-6'>You can Live Chat With Your freeleancer. You also can ask Question, Shear Feedback, Constant Update on the prograss of Your Work.</p>
                            </div>
                        </div>
                        <div>
                            <FaRegIdBadge style={{ fontSize: '50px', color: '#6278df' }} />
                            <div>
                                <h4 className='text-lg font-semibold mt-3'>Mobile App</h4>
                                <p className='text-base mt-2 leading-6'>You need Install our Mobile App. Manage Your Project at the touch your finger. The mobile app makes on the go collaboreation a breeze.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeepItConnect;