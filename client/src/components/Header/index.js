import React from "react";
import { Link } from "react-router-dom";
// import Auth from "../../utils/auth";

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Podcast App</h1>
        </Link>
      </div>
    </header>
  );
};

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};

export default Header;
