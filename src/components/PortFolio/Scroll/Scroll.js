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
      <i className="bx bx-up-arrow-alt scrollIcon"></i>
    </a>
  );
};

export default Scroll;
