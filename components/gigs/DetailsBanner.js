import React from 'react';
import { Navigation, Thumbs } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from 'swiper/react';
const DetailsBanner = ({ gig,setActiveThumb }) => {
  return (
    <>
      <div>
        <div>
          <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
          >
            {
              gig?.gallery?.map((item, index) => (
                <SwiperSlide key={index}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item} alt={item} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default DetailsBanner;