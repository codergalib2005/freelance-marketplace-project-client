/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Banner.module.css";
const Banner = () => {
  const [slider, setSlider] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    fetch("/banner/data.json")
      .then((res) => res.json())
      .then((data) => setSlider(data))
      .catch((err) => console.log(err));
    // Slider Customize____
    const lastIndex = slider.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slider]);
  useEffect(() => {
    let slide = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(slide);
    };
  }, [index]);
  return (
    <div className="banner_main_parent_box slider_screen ">
      <div className="banner_content">
        <div className="container-fluid mx-auto px-5">
          <div className="banner_content_wrapper flex items-center slider_screen">
            <div className="banner_content_left md:w-8/12 lg:w-6/12 ">
              <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100  leading-8 capitalize text-left">
                Welcome to Client <br />
                <span className=" py-3 inline-block">handle freelance</span>
                <br />
                market
              </h1>
              <p className="description text-md sx:text-lg font-medium text-gray-200 mt-5 leading-6">
                Grab your favourite service with an amazing price and facility.
                we are working and waitng for the worest project that we have
                made ever. if our project is not the best project then we will
                start strike againgst programming hero.
              </p>
              <button className="button mt-6 text-md py-2 px-12 border-2 border-black hover:border-white text-gray-50  bg-black hover:bg-transparent rounded-full transition-all duration-300 ease-in-out">
                Learn More
              </button>
            </div>
            <div className="banner_content_right md:w-4/12 lg:w-6/12 bg-red-600"></div>
          </div>
        </div>
      </div>
      <div className={`${styles.banner_main_box} `}>
        {slider.map((item, slideIndex) => {
          const { img, title, _id, bg } = item;
          let position = "nextSlide";
          if (slideIndex === index) {
            position = "activeSlide";
          }
          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === slider.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article
              style={{ background: `${bg}` }}
              className={`${position} slider_screen`}
              key={_id}
            >
              <div className="container-fluid hidden md:inline-block mx-auto px-5">
                <div className={styles.article_wrapper}>
                  <div className="article_left_side"></div>
                  <div className="article_right_side">
                    <img src={img} alt={title} />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
