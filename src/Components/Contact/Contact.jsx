import React from 'react'
import './Contact.css'
import mail from '../../assets/mail.jpg'
import phnimg from '../../assets/phnimg.png'
import loc from '../../assets/loc.png'
function Contact() {

   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key","afdb19fd-4a6f-4c36-b54b-8f01ecabdb65");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfullu");
      event.target.reset();
    }else{
      alert("Something went wrong")
    }
  };



    
  return (
    <div id='contact' className='contact'>
      <div className="title">
        <h1>Get in touch</h1>
      </div>
      <div className="con-section">
        <div className="con-left">
            <h1>Let's talk</h1>
            <p>I'm always open to discussing new projects,creative ideas,or opportunities to be part of your vision.Whether you're looking for a developer or just want to connect feel free to react out!</p>
            <div className="con-details">
                <div className="con-detail">
              <img src={mail} alt=""/><p>muraskarchanchal@gmail.com</p>
                </div>

                 <div className="con-detail">
                    <img src={phnimg} alt=""/><p>9216534789</p>
                </div>

                 <div className="con-detail">
                   <img src={loc} alt=""/> <p>Nagpur, Maharashtra</p>
                </div>
            </div>
        </div>
        <form onSubmit ={onSubmit} className='con-right'>
          <label htmlFor=''>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name'/>
           <label htmlFor=''>Your Email</label>
           <input type="email" placeholder='Enter your email' name='email'/>
           <label htmlFor=''>Write Your msg here</label>
          <textarea name="message" rows="8" placeholder='Enter your msg'></textarea>
          <button type="submit"className="con-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
