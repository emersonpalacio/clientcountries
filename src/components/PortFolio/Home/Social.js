import React from "react";

const Social = () => {
  return (
    <div className="homeSocial">
      <a
        href="https://www.linkedin.com/"
        className="homeSocialIcon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      {/* <a href="" className="homeSocialIcon" target="_blank">
        <i className="uil uil-dribbble"></i>
      </a> */}
      <a
        href="https://github.com/emersonpalacio"
        className="homeSocialIcon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
