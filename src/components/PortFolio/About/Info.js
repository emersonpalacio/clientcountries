import React from "react";

const Info = () => {
  return (
    <div className="aboutInfo grid">
      <div className="aboutBox">
        <i className="uil uil-award-alt aboutIcon"></i>
        <h3 className="aboutTitle">Experience </h3>
        <span className="aboutSubtitle ">8 Year Workin </span>
      </div>
      <div className="aboutBox">
        <i className="uil uil-suitcase-alt aboutIcon"></i>
        <h3 className="aboutTitle"> Complete</h3>
        <span className="aboutSubtitle">10 + Proyects</span>
      </div>
      <div className="aboutBox">
        <i className="uil uil-microscope aboutIcon"></i>
        <h3 className="aboutTitle"> Suport</h3>
        <span className="aboutSubtitle">10 + Proyects</span>
      </div>
    </div>
  );
};

export default Info;
