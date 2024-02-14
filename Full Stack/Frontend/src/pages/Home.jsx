import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';
import bgimg from '../assets/Images/bg.jpg';
import drone from '../assets/Images/drone.jpg';
import crops from '../assets/Images/crops.jpg';
import irrigation from '../assets/Images/irrigation.jpg';
import Navbar from '../Components/Navbar.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='agriculture-home'>
        <section>
          <center>
            <h2>Welcome to Our Platform</h2>
          </center>
          <div className="card">
            <img src={bgimg} alt="Background" />
            <div className="card-content">
              <p className="card-description">
                <h2>Get Started Today</h2>
                New to our platform? <br />Begin your journey towards efficient farm financing by<br/>{' '}
                <center>
                  <Link to="/register">Registering for an account</Link>.
                </center>
                <br />
                Existing users can easily{' '}
                <br/>
                <center>
                  <Link to="/login">Log in</Link>
                </center>
                to access their accounts and manage their agricultural loans seamlessly.
              </p>
             <h2>"Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals & happiness."</h2>
              
            </div>
          </div>
        </section>
        <section>
          

          <div className="card">
            <img src={drone} alt="Background" />
            <div className="card-content">
              <p className="card-description">
                <h2>Modern Agriculture</h2>
                {/* New to our platform? <br />Begin your journey towards efficient farm financing by<br/>{' '} */}
                Modern agriculture has undergone a profound transformation, integrating cutting-edge technology, sustainable practices, and innovative techniques to meet the world's growing food demands. Precision agriculture utilizes drones, GPS, and sensors to optimize crop management, reducing resource wastage and increasing yields. Genetic engineering and biotechnology have revolutionized crop breeding, creating disease-resistant and high-yielding varieties. Sustainable farming practices prioritize soil health, water conservation, and biodiversity preservation, mitigating environmental impact. Vertical farming and hydroponics enable efficient food production in urban areas, reducing transportation costs and emissions. Furthermore, data analytics and machine learning algorithms aid in predictive analytics for pest control, weather forecasting, and yield optimization. Despite these advancements, challenges like climate change, soil degradation, and food insecurity persist, urging continuous innovation and collaboration within the agricultural sector to ensure food security for future generations.  </p>
              
            </div>
          </div>
        </section>
        <section>
         
          <div className="card">
            <img src={crops} alt="Background" />
            <div className="card-content">
              <p className="card-description">
              <h2>Crops</h2>
              Agricultural crops are the lifeblood of humanity, providing sustenance, economic stability, and ecological balance. These crops encompass a diverse array of plants cultivated for food, fiber, fuel, and medicinal purposes. Staple crops like rice, wheat, and maize form the foundation of global food security, feeding billions worldwide. Meanwhile, cash crops such as cotton, coffee, and tobacco drive economies and livelihoods in many regions.

In recent years, the agricultural sector has seen advancements in crop breeding, genetic engineering, and sustainable farming practices aimed at enhancing yields, resilience, and nutritional quality. However, challenges such as climate change, soil degradation, water scarcity, and pest infestations continue to threaten crop productivity and farmer livelihoods.

The future of agriculture lies in innovation, with emerging technologies like precision agriculture, vertical farming, and agroecology offering promising solutions to address these challenges while ensuring food security and environmental sustainability for generations to come.

             </p>
              
            </div>
          </div>
        </section>

        <section>
         
         <div className="card">
           <img src={irrigation} alt="Background" />
           <div className="card-content">
             <p className="card-description">
             <h2>Irrigation</h2>
             Agricultural irrigation is the systematic application of water to soil to assist in the growth of crops. It plays a crucial role in modern agriculture, ensuring stable yields and food security. Various methods, including surface irrigation, sprinkler systems, and drip irrigation, are employed based on factors like soil type, climate, and crop requirements. Surface irrigation, the oldest form, involves flooding fields with water diverted from rivers or reservoirs. Sprinkler systems mimic rainfall by spraying water over crops, suitable for areas with low humidity or uneven terrain. Drip irrigation delivers water directly to the root zone of plants, conserving water and minimizing evaporation. Efficient irrigation practices enhance crop quality, increase yields, and mitigate water scarcity challenges, contributing to sustainable agriculture. However, improper irrigation techniques can lead to soil salinization, waterlogging, and environmental degradation, highlighting the importance of adopting water-efficient strategies in agriculture.
             </p>
             
           </div>
         </div>
       </section>
         

          
             
      </div>
    </>
  );
};

export default Home;
