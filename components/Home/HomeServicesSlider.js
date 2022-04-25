/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/HomeServicesSlider.module.css";

const HomeServicesSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "block", background: "red", borderRadius: "50%" }} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "block", background: "green", borderRadius: "50%" }} onClick={onClick} />;
  }

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToScroll: 4,
    initialSlide: 0,
    pauseOnHover: true,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className=" bg-slate-50 py-28">
      <div className="container md:w-full mx-auto px-4">
        <h2 className={`${styles.header_content} text-4xl font-bold`}>Popular professional services</h2>
        <Slider {...settings}>
          <div className={styles.img_main_slider}>
            <img style={{ display: "inline-block", margin: "30px 0", width: "95%" }} src="https://i.ibb.co/MfGFHgM/logo-design-2x.png" alt="" />
            <div className={styles.img_slider}>
              <h2 className="text-2xl text-orange-400">Logo Design</h2>
              <p className="text-xl">Build your brand</p>
            </div>
          </div>
          <div className={styles.img_main_slider}>
            <img style={{ display: "inline-block", margin: "30px 0", width: "95%" }} src="https://i.ibb.co/kJjrpVh/wordpress-2x.png" alt="" />
            <div className={styles.img_slider}>
              <h2 className="text-2xl text-green-600">WordPress Theme</h2>
              <p className="text-xl">Customize your site</p>
            </div>
          </div>
          <div className={styles.img_main_slider}>
            <img style={{ display: "inline-block", margin: "30px 0", width: "95%" }} src="https://i.ibb.co/D9hj57c/voiceover-2x.png" alt="" />
            <div className={styles.img_slider}>
              <h2 className="text-2xl text-black">Voice Over</h2>
              <p className="text-xl">Share your message</p>
            </div>
          </div>
          <div className={styles.img_main_slider}>
            <img
              style={{ display: "inline-block", margin: "30px 0", width: "95%" }}
              src="https://i.ibb.co/wrZ3wJp/animated-explainer-2x.png"
              alt=""
            />
            <div className={styles.img_slider}>
              <h2 className="text-2xl text-lime-300">Video Explainer</h2>
              <p className="text-xl">Manage your audience</p>
            </div>
          </div>
          <div className={styles.img_main_slider}>
            <img style={{ display: "inline-block", margin: "30px 0", width: "95%" }} src="https://i.ibb.co/rFXjfT3/social-2x.png" alt="" />
            <div className={styles.img_slider}>
              <h2 className="text-2xl text-blue-500">Social Media</h2>
              <p className="text-xl">Reach more customers</p>
            </div>
          </div>
          <div className={styles.img_main_slider}>
            <img style={{ display: "inline-block", margin: "30px 0", width: "95%" }} src="https://i.ibb.co/mC481yV/seo-2x.png" alt="" />
            <div className={styles.img_slider}>
              <h2 className="text-2xl text-indigo-500">SEO</h2>
              <p className="text-xl">Unlock growth online</p>
            </div>
          </div>
          <div className={styles.img_main_slider}>
            <img style={{ display: "inline-block", margin: "30px 0", width: "95%" }} src="https://i.ibb.co/2s4jPNY/illustration-2x.png" alt="" />
            <div className={styles.img_slider}>
              <h2 className="text-2xl text-orange-600">Illustration</h2>
              <p className="text-xl">Colors your dreams</p>
            </div>
          </div>
          <div className={styles.img_main_slider}>
            <img style={{ display: "inline-block", margin: "30px 0", width: "95%" }} src="https://i.ibb.co/9340zfb/translation-2x.png" alt="" />
            <div className={styles.img_slider}>
              <h2 className="text-2xl text-emerald-300">Translation</h2>
              <p className="text-xl">Go global</p>
            </div>
          </div>
          <div className={styles.img_main_slider}>
            <img style={{ display: "inline-block", margin: "30px 0", width: "95%" }} src="https://i.ibb.co/9y8wMnm/data-entry-2x.png" alt="" />
            <div className={styles.img_slider}>
              <h2 className="text-2xl text-red-600">Data Entry</h2>
              <p className="text-xl">Learn your business</p>
            </div>
          </div>
          <div className={styles.img_main_slider}>
            <img style={{ display: "inline-block", margin: "30px 0", width: "95%" }} src="https://i.ibb.co/0c5S0W7/book-covers-2x.png" alt="" />
            <div className={styles.img_slider}>
              <h2 className="text-2xl text-fuchsia-700">Book cover</h2>
              <p className="text-xl">Showcase your story</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeServicesSlider;
