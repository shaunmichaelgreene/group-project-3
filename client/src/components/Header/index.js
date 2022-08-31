import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  
  //need to add conditional rendering to the return statement, show log out & search links if logged in, hide others.
  return (
    
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="header container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Pawed-Casts</h1>
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/search">Search</Link>
      </div>
      
    </header>
  );
};

export default Header;
