// AdminDashboard.jsx

import React, { useState } from 'react';
import '../assets/css/Adashboard.css';
import AdminNavbar from '../Components/AdminNavbar';

const AdminDashboard = () => {
  // Sample data for agriculture loans
  const [agricultureLoans, setAgricultureLoans] = useState([
    { id: 1, farmer: 'Ramanan M', amount: 6969, status: 'Pending' },
    { id: 2, farmer: 'Sree hari P', amount: 6000, status: 'Pending' },
    // Add more sample data as needed
  ]);

  const handleApprove = (loanId) => {
    setAgricultureLoans((loans) =>
      loans.map((loan) =>
        loan.id === loanId ? { ...loan, status: 'Approved' } : loan
      )
    );
  };

  const handleReject = (loanId) => {
    setAgricultureLoans((loans) =>
      loans.map((loan) =>
        loan.id === loanId ? { ...loan, status: 'Rejected' } : loan
      )
    );
  };

  return (
    <>
    <AdminNavbar/>
    <div className="admin-dashboard-container">
      <h2>Agriculture Loan Management Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Farmer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {agricultureLoans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.id}</td>
              <td>{loan.farmer}</td>
              <td>${loan.amount}</td>
              <td>{loan.status}</td>
              <td>
                {loan.status === 'Pending' && (
                  <>
                    <button onClick={() => handleApprove(loan.id)}>
                      Approve
                    </button>
                    <button onClick={() => handleReject(loan.id)}>
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
                </>
  );
};

export default AdminDashboard;
