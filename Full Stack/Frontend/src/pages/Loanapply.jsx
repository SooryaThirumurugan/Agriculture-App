import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/Loanapply.css';
import Navbar from '../Components/Navbar';

const LoanApplyForm = () => {
  const [formData, setFormData] = useState({
    loanType: '',
    applicantName: '',
    applicantAddress: '',
    applicantMobile: '',
    applicantEmail: '',
    applicantAadhaar: '',
    applicantPan: '',
    applicantSalary: '',
    loanAmountRequired: '',
    loanRepaymentMonths: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/loanApplicants', formData);
      console.log('Form submitted successfully:', response.data);
      // Handle success response as needed
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };

  return (
    <div className="loan-apply-container">
      <Navbar/>
      <h2 className="loan-apply-heading">Loan Application Form</h2>
      <form className="loan-apply-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Loan Type:</label>
          <input type="text" name="loanType" value={formData.loanType} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Applicant Name:</label>
          <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Applicant Address:</label>
          <input type="text" name="applicantAddress" value={formData.applicantAddress} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Applicant Mobile:</label>
          <input type="text" name="applicantMobile" value={formData.applicantMobile} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Applicant Email:</label>
          <input type="email" name="applicantEmail" value={formData.applicantEmail} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Applicant Aadhaar:</label>
          <input type="text" name="applicantAadhaar" value={formData.applicantAadhaar} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Applicant PAN:</label>
          <input type="text" name="applicantPan" value={formData.applicantPan} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Applicant Salary:</label>
          <input type="text" name="applicantSalary" value={formData.applicantSalary} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Loan Amount Required:</label>
          <input type="text" name="loanAmountRequired" value={formData.loanAmountRequired} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Loan Repayment Months:</label>
          <input type="text" name="loanRepaymentMonths" value={formData.loanRepaymentMonths} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Apply</button>
      </form>
    </div>
  );
};

export default LoanApplyForm;
