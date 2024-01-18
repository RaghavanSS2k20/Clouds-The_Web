// FullScreenSection.js

import React from 'react';
import './stylesheets/Joinusection.css'; // Create a separate CSS file for styling
import Phone from "../assets/phone.png"
const FullScreenSection = () => {
  return (
    <div className="full-screen-section">
      <div className="left">
        <h1 className="section-title">Join the wait!
for a noiseless <span style={{color:'#1EA6C6'}}>Mind</span></h1>
       
       
      </div>
      <div className="right">
        <img src={Phone} alt="Image" className="section-image" />
      </div>
    </div>
  );
}

export default FullScreenSection;
