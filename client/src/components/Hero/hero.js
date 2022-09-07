import React from "react";
import "./heroStyles.css";
import { Link } from "react-router-dom";

const hero = () => {
  return (
    <div className="container">
      <div className="content text-center">
        <Link to="/">
          <img
            src="https://see.fontimg.com/api/renderfont4/Yyj/eyJyIjoiZnMiLCJoIjo5MiwidyI6MTAwMCwiZnMiOjkyLCJmZ2MiOiIjMTkxOTE4IiwiYmdjIjoiI0Y3RjFGMSIsInQiOjF9/UGF3ZWRDYXN0ZXI/catty.png"
            alt="Paws fonts"
            // https://see.fontimg.com/api/renderfont4/Yyj/eyJyIjoiZnMiLCJoIjoxMTQsInciOjEyNTAsImZzIjo5MSwiZmdjIjoiI0U4RTYyNCIsImJnYyI6IiMwNDA0MDQifQ/UGF3ZWQtQ2FzdGVy/catty.png
            // https://see.fontimg.com/api/renderfont4/VGWjy/eyJyIjoiZnMiLCJoIjo5MiwidyI6MTAwMCwiZnMiOjkyLCJmZ2MiOiIjMTkxOTE4IiwiYmdjIjoiI0Y3RjFGMSIsInQiOjF9/UGF3ZWRDYXN0ZXI/meows.png
          ></img>
        </Link>
      </div>
    </div> 
  );
};

export default hero;
