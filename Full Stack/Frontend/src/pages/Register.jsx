// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { login } from '../assets/Others/userSlice'; // Update the import path
// import '../assets/css/Register.css';

// function RegistrationForm() {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const dispatch = useDispatch();

//   function handleSubmit(e) {
//     e.preventDefault();

//     // Your form submission logic here

//     // Assuming the form submission is successful, update Redux state with the logged-in user
//     const user = {
//       fullName,
//       email,
//       // Add other relevant user information
//     };

//     dispatch(login(user));

//     // Navigate to the "/login" page (you can replace this with your desired navigation logic)
//     window.location.href = '/login';
//   }

//   return (
//     <div className='reg-img'>
//       <div className="registration-form-container">
//         <h2>Agriculture Loan Registration</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Full Name:
//             <input
//               type="text"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               required
//             />
//           </label>

//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </label>

//           <label>
//             Phone:
//             <input
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//           </label>

//           <label>
//             Address:
//             <textarea
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//             ></textarea>
//           </label>

//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </label>

//           <label>
//             Confirm Password:
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </label>

//           <button type="submit">Submit</button>
//           <p>Already have an account? <Link to="/login">Login here</Link></p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default RegistrationForm;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/Register.css';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const authenticateResponse = await axios.post('http://localhost:8081/api/v1/auth/register', {
        email: email, // Assuming username input is for email
        password: password,
    });
console.log('auth response:', authenticateResponse.data);

const saveResponse = await axios.post('http://localhost:8081/api/users/post', {
  username: username,
  email: email,
  password: password,
  mobileNumber:mobileNumber,
});

console.log('Save response:', saveResponse.data);

    //  / console.log('User registered:', response.data);
      alert("signed");

      // Redirect to login page
      window.location.href = '/login';
    } catch (error) {
      console.error('Registration failed:', error.response.data.error);
      setError(error.response.data.error);
    }
  }

  return (
    <div className='reg-img'>
      <div className="registration-form-container">
        <h2>Agriculture Loan Registration</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Mobile Number:
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Submit</button>
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
