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
            <h3>Our Story</h3>
            <p>
              We are a group of software developers that love podcasts and
              animals. We created this app for users that want a variety of
              different choices when they search a specific topic. We hope you
              find what you are looking for while exploring the possibilities.
            </p>
          </div>
          <div className="col">
            <h3> Our Mission </h3>
            <p>
              "To educate and entertain thought the power of information about
              animals and all things for users to learn and have fun."
            </p>
          </div>

          <div className="row-container">
            <div className="social-group">
              <h3>Join Our Team</h3>
              <input type="email" placeholder="Enter your email" />
              <br></br>
              <a>
                <FiGithub className="social-icon" />
                Shaun{" "}
              </a>
              <br></br>
              <a>
                <FiGithub className="social-icon" />
                Alana{" "}
              </a>
              <br></br>
              <a>
                <FiGithub className="social-icon" />
                Matt{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="logo-footer" style={{ textAlign: "center" }}>
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
