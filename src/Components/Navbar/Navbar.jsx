// Navbar.jsx
import { Link } from "react-scroll";
import logo from "../../assets/logo.jpg"; // your logo
import './Navbar.css'
import toggle from "../../assets/toggle.png";
import togglec from "../../assets/togglec.png";
import { useRef } from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const Navbar = () => {

  const menuRef= useRef();

  const openMenu =()=>{
    menuRef.current.style.right="0"
  }
  const closeMenu =()=>{
    menuRef.current.style.right="-350px"
  }
  return (
    <div className="nav">
      <img className="logo" src={logo}  alt="logo" />
      <img className="toggle" src={toggle}onClick={openMenu} alt=""  />
      <ul ref= {menuRef} className="nav-menu">
        <img className="togglec" src={togglec}onClick={closeMenu}alt="" />
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
        <li><Link to="portfolio" smooth={true} duration={500}>Work</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
      <div className="social">
<a href="https://github.com/Chanchal-web"><FaGithub size={30}/></a>




 <a href="https://www.linkedin.com/in/chanchal-muraskar-b73b04325?utm_source"><FaLinkedin size={30}/></a>
      </div>
      <div className="nav-connect">
        <Link to="contact" smooth={true} duration={500}>
          Connect with Me
        </Link>
      </div>
      
    </div>
  );
};

export default Navbar;