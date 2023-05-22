import React from "react";

const Backend = () => {
  return (
    <div className="skillsContent">
      <h3 className="skillsTitle">Backend developer</h3>
      <div className="skillsBox">
        <div className="skillsGroup">
          <div className="skillsData">
            <i className="uil uil-check-circle "></i>
            <div>
              <h3 className="skillName">Node js</h3>
              <span className="skillLevel">Advanced</span>
            </div>
          </div>
          <div className="skillsData">
            <i className="uil uil-check-circle "></i>
            <div>
              <h3 className="skillName">.Net Core</h3>
              <span className="skillLevel">Advanced</span>
            </div>
          </div>
          <div className="skillsData">
            <i className="uil uil-check-circle "></i>
            <div>
              <h3 className="skillName">DB</h3>
              <span className="skillLevel">SQL-ServerDB ➤ Pgrest</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
