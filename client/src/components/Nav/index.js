import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="nav container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/"><img src="https://see.fontimg.com/api/renderfont4/Yyj/eyJyIjoiZnMiLCJoIjoxMTQsInciOjEyNTAsImZzIjo5MSwiZmdjIjoiI0U4RTYyNCIsImJnYyI6IiMwNDA0MDQifQ/UGF3ZWQtQ2FzdGVy/catty.png" alt="Paws fonts"></img></Link>

        <nav className="logged-in text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/search">Search</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};

export default Nav;
