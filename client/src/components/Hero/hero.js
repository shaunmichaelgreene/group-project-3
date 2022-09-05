import React from "react";
import "./heroStyles.css";
import { Link } from "react-router-dom";

const hero = () => {
  return (
    <>
      <div>
        <div styles="heroStyles" />
      </div>
      <div className="container">
        <div className="content">
          <Link to="/">
            <img
              src="https://see.fontimg.com/api/renderfont4/Yyj/eyJyIjoiZnMiLCJoIjoxMTQsInciOjEyNTAsImZzIjo5MSwiZmdjIjoiI0U4RTYyNCIsImJnYyI6IiMwNDA0MDQifQ/UGF3ZWQtQ2FzdGVy/catty.png"
              alt="Paws fonts"
            ></img>
          </Link>
        </div>
      </div>
    </>
    
  );
};

export default hero;
