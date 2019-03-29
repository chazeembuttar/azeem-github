import React, { Component } from 'react';

import header1 from '../Components/header1.js'
import navbar from '../Components/navbar.js'
import footer from '../Components/footer.js'
import './header.css'
class header extends Component {
  render() {
    return (
      <div>
 
      <div className="wrapper">
      <header1/>
      <navbar/>
      <h3 className="shift1">Importance of Clothing</h3>
      <p className="shift">The human race universally wears articles of clothing-also known as dress, garments, or attire-on
       the body in order to protect it against the adverse climate<br/> conditions. In its broadest sense, clothing is defined as the 
       coverings of the torso and limbs, as well as the coverings for the hands, feet and head. Articles <br/>
      carried rather than worn, such as purses, are usually counted as accessories, while glasses or jewelry, although worn, also fit this category. On the other hand,<br/>
       the body's decoration with tattoos, make-up and hairstyle, although contributes to the general message an individuals want to relay in addition to his or her<br/>
        clothing choices, do not constitute clothing as suc</p>
      <footer/>
  
     
   </div>
   </div>
    );
  }
}

export default header;