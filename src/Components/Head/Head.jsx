import React from 'react'
import './Head.css'
import newimg from'../../assets/newimg.jpg'

function Head() {
  return (
    <div id='home'className='head'>
      <img className="newimg" src={newimg} alt="newimg"/>
      <h1><span>I'm Chanchal Muraskar</span> A full stack developer</h1>
      <p>I'm a UI Developer currently working at Swipfe Infotech Pvt. Ltd., passionate about creating responsive, modern, and user-friendly web applications using React.js, ASP.NET Core, JavaScript, and SQL Server.</p>
      <div className="head-action">
        <div className="head-connect">Connect with me</div>
        
        <a href="public\chanchal_muraskar (2).pdf" download="public\chanchal_muraskar (2).pdf" className="head-resume">Download Resume</a>
      </div>
    </div>
  )
}

export default Head
