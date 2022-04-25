import React from 'react';
import Link from "next/link";
import styles from '../../styles/about-Banner.module.css';

const Banner = () => {
  return (
    <div className={` ${styles.header_container}`}>
      <div className={styles.header_section}>
        <div className="container m-auto flex justify-between items-center text-gray-700">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
          
            <img src="/navbar/image/logo-white.png" alt="" />
        
          </div>
          <ul className="hidden md:flex items-center  text-base font-semibold text-white cursor-pointer">
            <Link href="/">
              <a className="hover:text-green-400 text-lg font-bold py-4 px-6">Home</a>
            </Link>
            <Link href="/profile">
              <a className="hover:text-green-400 text-lg font-bold py-4 px-6">Profile</a>
            </Link>
            <Link href="/become&seller">
              <a className="hover:text-green-400 text-lg font-bold py-4 px-6">Become a Seller</a>
            </Link>
          </ul>
        </div>
        <div className='px-8 py-24'>
          <div>
            <h2 className='sx:text-3xl text-5xl font-bold  text-white'>About Workfleek<br /> Why We Are Best?</h2>
            <p className='text-white mt-4 text-base'>Workfleek is the best freelancing market place.Workfleek u provide all <br />  about sevices like web design, web development, programming & teach, <br />  degital marketing, data entry etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
