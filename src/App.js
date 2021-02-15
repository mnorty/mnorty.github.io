import './App.css';
import React, {Component} from 'react'
import router from '../src/router'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'



export default function App(){
    
      return(
          <div className='AppBody'>
              {/* <Navbar/> */}
              <About/>
              <Home/>
              <Contact/>
              {/* {router} */}
              {/* <footer className="Footer">Footer</footer> */}
          </div>
      )
  }

