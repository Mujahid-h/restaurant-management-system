import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-right">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            itaque quod eveniet sapiente asperiores harum, obcaecati dolore,
            tenetur mollitia optio totam distinctio. Aspernatur inventore
            deserunt dolores saepe ad vel cum?
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-left">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+92-319-3506026</li>
            <li>hmujahid08@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright 2024 &copy;. All rights reserved</p>
    </div>
  );
};

export default Footer;
