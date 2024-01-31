// AdminHome.js
import React from 'react';
import Typography from '@mui/material/Typography';
import AdminNavbar from '../Components/AdminNavbar';
function AdminHome() {
  return (
    <>
    <AdminNavbar/>
    <div>
      <Typography variant="h4" gutterBottom>
        Welcome to the Admin Home Page
      </Typography>
      <Typography variant="body1" paragraph>
        This is the starting point for the admin section of the application.
        Customize this page as per your requirements.
      </Typography>
      {/* Add more content or components specific to the admin home page */}
    </div>
    </>
  );
}

export default AdminHome;
