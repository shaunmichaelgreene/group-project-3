import React from "react";
import Photo from "../assets/server-error.jpg";

const NoMatch = () => {
  return (
    <div>
      <h4>Oops, we couldn't find that pawdcast</h4>
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
