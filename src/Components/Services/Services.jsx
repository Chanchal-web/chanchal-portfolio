import React from 'react'
import './Services.css'
import Services_data from '../../assets/Services_data'
import newarrow from '../../assets/newarrow.jpg'


function Services() {
  return (
    <div id='services'className='service'>
      <div className="ser-title">
<h1>My services</h1> </div>
<div className="ser-container">
{Services_data.map((service,index)=>{
    return <div key={index} className="service-format">
        <h3>{service.id}</h3>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <div className="service-readmore">
            <p>Read More</p>
            <img src={newarrow} alt="newarrow"/>
        </div>

    </div>
})}
</div>
    </div>
  )
}

export default Services
