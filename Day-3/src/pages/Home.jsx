import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';
import bgimg from '../assets/Images/bg.jpg'
import Navbar from '../Components/Navbar.jsx';
const Home = () => {
  return (
    // <div className='home-image'>
    <>
     <Navbar/>
    <div className='agriculture-home'>
      <section>
        <center>

        <h2>Welcome to Our Platform</h2>
        </center>
        <div className="card">
  <img src={bgimg}  />
  <div className="card-content">
    <p className="card-description"><h2>Get Started Today</h2>
        
          New to our platform? <br/>Begin your journey towards efficient farm financing by{' '}<br/>
          <center>

          <Link to="/register">Registering for an account</Link>.<br/>
          </center>
           Existing users can easily{' '}<br/>
           <center>

          <Link to="/login">Log in</Link>
           </center>
           to access their accounts and manage their agricultural loans seamlessly.
        </p>
        <section>
        <h2>Key Features</h2>
        <ul>
          <li>Streamlined loan application process: Easily apply for loans online, saving you time and effort.</li>
          <li>Transparent tracking of loan approval status: Stay informed about the progress of your loan application at every stage.</li>
          <li>Flexible repayment options to suit your farming needs: Choose from a variety of repayment plans that align with your crop cycles and revenue streams.</li>
          <li>Specialized loans for different crops and farm sizes: Benefit from customized loan packages designed for specific crops and the scale of your agricultural operations.</li>
        </ul>
      </section>
    

  </div>
</div>
      
      </section>

     

          </div>
          </>
    
  );
};

export default Home;
