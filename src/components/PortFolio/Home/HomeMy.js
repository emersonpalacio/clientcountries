import React from "react";
import "./HomeMy.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const HomeMy = () => {
  return (
    <section className="home section " id="home">
      <div className="homeContainer container grid">
        <div className="homeContent grid">
          <Social />

          <div className="homeImg"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default HomeMy;
