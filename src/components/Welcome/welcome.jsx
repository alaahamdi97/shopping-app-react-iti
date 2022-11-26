import welcome from "./welcome.svg";
import React from "react";

const Welcome = () => {
  return (
    <div className="w-100  justify-content-center align-items-center d-flex container">
      <img className="w-75  mt-5" src={welcome} alt="welcome page"></img>
    </div>
  );
};

export default Welcome;
