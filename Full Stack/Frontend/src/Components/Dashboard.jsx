// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../Components/Navbar.jsx';
// import axios from 'axios';
// import tractor from '../assets/Images/tractor.jpg';
// import land from '../assets/Images/land.jpg';
// import crop from '../assets/Images/crop.jpeg';
// import '../assets/css/Dashboard.css';

// function Dashboard() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loanStatus, setLoanStatus] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loanId, setLoanId] = useState('');
//   const [loanData, setLoanData] = useState(null);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleCheckStatus = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.get(`http://localhost:8081/loanApplicants/${loanId}`);
//       setLoanData(response.data);
//       setLoanStatus(response.data.status);
//     } catch (error) {
//       console.error("Error fetching loan status:", error);
//     }
//   };

//   const handleInputChange = (event) => {
//     setLoanId(event.target.value);
//   };

//   const loans = [
//     { type: 'Tractor Loan', image: tractor, description: 'Get to know more about the eligibility, features, offers & more to apply for a tractor loan.', link: '/loanapply' },
//     { type: 'Land Loan', image: land, description: 'Get to know more about the eligibility, features, offers & more to apply for a Land loan.', link: '/loanapply' },
//     { type: 'Crop Loan', image: crop, description: 'Get to know more about the eligibility, features, offers & more to apply for a crop loan.', link: '/loanapply' },
//     // Add more loans as needed
//   ];

//   const filteredLoans = loans.filter((loan) =>
//     loan.type.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <Navbar />
//       <div>
//         {isLoggedIn ? (
//           <div className="welcome-message">
//             <h2>Welcome, User!</h2>
//             <button onClick={() => setIsLoggedIn(false)}>Logout</button>
//           </div>
//         ) : (
//           <div>
//             <div className="db-loans-container">
//               {filteredLoans.map((loan, index) => (
//                 <div key={index} className="db-loan-card">
//                   <h2>{loan.type}</h2>
//                   <img className="db-image" src={loan.image} alt={`${loan.type} Image`} />
//                   <div className="db-p">{loan.description}</div>
//                   <div className="db-loan-buttons">
//                     <Link to={loan.link} style={{ textDecoration: 'none', color: 'white' }}>Apply</Link>
//                     <button className="db-know-more-button">
//                       <Link to="/funds" style={{ textDecoration: 'none', color: 'white' }}>Know More</Link>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="check-status-form">
//               <div className="search-bar-container">
//                 Enter Loan ID:
//                 <input
//                   type="text"
//                   placeholder="Enter Loan ID"
//                   value={loanId}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <form onSubmit={handleCheckStatus}>
//                 <label>
//                   Check Loan Status:
//                   <input type="submit" value="Check Status" />
//                 </label>
//               </form>
//               {loanData && (
//                 <div>
//                   <p>Loan Status: {loanStatus}</p>
//                   {/* Render additional loan details here */}
//                 </div>
                
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Dashboard;

// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import Navbar from '../Components/Navbar.jsx';
// // import axios from 'axios';
// // import tractor from '../assets/Images/tractor.jpg';
// // import land from '../assets/Images/land.jpg';
// // import crop from '../assets/Images/crop.jpeg';
// // import '../assets/css/Dashboard.css';

// // function Dashboard() {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [loanStatus, setLoanStatus] = useState('');
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [loanId, setLoanId] = useState('');
// //   const [loanData, setLoanData] = useState(null);
// //   const [allLoans, setAllLoans] = useState([]);

// //   useEffect(() => {
// //     const fetchLoans = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:8081/loanApplicants");
// //         setAllLoans(response.data);
// //       } catch (error) {
// //         console.error("Error fetching loans:", error);  
// //       }
// //     };

// //     fetchLoans();
// //   }, []);

// //   const handleSearchChange = (event) => {
// //     setSearchTerm(event.target.value);
// //   };

// //   const handleCheckStatus = async (event) => {
// //     event.preventDefault();
// //     try {
// //       const response = await axios.get(`http://localhost:8081/loanApplicants/${loanId}`);
// //       setLoanData(response.data);
// //       setLoanStatus(response.data.status);
// //     } catch (error) {
// //       console.error("Error fetching loan status:", error);
// //     }
// //   };

// //   const handleInputChange = (event) => {
// //     setLoanId(event.target.value);
// //   };

// //   const loans = [
// //     { type: 'Tractor Loan', image: tractor, description: 'Get to know more about the eligibility, features, offers & more to apply for a tractor loan.', link: '/loanapply' },
// //     { type: 'Land Loan', image: land, description: 'Get to know more about the eligibility, features, offers & more to apply for a Land loan.', link: '/loanapply' },
// //     { type: 'Crop Loan', image: crop, description: 'Get to know more about the eligibility, features, offers & more to apply for a crop loan.', link: '/loanapply' },
// //     // Add more loans as needed
// //   ];

// //   const filteredLoans = allLoans.filter((loan) =>
// //     loan.loanType.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <>
// //       <Navbar />
// //       <div>
// //         {isLoggedIn ? (
// //           <div className="welcome-message">
// //             <h2>Welcome, User!</h2>
// //             <button onClick={() => setIsLoggedIn(false)}>Logout</button>
// //           </div>
// //         ) : (
// //           <div>
// //             <div className="db-loans-container">
// //               {filteredLoans.map((loan, index) => (
// //                 <div key={index} className="db-loan-card">
// //                   <h2>{loan.loanType}</h2>
// //                   {/* Add image and description */}
// //                   <div className="db-loan-buttons">
// //                     <Link to={loan.link} style={{ textDecoration: 'none', color: 'white' }}>Apply</Link>
// //                     <button className="db-know-more-button">
// //                       <Link to="/funds" style={{ textDecoration: 'none', color: 'white' }}>Know More</Link>
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="check-status-form">
// //               <div className="search-bar-container">
// //                 Enter Loan ID:
// //                 <input
// //                   type="text"
// //                   placeholder="Enter Loan ID"
// //                   value={loanId}
// //                   onChange={handleInputChange}
// //                 />
// //               </div>
// //               <form onSubmit={handleCheckStatus}>
// //                 <label>
// //                   Check Loan Status:
// //                   <input type="submit" value="Check Status" />
// //                 </label>
// //               </form>
// //               {loanData && (
// //                 <div>
// //                   <p>Loan Status: {loanStatus}</p>
// //                   {/* Render additional loan details here */}
// //                   <table>
// //                     <thead>
// //                       <tr>
// //                         <th>Loan ID</th>
// //                         <th>Loan Type</th>
// //                         <th>Applicant Name</th>
// //                         <th>Applicant Address</th>
// //                         <th>Applicant Mobile</th>
// //                         <th>Applicant Email</th>
// //                         <th>Applicant Aadhaar</th>
// //                         <th>Applicant PAN</th>
// //                         <th>Applicant Salary</th>
// //                         <th>Loan Amount</th>
// //                         <th>Repayment Months</th>
// //                         <th>Status</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody>
// //                       <tr>
// //                         <td>{loanData.loanId}</td>
// //                         <td>{loanData.loanType}</td>
// //                         <td>{loanData.applicantName}</td>
// //                         <td>{loanData.applicantAddress}</td>
// //                         <td>{loanData.applicantMobile}</td>
// //                         <td>{loanData.applicantEmail}</td>
// //                         <td>{loanData.applicantAadhaar}</td>
// //                         <td>{loanData.applicantPan}</td>
// //                         <td>{loanData.applicantSalary}</td>
// //                         <td>{loanData.loanAmountRequired}</td>
// //                         <td>{loanData.loanRepaymentMonths}</td>
// //                         <td>{loanData.status}</td>
// //                       </tr>
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </>
// //   );
// // }

// // export default Dashboard;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import tractor from '../assets/Images/tractor.jpg';
import land from '../assets/Images/land.jpg';
import crop from '../assets/Images/crop.jpeg';
import '../assets/css/Dashboard.css';

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [loanStatus, setLoanStatus] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loanId, setLoanId] = useState('');
  const [loanData, setLoanData] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckStatus = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8081/loanApplicants/${loanId}`);
      setLoanData(response.data);
      setLoanStatus(response.data.status);
    } catch (error) {
      console.error("Error fetching loan status:", error);
    }
  };

  const handleInputChange = (event) => {
    setLoanId(event.target.value);
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
      <Navbar />
      <div>
        {isLoggedIn ? (
          <div className="welcome-message">
            <h2>Welcome, User!</h2>
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          </div>
        ) : (
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
                Enter Loan ID:
                <input
                  type="text"
                  placeholder="Enter Loan ID"
                  value={loanId}
                  onChange={handleInputChange}
                />
              </div>
              <form onSubmit={handleCheckStatus}>
                <label>
                  Check Loan Status:
                  <input type="submit" value="Check Status" />
                </label>
              </form>
              {loanData && (
                <div>
                  <p>Loan Status: {loanStatus}</p>
                  <table>
                    <thead>
                      <tr>
                        <th>Loan ID</th>
                        <th>Loan Type</th>
                        <th>Applicant Name</th>
                        <th>Applicant Address</th>
                        <th>Applicant Mobile</th>
                        <th>Applicant Email</th>
                        <th>Applicant Aadhaar</th>
                        <th>Applicant PAN</th>
                        <th>Applicant Salary</th>
                        <th>Loan Amount</th>
                        <th>Repayment Months</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{loanData.loanId}</td>
                        <td>{loanData.loanType}</td>
                        <td>{loanData.applicantName}</td>
                        <td>{loanData.applicantAddress}</td>
                        <td>{loanData.applicantMobile}</td>
                        <td>{loanData.applicantEmail}</td>
                        <td>{loanData.applicantAadhaar}</td>
                        <td>{loanData.applicantPan}</td>
                        <td>{loanData.applicantSalary}</td>
                        <td>{loanData.loanAmountRequired}</td>
                        <td>{loanData.loanRepaymentMonths}</td>
                        <td>{loanData.status}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
