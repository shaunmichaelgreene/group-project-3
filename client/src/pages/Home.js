import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Footer from "../components/Footer";
import Header from "../components/Nav";

const Home = () => {
  //modify return statement to say something like "Please Sign Up or Log In to begin searching!", and show the links instead of the input forms
  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          HOME PAGE
        </div>
      </div>
      
    </main>
  );
};

export default Home;
