import React, { Component } from 'react'
import './Navbar.css'
import NortonLogo from '../../Assets/VectorWhite.png'
import Emblem from '../../Assets/NEmblemWhite.png'




class Base extends Component {
  render() {
    return(
      <header className="Header"> 
        <div className="Logo">
        <img className='ComLogo' src={NortonLogo} alt=""  onClick={() => {window.location.href="/"}}/>
        </div>
        <div className="LinkBox">
        {/* <a onClick={() => {window.location.href="/about"}}>About </a>
            <a onClick={() => {window.location.href="/contact"}}>Contact </a> */}
            {/* <a onClick={() => {window.location.href="/"}}>Home </a> */}
        </div>
        <div className="Emblem">
          <img className='Emblem'src={Emblem} alt="" onClick={() => {window.location.href="/"}}/>
        </div>
      </header>
    )
  }
  
}



export default Base