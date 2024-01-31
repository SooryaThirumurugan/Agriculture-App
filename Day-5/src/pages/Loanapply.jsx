
import React, { useState } from 'react';
import '../assets/css/Loanapply.css';

const LoanApplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    dob: '',
    email: '',
    amount: '',
    aadharFile: null,
    panCardFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="la-container">
      <h2 className="la-heading">Loan Application Form</h2>
      <form className="la-form" onSubmit={handleSubmit}>
        <label className="la-label">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="la-input" required />
        </label>
        <label className="la-label">
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} className="la-input" required />
        </label>
        <label className="la-label">
          Date of Birth:
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="la-input" required />
        </label>
        <label className="la-label">
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="la-input" required />
        </label>
        <label className="la-label">
          Amount Needed:
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} className="la-input" required />
        </label>
        <label className="la-label">
          Aadhar (Upload Format):
          <input
            type="file"
            name="aadharFile"
            onChange={handleFileChange}
            className="la-file-input"
            accept=".jpg, .jpeg, .png"
            required
          />
        </label>
        <label className="la-label">
          PAN Card (Upload Format):
          <input
            type="file"
            name="panCardFile"
            onChange={handleFileChange}
            className="la-file-input"
            accept=".jpg, .jpeg, .png"
            required
          />
        </label>
        <button type="submit" className="la-button">
          Apply
        </button>
      </form>
    </div>
  );
};

export default LoanApplyForm;
