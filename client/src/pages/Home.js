import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
// import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const loggedIn = Auth.loggedIn();

const Home = () => {
  //modify return statement to say something like "Please Sign Up or Log In to begin searching!", and show the links instead of the input forms
  return (
    <main className="flex-row justify-center mb-4">
      {loggedIn && <div className="col-12 mb-3">
        </div>}
      <h1>Pawed-Casts</h1>
      <div className="col-12 col-md-6">
        <div className="card">HOME PAGE</div>
      </div>
    </main>
  );
};

export default Home;
