import React, { useState } from 'react';
import { Navigation, Thumbs, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from 'swiper/react';
const SliderBannerImage = ({ gig }) => {
  const [activeThumb, setActiveThumb] = useState();
  return (
    <>
      <div>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          autoplay={true}
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          thumbs={{ swiper: activeThumb }}
          className="main_slider"
        >
          {
            gig?.gallery?.map((item, index) => (
              <SwiperSlide key={index} className="slider_item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="h-96" src={item} alt={item} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="mt-4 cursor-pointer">
          <Swiper
            // onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Thumbs, Autoplay]}
          >
            {
              gig?.gallery?.map((item, index) => (
                <SwiperSlide key={index}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="h-36" src={item} alt={item} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SliderBannerImage;