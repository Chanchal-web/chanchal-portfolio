import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className="foottop">
        <div className="foottop-left">
            <p>Get updates about my new work,blogs, and tech expermients!</p>
        </div>
        <div className="foottop-right">
            <div className="footemail-input">
                <input type="email" placeholder='Enter your email' name='email'/>
            </div>
           <div className="subscribe">Subscribe</div>

        </div>
      </div>
      <hr/>
      <div className="foot-bottom">
        <p className='foot-left'>0 2023 Chanchal Muraskar. All rights reserved</p>
        <div className="foot-right">
 <p>Term of Services</p>
  <p>Privacy policy</p>
   <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
