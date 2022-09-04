import React from "react";
import Photo from "../assets/server-error.jpg";

const NoMatch = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h4 >Oops, we couldn't find that page!</h4>
      <img
        src={Photo}
        style={{ width: "60%" }}
        alt="404 sign"
        className="cat404"
      ></img>
    </div>
  );
};

export default NoMatch;
