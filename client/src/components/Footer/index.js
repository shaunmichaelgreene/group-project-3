import React from "react";
import { GiSittingDog } from "react-icons/gi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaPaw } from "react-icons/fa";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import "./FooterStyles.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container mw-90">
        
        <div className="row-container d-flex justify-content-between">
          <div className="col-6">
            <h3>Our Story</h3>
            <p>
              We are a group of software developers with a passion for podcasts and
              animals. We created this app for users that want to discover a wide variety of pet & animal related podcasts, while also being able to directly support our furry, scaly, and feathery friends. PawedCaster creatively monetizes user traffic and ad space to contribute the proceeds directly to local animal shelters, rescues, and ASPCA chapters.  We hope you
              find what you are looking for while exploring the possibilities.
            </p>
          </div>
          <div className="social-group text-center col-6">
            <h3>Meet Our Team</h3>
            <a className="group-member" target="_blank" href="https://github.com/shaunmichaelgreene">
              <FiGithub className="social-icon" />
              Shaun
            </a>
            <a className="group-member" target="_blank" href="https://github.com/alanam79">
              <FiGithub className="social-icon" />
              Alana
            </a>
            <a className="group-member" target="_blank" href="https://github.com/mattgaither">
              <FiGithub className="social-icon" />
              Matt
            </a>
            <br></br>
            <a className="powered-by" target="_blank" href="https://www.podchaser.com/">Powered by Podchaser</a>
            <br></br>
            <p className="callout">Get Involved</p>
            <a className="powered-by" target="_blank" href="https://www.aspca.org/"><FaPaw /> Donate Now to the ASPCA <FaPaw /></a>
            <br></br>
            <a className="powered-by" target="_blank" href="https://www.worldwildlife.org/"><FaPaw/> Donate Now to the World Wildlife Federation <FaPaw /></a>
          </div>
        </div>
        <div className="top d-flex justify-content-center">
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BsFillArrowUpCircleFill className="icon" />
          </Link>
        <div className="logo-footer" style={{ textAlign: "center" }}>
          <h2>
            Pawedcaster
            <GiSittingDog className="icon" />
          </h2>
          <h4>&copy;2022 A BlackHammerWhiteLightning Co.</h4>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
