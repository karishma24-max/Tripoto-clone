import React from "react";
import BreadCrum from "./Breadcrum";
import "./Singapore.css";
import Topvideo from "./Topvideo";
const Singapore = () => {
  return (
    <div>
      <Topvideo />
      <div id="DivbelowVid">
        <div className="Bread">
          <BreadCrum />
        </div>
        <h1 className="title">Reimagine Singapore With Tripoto</h1>
      </div>
    </div>
  );
};
export default Singapore;
