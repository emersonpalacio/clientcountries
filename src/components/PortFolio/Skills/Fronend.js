import React from "react";

const Fronend = () => {
  return (
    <div className="skillsContent">
      <h3 className="skillsTitle"> FrondEnd developer</h3>
      <div className="skillsBox">
        <div className="skillsGroup">
          <div className="skillsData">
            <i className="uil uil-check-circle "></i>
            <div>
              <h3 className="skillName"> React</h3>
              <span className="skillLevel">Advanced</span>
            </div>
          </div>
          <div className="skillsData">
            <i className="uil uil-check-circle "></i>
            <div>
              <h3 className="skillName">CSS</h3>
              <span className="skillLevel">Basic</span>
            </div>
          </div>
          <div className="skillsData">
            <i className="uil uil-check-circle "></i>
            <div>
              <h3 className="skillName">JS</h3>
              <span className="skillLevel">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fronend;
