import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoBagRemove } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left-footer">
          <div className="title">
            <h3>contact info</h3>
          </div>
          <div className="content">
            <div className="icon">
              <FaPhone />
            </div>
            <div className="info">
              <span className="top">hotline</span>
              <span className="bottom">16280</span>
            </div>
          </div>
          <div className="content">
            <div className="icon">
              <IoBagRemove />
            </div>
            <div className="info">
              <span className="top">Join Our Team !</span>
              <span className="bottom">jobs@games2egypt.com</span>
            </div>
          </div>
          <div className="content">
            <div className="icon">
              <IoIosMail />
            </div>
            <div className="info">
              <span className="top">Contact Us</span>
              <span className="bottom">Contactus@Games2egypt.Com</span>
            </div>
          </div>
        </div>
        <div className="mid-footer">
          <img
            src="https://www.games2egypt.com/Images/Regions/1/1?fileFormat=1&width=318"
            alt="logo"
          />
        </div>
        <div className="right-footer">
          <div className="description">
            <p>
              We Aim To Reach You Anytime & Everywhere Your Satisfaction Is Our
              Mission
            </p>
          </div>
          <div className="social-media">
            <span>
              {" "}
              <FaFacebookF /> facebook
            </span>
            <span>
              {" "}
              <ImTwitter /> twitter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
