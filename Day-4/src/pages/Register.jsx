import  { useState } from 'react';
import {Link} from "react-router-dom";
import '../assets/css/Register.css';
function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='reg-img'>

    <div className="registration-form-container">
      <h2>Agriculture Loan Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        <label>
          Address:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            ></textarea>
        </label>

        <button type="submit">Submit</button>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
      </form>
    </div>
            </div>
  );
}
export default RegistrationForm;
