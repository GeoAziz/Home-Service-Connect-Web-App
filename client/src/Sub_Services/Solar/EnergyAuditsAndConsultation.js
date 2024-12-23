import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaChartLine, FaCalculator, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import SubNavbar from '..//../components/SubNavbar';
import Footer from '../../components/Footer';

function EnergyAuditsAndConsultations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    energyGoals: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    console.log('Submission Data:', formData);
    alert('Your consultation request has been submitted!');
  };

  const pageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.1 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  return (
    <>
      <SubNavbar />
      <motion.div 
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="energy-audits-page"
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="energy-intro"
              >
                <h1 className="display-4 text-primary mb-4">
                  Energy Audits & Consultations
                </h1>
                <p className="lead text-muted">
                  Optimize Your Energy Efficiency and Reduce Costs
                </p>
                
                <div className="energy-benefits mt-4">
                  <div className="benefit-item mb-3">
                    <FaLeaf className="text-success mr-3" size={30} />
                    <span>Comprehensive Energy Assessment</span>
                  </div>
                  <div className="benefit-item mb-3">
                    <FaChartLine className="text-primary mr-3" size={30} />
                    <span>Cost-Saving Recommendations</span>
                  </div>
                  <div className="benefit-item mb-3">
                    <FaCalculator className="text-info mr-3" size={30} />
                    <span>Detailed Performance Analysis</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="consultation-form bg-light p-4 rounded shadow"
              >
                <h3 className="text-center mb-4">Request Energy Consultation</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label>Full Name</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><FaUser /></span>
                      </div>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label>Email Address</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><FaEnvelope /></span>
                      </div>
                      <input 
                        type="email" 
                        className="form-control" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label>Phone Number</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><FaPhone /></span>
                      </div>
                      <input 
                        type="tel" 
                        className="form-control" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label>Property Type</label>
                    <select 
                      className="form-control"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Property Type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label>Energy Efficiency Goals</label>
                    <textarea 
                      className="form-control" 
                      name="energyGoals"
                      value={formData.energyGoals}
                      onChange={handleInputChange}
                      placeholder="Describe your energy efficiency objectives"
                      rows="3"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block"
                  >
                    Schedule Consultation
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default EnergyAuditsAndConsultations;