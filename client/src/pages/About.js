import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { FaPaw } from "react-icons/fa";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const Profile = () => {
  // const { username: userParam } = useParams();

  // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });

  // const user = data?.me || data?.user || {};

  // // navigate to personal profile page if username is the logged-in user's
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/profile" />;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user?.username) {
  //   return (
  //     <h4 style={{ textAlign: "center", color: "red" }}>
  //       You need to be logged in to see this page. Please sign up or log in!
  //     </h4>
  //   );
  // }

  return (
    <div className="container mw-90">
        
        <div className="row-container about d-flex justify-content-between">
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
            <br></br>
            <br></br>
            
            <a className="powered-by podchaser-link" target="_blank" href="https://www.podchaser.com/">Powered by Podchaser</a>
            
            <p className="callout">Get Involved</p>
            <a className="powered-by" target="_blank" href="https://www.aspca.org/"><FaPaw /> Donate Now to the ASPCA <FaPaw /></a>
            <br></br>
            <a className="powered-by" target="_blank" href="https://www.worldwildlife.org/"><FaPaw/> Donate Now to the World Wildlife Federation <FaPaw /></a>
          </div>
        </div>
      </div>
   

    // <div>
    //   <div className="flex-row mb-3">
    //     <h2 className="bg-dark p-3 display-inline-block text-center results-heading">
    //       Hello {user.username}!
    //     </h2>
    //   </div>

    //   <div className="flex-row justify-space-between mb-3">
    //     <div className="col-12 mb-3 col-lg-8"></div>
    //   </div>
    // </div>
  );
};

export default Profile;