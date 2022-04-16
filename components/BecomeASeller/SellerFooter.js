/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { AiOutlineMail, AiOutlineArrowRight, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const SellerFooter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="footer text-white">
      <div className="row_footer container-fluid mx-auto">
        <div className="col_footer">
          <img className="img-responsive mb-10" src="https://i.ibb.co/Ssxh3cj/logo-white.png" alt="" />
          <p>
            Workfleek - Top Freelancer Marketplace WordPress Theme Dotem eiusmod tempor incune utnaem labore etdolore maignaiqua enim poskina ilukita
            ylokem lokateise ination voluptate velit ecillum dolore eu fugiat nulla pariatur lokaim urianewce more and more...
          </p>
        </div>
        <div className="col_footer">
          <h3 className="text-white">
            Business
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p> Mobile Application </p>
          <p>Web Application </p>
          <p>Business Application </p>
          <p>VR/AR Application </p>
          <p>Blockchain </p>
          <p>IoT Software </p>

          <p className="email_id"> Info@freelance.Us</p>
          <h4 className="text-white"> +(9) 586-276-7347</h4>
        </div>
        <div className="col_footer">
          <h3 className="text-white">
            Links{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Features</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col_footer">
          <h3 className="text-white">
            Newsletter{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form onSubmit={handleSubmit}>
            <i className="icon_footer">
              {" "}
              <AiOutlineMail />
            </i>
            <input type="email" placeholder="Enter your email*" required />
            <button className="bg-green-500 py-2 px-4 text-white rounded-md">Subscribe</button>
          </form>

          <div className="social_icons">
            <i className="social_icon">
              <FaFacebookF />
            </i>
            <i className="social_icon">
              <AiOutlineInstagram />
            </i>
            <i className="social_icon">
              <FaLinkedinIn />
            </i>
            <i className="social_icon">
              <FaWhatsapp />
            </i>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright container_fluid">Freelance Marketplace team &copy;2022 </p>
    </section>
  );
};

export default SellerFooter;
