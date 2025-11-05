import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Head from './Components/Head/Head'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Portfolio from './Components/Mywork/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div id="home">
        <Head/>
       </div>

       <div id="about">
          <About/>
       </div>
       
       <div id="services">
              <Services/>
       </div>
       
       <div id="portfolio">
       <Portfolio/>
       </div>
       
       <div id="contact">
         <Contact/>
       </div>
      
      
      
      
      
      <Footer/>
    </div>
  )
}

export default App
