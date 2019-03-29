import React, { Component } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'; 
// import './App.css';


import header from './Components/header.js'
import header1 from './Components/header1.js'
import navbar from './Components/navbar.js'
import footer from './Components/footer.js'
import about from './Components/about.js'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      
    
      <Route exact path="/about" component= {about}/>
       <Route exact path="/" component= {header1}/>
       <Route exact path="/" component= {navbar}/>
       <Route exact path="/" component= {header}/>
       <Route exact path="/" component= {footer}/>
      
      </div>
     
      

      
      </Router>
    );
  }
}

export default App;
