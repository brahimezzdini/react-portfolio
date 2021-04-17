   
import React, { Component } from 'react'
 
    
 
import Portfolio from '../Portfolio/Portfolio'; 
 
import About from '../About/About';
import Profil from '../Profil/Profil';
import Home from '../Home/Home';
import Work from '../Work/Work'; 
import Footer from '../Footer/Footer';

class Index extends Component {
  
  
   
  render() {
    return (
      <div className="container text-center">
       
       <Home/>
       <Work/>
       <About/>
       <Profil/> 
       <Portfolio/> 
       <Footer/>
       </div>
    )
  }
}
export default Index;



 