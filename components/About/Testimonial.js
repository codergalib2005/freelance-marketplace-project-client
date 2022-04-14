import React from 'react';
import { FaAmericanSignLanguageInterpreting, FaStudiovinari, FaThinkPeaks } from 'react-icons/fa';
import styles from '../../styles/Testimonial.module.css';


const Testimonial = () => {
    return (
        <div className='container-fluid mx-auto lg:p-20 text-center'>
            <div className={`${styles.testimonial_container}`}>
                <div className='flex'>
                    <div>
                        <FaThinkPeaks style={{ fontSize: '40px', marginTop: '15px' }} />
                    </div>
                    <div className='text-left ml-4'>
                        <h3 className='text-lg font-semibold mt-3'>Our Mission</h3>
                        <p>To bring employers and freeleancers together from around the world & provide best services.</p>
                    </div>
                </div>
            </div>
            <div className='mt-6 lg:ml-16 md:ml-8'>
                <div className={`${styles.testimonial_container}`}>
                    <div className='flex'>
                        <div>
                            <FaStudiovinari style={{ fontSize: '36px', marginTop: '15px' }} />
                        </div>
                        <div className='text-left ml-4'>
                            <h3 className='text-lg font-semibold mt-3'>Our Target</h3>
                            <p>Connect, collaborate and get work done in a safe and fexiable online environment & workpleace.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6 lg:ml-40 md:ml-20'>
                <div className={`${styles.testimonial_container}`}>
                    <div className='flex'>
                        <div>
                            <FaAmericanSignLanguageInterpreting style={{ fontSize: '45px', marginTop: '15px' }} />
                        </div>
                        <div className='text-left ml-4'>
                            <h3 className='text-lg font-semibold mt-3'>Our vission</h3>
                            <p>To help build a better world thats interconnected for prosperity and wired for peace.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;