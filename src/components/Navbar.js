import React from 'react';
import { useState } from 'react';
import './stylesheets/Navbar.css'; // Create a separate CSS file for styling
import Logo from '../assets/cloudlogo.png'
import JoinUsForm from './JoinUsForm';
const NavBar = () => {
    const [showJoinUsForm, setShowJoinUsForm] = useState(false);

    const handleJoinUsClick = () => {
      setShowJoinUsForm(true);
    };
  
    const handleCloseForm = () => {
      setShowJoinUsForm(false);
    };
  return (
    <div className="navbar">
        <div className='container'>
      <div>
        {/* Your Logo */}
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div>
        {/* "Join Us" Text */}
        <p className="join-us" onClick={handleJoinUsClick}>Join Us</p>

      </div>
      </div>
      {showJoinUsForm && <JoinUsForm onCloseForm={handleCloseForm} />}
    </div>
  );
}
export default NavBar