import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic (you can replace this with actual authentication logic)
    if (username && password) {
      setIsLoggedIn(true);
      // Redirect to the DashboardPage after successful login
      navigate('/dashboard');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Additional logic for handling logout in a real application
  };

  const handleAdminLogin = () => {
    // Navigate to the AdminLogin page
    navigate('/admin/login');
  };

  return (
    <div className='login-image'>

    <div className="bg-color">
      <div className='login-container'>
        {isLoggedIn ? (
          <div>
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2 className='login-h2'>Login</h2>
            <form className='login-form' onSubmit={handleLogin}>
              <label className='login-label'>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='login-input'
                  />
              </label>
              <br />
              <label className='login-label'>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='login-input'
                />
              </label>
              <br />
              <button type="submit" className='login-button'>
                Login
              </button>
              <p className='login-p'>Don't have an account? <Link to="/Register" className='login-a'>Sign up here</Link></p>
              <button onClick={handleAdminLogin} className='login-button admin-login-button'>
                Admin Login
              </button>
            </form>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;