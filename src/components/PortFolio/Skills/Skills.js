import React from "react";
import "./Skills.css";
import Fronend from "./Fronend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="sectionTitle">Skills</h2>
      <span className="sectionSubtitle"> My tecnical level</span>
      {<div>" "</div>}
      <div className="skillsContainer container grid">
        <Fronend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
