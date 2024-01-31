import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../assets/css/Dashboard.css'; 
import tractor from '../assets/Images/tractor.jpg';
import land from '../assets/Images/land.jpg';
import crop from '../assets/Images/crop.jpeg';
import Navbar from '../Components/Navbar.jsx';

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [loanStatus, setLoanStatus] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckStatus = (event) => {
    // Assuming you have a function to check the loan status
    // For simplicity, let's just set the status to a sample value.
    setLoanStatus('Approved'); // Replace this with your actual logic to check the loan status
    event.preventDefault();
  };

  const loans = [
    { type: 'Tractor Loan', image: tractor, description: 'Get to know more about the eligibility, features, offers & more to apply for a tractor loan.', link: '/loanapply' },
    { type: 'Land Loan', image: land, description: 'Get to know more about the eligibility, features, offers & more to apply for a Land loan.', link: '/loanapply' },
    { type: 'Crop Loan', image: crop, description: 'Get to know more about the eligibility, features, offers & more to apply for a crop loan.', link: '/loanapply' },
    // Add more loans as needed
  ];

  const filteredLoans = loans.filter((loan) =>
    loan.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Navbar/>
    <div>
      <div className="db-loans-container">
        {filteredLoans.map((loan, index) => (
          <div key={index} className="db-loan-card">
            <h2>{loan.type}</h2>
            <img className="db-image" src={loan.image} alt={`${loan.type} Image`} />
            <div className="db-p">{loan.description}</div>
            <div className="db-loan-buttons">
              <Link to={loan.link} style={{ textDecoration: 'none', color: 'white' }}>Apply</Link>
              <button className="db-know-more-button">
                <Link to="/funds" style={{ textDecoration: 'none', color: 'white' }}>Know More</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      
        <div className="check-status-form">
        <div className="search-bar-container">
          Enter Loan Type: 
        <input
          type="text"
          placeholder="Search for a loan type"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
        <form onSubmit={handleCheckStatus}>
          <label>
            Check Your Loan Status:
            <input type="submit" value="Check Status" />
          </label>
        </form>
        
        {loanStatus && <p>Your Loan Status: {loanStatus}</p>}
      </div>
    </div>
          </>
  );
}

export default Dashboard;
