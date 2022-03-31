import React, { useEffect, useState } from 'react';
import styles from '../../styles/Banner.module.css';
const Banner = () => {
  const [slider, setSlider] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    fetch('/banner/data.json')
      .then(res => res.json())
      .then(data => setSlider(data))
      .catch(err => console.log(err));
    // Slider Customize____
    const lastIndex = slider.length - 1;
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slider]);
  useEffect(() => {
    let slide = setInterval(() => {
      setIndex(index + 1)
    }, 4000)
    return (() => {
      clearInterval(slide)
    })
  }, [index])
  return (
    <div className='banner_main_parent_box slider_screen'>
      <div className="banner_content">
        <div className="container-fluid mx-auto px-5">
          <div className="banner_content_wrapper flex items-center slider_screen">
            <div className='banner_content_left md:w-8/12 lg:w-6/12 '>
              <h1 className='title text-3xl sx:text-4xl xl:text-6xl font-bold text-white'>Welcome to Client handle <span className='italic_text'>freelance market</span></h1>
              <p className='description text-md sx:text-lg font-medium text-white mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestiae explicabo fugit debitis libero quae iste odit autem repellendus. Quis corrupti possimus error aliquid, atque debitis numquam delectus tempore perferendis!</p>
              <button className='button mt-3 text-lg py-2 px-8 border-2 text-gray-50 hover:bg-transparent bg-gray-900 rounded-full transition-all duration-300 ease-in-out'>Go Now</button>
            </div>
            <div className='banner_content_right md:w-4/12 lg:w-6/12'></div>
          </div>
        </div>
      </div>
      <div className={`${styles.banner_main_box} `}>
        {
          slider.map((item, slideIndex) => {
            const { img, title, _id, bg } = item;
            let position = "nextSlide";
            if (slideIndex === index) {
              position = "activeSlide"
            }
            if (slideIndex === index - 1 || (index === 0 && slideIndex === slider.length - 1)) {
              position = "lastSlide";
            }
            return (
              <article style={{ background: `${bg}` }} className={`${position} slider_screen`} key={_id}>
                <div className="container-fluid hidden md:inline-block mx-auto px-5">
                  <div className={styles.article_wrapper}>
                    <div className='article_left_side'></div>
                    <div className='article_right_side'>
                      <img src={img} alt={title} />
                    </div>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </div>
  );
};

export default Banner;