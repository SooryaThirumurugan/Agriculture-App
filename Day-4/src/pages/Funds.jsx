
import React, { useState } from 'react';
import '../assets/css/Fund.css';
import Navbar from '../Components/Navbar.jsx';

function FundPage() {
  const initialFundAllocationData = [
    { state: 'Tamil Nadu', allocatedFunds: 50000 },
    { state: 'Kerala', allocatedFunds: 75000 },
    { state: 'Karnataka', allocatedFunds: 60000 },
  ];

  const [fundAllocationData, setFundAllocationData] = useState(initialFundAllocationData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterFundAllocationData(e.target.value);
  };

  const filterFundAllocationData = (searchTerm) => {
    const filteredData = initialFundAllocationData.filter((allocation) =>
      allocation.state.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFundAllocationData(filteredData);
  };

  return (
    <>
     <Navbar/>

    <div className="fund-allocation-page">
      <h2>Fund Allocation for Agriculture Loan</h2>

      <div className="search-bar">
        <label htmlFor="searchLoan">Search Loan:</label>
        <input
          type="text"
          id="searchLoan"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter state name"
        />
      </div>

      <div className="intro-section">
        <p>
          Welcome to our Agriculture Loan Management system's Fund Allocation page. Here, you can explore detailed information
          about funds allocated to various states to support farmers in their agricultural endeavors.
        </p>
        <p>
          The funds are distributed based on the specific needs and requirements of each state's agricultural sector. This data
          plays a vital role in ensuring fair and effective financial support for farmers across the country.
        </p>
      </div>

      <h3>Fund Allocation by State</h3>
      <table className="allocation-table">
        <thead>
          <tr>
            <th>State</th>
            <th>Allocated Funds</th>
          </tr>
        </thead>
        <tbody>
          {fundAllocationData.map((allocation, index) => (
            <tr key={index}>
              <td>{allocation.state}</td>
              <td>${allocation.allocatedFunds}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="conclusion-section">
        <p>
          Use the search bar above to quickly find information about a specific state and its allocated funds. Stay informed
          about the financial assistance provided to farmers and the impact it has on the agricultural landscape.
        </p>
        <p>
          We are committed to transparency and efficiency in fund allocation, contributing to the growth and prosperity of the
          agriculture sector.
        </p>
      </div>
    </div>
    </>
  );
}

export default FundPage;
