import React from 'react'
import './Head.css'
import newimg from'../../assets/newimg.jpg'

function Head() {
  return (
    <div id='home'className='head'>
      <img className="newimg" src={newimg} alt="newimg"/>
      <h1><span>I'm Chanchal Muraskar</span> A full stack developer</h1>
      <p>I am a full stack developer passionate about building modern web application</p>
      <div className="head-action">
        <div className="head-connect">Connect with me</div>
        
        <a href="/Muraskar resume.pdf" download="Chanchal_resume.pdf" className="head-resume">Download Resume</a>
      </div>
    </div>
  )
}

export default Head
