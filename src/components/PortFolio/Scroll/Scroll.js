import React from "react";
import "./Scroll.css";

const Scroll = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollUp");
    if (this.scrollY >= 560) scrollUp.classList.add("showScroll");
    else scrollUp.classList.remove("showScroll");
  });
  return (
    <a href="#home" className="scrollUp">
      <svg
        version="1.1"
        id="ios7_x5F_arrows_1_"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 128 128"
        xmlSpace="preserve"
      >
        <g id="_x34__1_">
          <path
            d="M64.1 0C28.8 0 .2 28.7.2 64s28.6 64 63.9 64S128 99.3 128 64c-.1-35.3-28.7-64-63.9-64zm0 122.7C31.7 122.7 5.5 96.4 5.5 64c0-32.4 26.2-58.7 58.6-58.7 32.3 0 58.6 26.3 58.6 58.7-.1 32.4-26.3 58.7-58.6 58.7zm-.3-93.9L33.1 59.5l3.8 3.8 24.5-24.5V104h5.3V39.4l24 24 3.8-3.8-30.7-30.8z"
            id="icon_35_"
          />
        </g>
      </svg>
    </a>
  );
};

export default Scroll;
