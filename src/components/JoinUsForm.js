// JoinUsForm.js
import { useEffect, useRef } from 'react';
import React from 'react';
import './stylesheets/Joinusform.css'; // Create a new CSS file for styling

const JoinUsForm = ({ onCloseForm }) => {
    const formRef = useRef();

    const handleClickOutside = (event) => {
        console.log("clicked outside")
      if (formRef.current && !formRef.current.contains(event.target)) {
        onCloseForm();
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [onCloseForm]);

  return (
    <div className="overlay">
      <div className="form-container" ref={formRef}>
        <h2>Join Us</h2>
        <form style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%'}}>
          {/* Your form input fields go here */}
          <input type="text" placeholder="Enter your email" />
          {/* Add more input fields if needed */}
          <button type="submit">Submit</button>
        </form>
        
      </div>
    </div>
  );
}

export default JoinUsForm;