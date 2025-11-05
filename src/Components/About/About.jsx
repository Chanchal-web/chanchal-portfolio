import React from "react";
import "./About.css";

import IMG_20250414_132158 from "../../assets/IMG_20250414_132158.jpg";

function About() {
  return (
   
<div id='about' className="about">
  <div className="about-container">
  
    <div className="about-left">
      <img src={IMG_20250414_132158} alt="IMG_20250414_132158" />
      <div className="about-stats">
        <div><h2>3</h2><p>Internships Completed</p></div>
        <div><h2>10+</h2><p>Projects Completed</p></div>
        
      </div>
    </div>

    
    <div className="about-right">
      <h1>About <span>me</span></h1>
      <p>
        I am a passionate Full Stack Developer with a strong foundation in HTML,CSS,JAVASCRIPT,REACT.js,and SQL.
        I love building interactive ,user-friendly,and efficient web application that solve real-world problems.
      </p>
      <p>
        I'm continously learning new technologies to improve my skills and stay updated in this fast-evolving tech world.
      </p>

      
      <div className="skills">
        <p>HTML & CSS</p>
        <div className="bar"><span style={{width:"90%"}}></span></div>

        <p>JavaScript</p>
        <div className="bar"><span style={{width:"75%"}}></span></div>

        <p>React JS</p>
        <div className="bar"><span style={{width:"75%"}}></span></div>

        <p>Node JS</p>
        <div className="bar"><span style={{width:"70%"}}></span></div>

        
        <p>Mongo db</p>
        <div className="bar"><span style={{width:"65%"}}></span></div>
      </div>
    </div>
  </div>
</div>
  );
}

export default About;
