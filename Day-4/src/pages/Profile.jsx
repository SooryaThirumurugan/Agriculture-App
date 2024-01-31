import React from 'react';
import { useLocation } from 'react-router-dom';
import profile from '../assets/Images/profile.jpg'
import '../assets/css/Profile.css';
import Navbar from '../Components/Navbar.jsx';


function ProfilePage() {
  const location = useLocation();
  const { username, mobileNumber, email, profilePicture } = location.state || {};

  return (
  <>
     <Navbar/>

    <div className='adp-left'>
    <div className="adp-profile-container">
      <div className="adp-profile-left">
      <img src={profile}  />

      </div>
      <div className="adp-profile-right">
        <h2>{username || 'SOORYA T'}</h2>
        {/* <h2>{username || 'Guest'}</h2> */}
        <p className="adp-mobile-number">Mobile Number: {mobileNumber || '9600878424'}</p>
        {/* <p className="adp-mobile-number">Mobile Number: {mobileNumber || 'N/A'}</p> */}
        <p className="adp-email">Email: {email || 'soorya@gmail.com'}</p>
        {/* <p className="adp-email">Email: {email || 'N/A'}</p> */}
        {/* Add more profile information or components as needed */}
      </div>
    </div>
    </div>
  </>

  );
}

export default ProfilePage;
