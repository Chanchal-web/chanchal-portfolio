import React from 'react'
import './Portfolio.css'
import mywork_data from '../../assets/mywork_data'
import newarrow from '../../assets/newarrow.jpg'

function Mywork() {
  return (
    <div id='portfolio' className='mywork'>
      <div className="my-title"></div>
      <h1>My latest work</h1>

      <div className="my-container">
      {mywork_data.map((work,index)=>{
        return <img key={index}src={work.image} alt=""/>
      })}
      </div>
      <div className="my-showmore">
        <p>Show More</p>
       <img src={newarrow} alt="newarrow"/>
      </div>
    </div>
  

  )
}

export default Mywork
