import React, { Component } from 'react'
import '../About/About.css'
import LazyLoad from 'react-lazyload'
import NavBar from '../Navbar/Navbar'

class Base extends Component {
  render() {
    return(
    
        <div className='Field' id='AboutField'>
          <NavBar/>
          <div className='AboutBody'>
            <div className='AboutLeft'>
              <LazyLoad>
                <p className='LeftContainer'>We began our journey as almond farmers nearly 70 years ago. </p>
              </LazyLoad>
            </div>
            <div className='AboutRight'>
              <div className='RightContainer'>
               <p>Today we are a diversified business in agriculture, retail, and finance.</p>
             </div>
            </div>
          </div>
        </div>
    
      
    )
  }
}

export default Base