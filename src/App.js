   
import React, { Component } from 'react'
 
import {BrowserRouter,Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Index from './components/Index/Index';
import Contact from './components/Contact/Contact';
 

class App extends Component {
  
  render() {
    return (
      <div className="container text-center">
       <BrowserRouter >
        <Navbar/>
        <Route exact path='/' component={Index}/>
        <Route path='/contact' component={Contact}/>
      </BrowserRouter > 
      </div>
    )
  }
}
export default App;



 