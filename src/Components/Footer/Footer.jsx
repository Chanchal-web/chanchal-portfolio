import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="foottop">

        <div className="foottop-left">
          <h2>Let's Build Something Amazing Together!</h2>

          <p>
            I'm currently open to UI Developer and Full Stack Developer
            opportunities. Feel free to connect with me.
          </p>
        </div>

        <div className="foottop-right">

          <a
            href="mailto:your-email@gmail.com"
            className="footer-btn"
          >
            📧 Email Me
          </a>

          <a
            href="https://github.com/Chanchal-web"
            target="_blank"
            rel="noreferrer"
            className="footer-btn"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/chanchal-muraskar-b73b04325?utm_source"
            target="_blank"
            rel="noreferrer"
            className="footer-btn"
          >
            💼 LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="footer-btn"
          >
            📄 Resume
          </a>

        </div>

      </div>

      <hr />

      <div className="foot-bottom">

        <p className="foot-left">
          © {new Date().getFullYear()} Chanchal Muraskar. All Rights Reserved.
        </p>

        <div className="foot-right">

          <span>Pune, Maharashtra</span>

          <span>Full Stack Developer</span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
