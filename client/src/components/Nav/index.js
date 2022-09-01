import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
        </Link>
        <h1>Pawed-Casts</h1>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/search">
                Search for your favorite animal podcasts!
              </Link>
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
