import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import Photo from "../assets/pexels-robert-anthony-carbone-598966.jpg";

const Home = () => {
  const loggedIn = Auth.loggedIn();

  //modify return statement to say something like "Please Sign Up or Log In to begin searching!", and show the links instead of the input forms
  return (
    <main className="flex-row justify-center mb-4">
      <div className="">
        <div className="homepage-card">
          <h2>Welcome!</h2>
          <h3>Are you on the hunt for some great animal podcasts? Then paws what you're doing and search here! Log in or sign up to start searching! When you search with PawedCaster, the animals win!</h3>
          {/* below is making sure the search doesn't show unless logged in */}
          {loggedIn && (
            <div className="col-12 mb-3">
              <Link to="/search">
                <h2 className="text-dark">Begin Search!</h2>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
