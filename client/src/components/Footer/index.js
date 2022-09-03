import React from "react";
import { GiSittingDog } from "react-icons/gi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import {
  FiMail,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiDribbble,
} from "react-icons/fi";
import "./FooterStyles.css";

import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BsFillArrowUpCircleFill className="icon" />
          </Link>
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>My Account</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>Information</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>Legal</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <form>
            <h3>Join Our Team</h3>
            <input type="email" placeholder="Enter your email" />
            {/* <FiMail className="mail-icon" /> */}
            <div className="social-group">
              <FiInstagram className="social-icon" />
              <FiFacebook className="social-icon" />
              <FiLinkedin className="social-icon" />
              {/* <FiDribbble className="social-icon" /> */}
              <FiGithub className="social-icon" />
            </div>
          </form>
        </div>
        <div className="logo-footer">
          <h2>
            Pawedcaster
            <GiSittingDog className="icon" />
          </h2>
          <h4>&copy;2022 A BlackHammerWhiteLightning Co.</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
