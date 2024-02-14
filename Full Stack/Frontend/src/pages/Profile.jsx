// ProfilePage.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import profile from '../assets/Images/profile.jpg';
import '../assets/css/Profile.css';
import Navbar from '../Components/Navbar.jsx';

function ProfilePage() {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <Navbar />

      <div className='adp-left'>
        <div className="adp-profile-container">
          <div className="adp-profile-left">
            <img src={profile} alt="Profile" />
          </div>
          <div className="adp-profile-right">
            <h2>{user.fullName || 'SOORYA T'}</h2>
            <p className="adp-mobile-number">Mobile Number: {user.phone || 'N/A'}</p>
            <p className="adp-email">Email: {user.email || 'N/A'}</p>
            {/* Add more profile information or components as needed */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
