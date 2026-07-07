import React from "react";
import "./About.css";

import IMG_20250414_132158 from "../../assets/IMG_20250414_132158.jpg";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-container">

        {/* Left Side */}
        <div className="about-left">
          <img src={IMG_20250414_132158} alt="Chanchal Muraskar" />

          <div className="about-stats">
            <div>
              <h2>2+</h2>
              <p>Internships & Experience</p>
            </div>

            <div>
              <h2>8+</h2>
              <p>Projects Completed</p>
            </div>

            <div>
              <h2>1+</h2>
              <p>Years of Learning</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="about-right">
          <h1>
            About <span>Me</span>
          </h1>

          <p>
            I'm <strong>Chanchal Muraskar</strong>, a UI Developer with a
            background in Electronics & Telecommunication Engineering and
            hands-on experience in developing responsive and user-friendly web
            applications.
          </p>

          <p>
            Currently working at <strong>Swipfe Infotech Pvt. Ltd.</strong>,
            where I build ERP modules using HTML, CSS, JavaScript, React.js,
            ASP.NET, SQL Server, and Bootstrap. I enjoy creating clean,
            responsive interfaces and continuously improving my frontend and
            backend development skills.
          </p>

          {/* Skills */}
          <div className="skills">
            <p>HTML & CSS</p>
            <div className="bar">
              <span style={{ width: "95%" }}></span>
            </div>

            <p>JavaScript</p>
            <div className="bar">
              <span style={{ width: "90%" }}></span>
            </div>

            <p>React.js</p>
            <div className="bar">
              <span style={{ width: "88%" }}></span>
            </div>

            <p>Bootstrap</p>
            <div className="bar">
              <span style={{ width: "90%" }}></span>
            </div>

            <p>Dot NET Core</p>
            <div className="bar">
              <span style={{ width: "80%" }}></span>
            </div>

            <p>SQL Server</p>
            <div className="bar">
              <span style={{ width: "85%" }}></span>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;