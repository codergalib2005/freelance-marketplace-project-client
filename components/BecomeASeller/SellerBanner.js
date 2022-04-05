import React from "react";
import styles from "../../styles/SellerBanner.module.css";

const SellerBanner = () => {
  return (
    <div className={styles.video_wrapper}>
      <video className={styles.video} playsinline autoPlay muted loop poster="cake.jpg">
        <source src="https://sg.fiverrcdn.com/packages_lp/cover_video.mp4" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className={`${styles.header} container-fluid`}>
        <h1 className=" text-white font-sans font-bold">Work Your Way</h1>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className=" text-white font-sans text-xl">You bring the skill. We'll make earning easy. Become a Seller</p>
        <button className="bg-green-500 py-3 px-8 font-bold mt-5 font-sans">Become a Seller</button>
      </div>
    </div>
  );
};

export default SellerBanner;
