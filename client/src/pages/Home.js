import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const Home = () => {
  const loggedIn = Auth.loggedIn();

  //modify return statement to say something like "Please Sign Up or Log In to begin searching!", and show the links instead of the input forms
  return (
    <main className="flex-row justify-center mb-4">
      <div className="">
        <div className="homepage-card">
          <h2>Hello</h2>
          {/* below is making sure the search doesn't show unless logged in */}
          {loggedIn && (
            <div className="col-12 mb-3">
              <Link to="/search">
                <h2>Begin Search!</h2>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
