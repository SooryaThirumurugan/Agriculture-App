// AdminSettings.jsx
import React, { useState } from 'react';
import AdminNavbar from '../Components/AdminNavbar.jsx';
// import '../assets/css/AdminSettings.css'; 

const AdminSettings = () => {
  // Sample state for settings
  const [adminSettings, setAdminSettings] = useState({
    companyName: 'Agriculture Loans Inc.',
    email: 'admin@agricultureloans.com',
    password: '********', // You may want to handle passwords securely
    notification: true,
  });

  // Function to handle changes in settings
  const handleSettingChange = (field, value) => {
    setAdminSettings((prevSettings) => ({
      ...prevSettings,
      [field]: value,
    }));
  };

  // Function to save settings (you can send the data to a server here)
  const saveSettings = () => {
    // Implement the logic to save settings
    console.log('Settings saved:', adminSettings);
  };

  return (
    <>
    <AdminNavbar/>
    <div className="admin-settings-container">
      <h2>Admin Settings</h2>
      <div className="setting-item">
        <label>Company Name:</label>
        <input
          type="text"
          value={adminSettings.companyName}
          onChange={(e) => handleSettingChange('companyName', e.target.value)}
        />
      </div>
      <div className="setting-item">
        <label>Email:</label>
        <input
          type="email"
          value={adminSettings.email}
          onChange={(e) => handleSettingChange('email', e.target.value)}
        />
      </div>
      <div className="setting-item">
        <label>Password:</label>
        <input
          type="password"
          value={adminSettings.password}
          onChange={(e) => handleSettingChange('password', e.target.value)}
          />
      </div>
      <div className="setting-item">
        <label>Receive Notifications:</label>
        <input
          type="checkbox"
          checked={adminSettings.notification}
          onChange={(e) => handleSettingChange('notification', e.target.checked)}
        />
      </div>
      <button onClick={saveSettings}>Save Settings</button>
    </div>
          </>
  );
};

export default AdminSettings;
