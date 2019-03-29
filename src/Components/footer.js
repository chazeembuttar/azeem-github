import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './footer.css'
class footer extends Component {
  render() {
    return (
<div className="container ">


<footer class="footer font-small blue ">

 
  <div class="footer-copyright text-center py-3">© 2019 Copyright:
    <Link to="#"> www.AdiClothing.com</Link>
  </div>
 

</footer>

  </div>
    
       
        );
  }
}

export default footer;