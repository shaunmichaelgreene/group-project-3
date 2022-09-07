import React, { useState } from "react";
// import { SiDatabricks } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./NavStyles.css";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div name="top" className="navbar">
      <div className="container">
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          {Auth.loggedIn() ? (
            <>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/search">
                <li>Search</li>
              </Link>

              <a href="/" onClick={logout}>
                <li>Logout</li>
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
        </div>
        <div className="logo"></div>
      </div>
    </div>
  );
};

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};

export default Nav;
