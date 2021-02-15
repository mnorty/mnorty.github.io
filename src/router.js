import React from 'react'
import {Switch,BrowserRouter, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Another from '../src/Components/Another'
// import Contact from '../src/Components/Contact/Contact'
import APP from '../src/App'


export default (
  <BrowserRouter>
     <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/another' component={Another} />
      {/* <Route exact path='/contact' component={Contact} /> */}
      <Route exact path='/test' component={APP}/>
    </Switch>
  </BrowserRouter>
 
)