import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSatelliteDish, 
  FaChartLine, 
  FaMobileAlt, 
  FaCloud, 
  FaWifi, 
  FaBatteryFull,
  FaThermometerHalf,
  FaIndustry,
  FaHome,
  FaBuilding
} from 'react-icons/fa';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SolarMonitoringSystems = () => {
  // Monitoring Features
  const monitoringFeatures = [
    {
      icon: <FaChartLine size={50} className="text-primary" />,
      title: "Real-Time Performance Tracking",
      description: "Instant insights into solar system performance",
      benefits: [
        "Live energy production monitoring",
        "Comprehensive system analytics",
        "Predictive maintenance alerts"
      ]
    },
    {
      icon: <FaCloud size={50} className="text-info" />,
      title: "Cloud-Based Monitoring",
      description: "Secure and accessible data management",
      benefits: [
        "24/7 data accessibility",
        "Secure cloud storage",
        "Multi-device synchronization"
      ]
    },
    {
      icon: <FaMobileAlt size={50} className="text-success" />,
      title: "Mobile App Integration",
      description: "Monitor your solar system from anywhere",
      benefits: [
        "Real-time notifications",
        "Remote system control",
        "Detailed performance reports"
      ]
    }
  ];

  // Installation Types
  const installationTypes = [
    {
      icon: <FaHome size={40} className="text-primary" />,
      title: "Residential",
      description: "Tailored solutions for home solar systems"
    },
    {
      icon: <FaBuilding size={40} className="text-success" />,
      title: "Commercial",
      description: "Scalable monitoring for business installations"
    },
    {
      icon: <FaIndustry size={40} className="text-info" />,
      title: "Industrial",
      description: "Advanced monitoring for large-scale solar projects"
    }
  ];

  // Validation Schema
  const monitoringRequestSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Full name is required'),
    
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    
    installationType: Yup.string()
      .required('Please select an installation type'),
    
    systemSize: Yup.number()
      .positive('System size must be positive')
      .required('System size is required')
  });

  // Initial Form Values
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    installationType: '',
    systemSize: '',
    additionalDetails: ''
  };

  // Form Submit Handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Monitoring Request:', values);
      
      // Show success message
      alert('Your monitoring system request has been submitted successfully! Our team will contact you soon.');
      
      // Reset form
      resetForm();
    } catch (error) {
      console.error('Submission Error:', error);
      alert('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="solar-monitoring-systems container-fluid py-5 bg-light"
    >
      {/* Hero Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="display-4 text-primary"
          >
            Advanced Solar Monitoring Systems
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lead text-muted"
          >
            Comprehensive monitoring solutions for residential, commercial, and industrial solar installations
          </motion.p>
        </div>
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded shadow"
          >
            <FaSatelliteDish size={80} className="text-primary mb-3" />
            <h3>Smart. Connected. Efficient.</h3>
            <p>Real-time insights into your solar system's performance</p>
          </motion.div>
        </div>
      </div>

      {/* Monitoring Features */}
      <div className="row mb-5">
        {monitoringFeatures.map((feature, index) => (
          <div key={index} className="col-md-4">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="feature-card text-center bg-white p-4 rounded shadow mb-4"
            >
              {feature.icon}
              <h4 className="mt-3">{feature.title}</h4>
              <p className="text-muted">{feature.description}</p>
              <ul className="list-unstyled">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="mb-2">
                    <FaWifi className="mr-2 text-success" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Monitoring Request Form */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="monitoring-request-form bg-white p-5 rounded shadow"
          >
            <h2 className="text-center mb-4 text-primary">
              Request Monitoring System
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={monitoringRequestSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  {/* Form Fields */}
                  <div className="row">
                    <div className="col-md-6 form-group mb-3">
                      <label>Full Name</label>
                      <Field 
                        name="name" 
                        type="text" 
                        className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                        placeholder="Your Full Name"
                      />
                      <ErrorMessage name="name" component="div" className="invalid-feedback" />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label>Email Address</label>
                      <Field 
                                              name="email" 
                                              type="email" 
                                              className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                                              placeholder="Your Email Address"
                                            />
                                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                          </div>
                                        </div>
                      
                                        <div className="row">
                                          <div className="col-md-6 form-group mb-3">
                                            <label>Phone Number</label>
                                            <Field 
                                              name="phone" 
                                              type="tel" 
                                              className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                                              placeholder="10-digit Phone Number"
                                            />
                                            <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                                          </div>
                      
                                          <div className="col-md-6 form-group mb-3">
                                            <label>Installation Type</label>
                                            <Field 
                                              as="select"
                                              name="installationType"
                                              className={`form-control ${touched.installationType && errors.installationType ? 'is-invalid' : ''}`}
                                            >
                                              <option value="">Select Installation Type</option>
                                              {installationTypes.map((type, index) => (
                                                <option key={index} value={type.title.toLowerCase()}>
                                                  {type.title}
                                                </option>
                                              ))}
                                            </Field>
                                            <ErrorMessage name="installationType" component="div" className="invalid-feedback" />
                                          </div>
                                        </div>
                      
                                        <div className="row">
                                          <div className="col-md-6 form-group mb-3">
                                            <label>Estimated System Size (kW)</label>
                                            <Field 
                                              name="systemSize" 
                                              type="number" 
                                              className={`form-control ${touched.systemSize && errors.systemSize ? 'is-invalid' : ''}`}
                                              placeholder="Enter system size"
                                            />
                                            <ErrorMessage name="systemSize" component="div" className="invalid-feedback" />
                                          </div>
                      
                                          <div className="col-md-6 form-group mb-3">
                                            <label>Additional Details</label>
                                            <Field 
                                              name="additionalDetails"
                                              as="textarea"
                                              className="form-control"
                                              placeholder="Any specific monitoring requirements?"
                                              rows={3}
                                            />
                                          </div>
                                        </div>
                      
                                        <div className="row mt-4">
                                          <div className="col-12">
                                            <button 
                                              type="submit" 
                                              className="btn btn-primary btn-block"
                                              disabled={isSubmitting}
                                            >
                                              {isSubmitting ? 'Submitting...' : 'Request Monitoring System'}
                                            </button>
                                          </div>
                                        </div>
                                      </Form>
                                    )}
                                  </Formik>
                                </motion.div>
                              </div>
                            </div>
                      
                            {/* Installation Types Section */}
                            <div className="row mt-5 text-center">
                              <div className="col-12 mb-4">
                                <h2 className="text-primary">Our Monitoring Solutions</h2>
                                <p className="lead text-muted">Tailored monitoring for every solar installation</p>
                              </div>
                              {installationTypes.map((type, index) => (
                                <div key={index} className="col-md-4">
                                  <motion.div 
                                    whileHover={{ scale: 1.1 }}
                                    className="installation-type bg-white p-4 rounded shadow mb-4"
                                  >
                                    {type.icon}
                                    <h4 className="mt-3">{type.title}</h4>
                                    <p className="text-muted">{type.description}</p>
                                  </motion.div>
                                </div>
                              ))}
                            </div>
                      
                            {/* Additional Monitoring Benefits */}
                            <div className="row mt-5 bg-white p-5 rounded shadow">
                              <div className="col-12 text-center mb-4">
                                <h2 className="text-primary">Why Choose Our Monitoring System?</h2>
                              </div>
                              <div className="col-md-4 text-center">
                                <FaBatteryFull size={50} className="text-success mb-3" />
                                <h4>Battery Performance</h4>
                                <p>Real-time battery health tracking and optimization</p>
                              </div>
                              <div className="col-md-4 text-center">
                                <FaThermometerHalf size={50} className="text-warning mb-3" />
                                <h4>Environmental Monitoring</h4>
                                <p>Comprehensive environmental condition tracking</p>
                              </div>
                              <div className="col-md-4 text-center">
                                <FaWifi size={50} className="text-info mb-3" />
                                <h4>Connectivity & Alerts</h4>
                                <p>Instant notifications and comprehensive reporting</p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      };
                      
                      // Custom Hook for Performance Analytics
                      const usePerformanceAnalytics = () => {
                        const [analytics, setAnalytics] = useState({
                          totalEnergyProduced: 0,
                          systemEfficiency: 0,
                          carbonOffset: 0
                        });
                      
                        useEffect(() => {
                          const calculateAnalytics = () => {
                            const energyProduced = Math.random() * 1000;
                            setAnalytics({
                              totalEnergyProduced: energyProduced,
                              systemEfficiency: Math.min(energyProduced / 10, 100),
                              carbonOffset: energyProduced * 0.5
                            });
                          };
                      
                          calculateAnalytics();
                          const interval = setInterval(calculateAnalytics, 30000);
                      
                          return () => clearInterval(interval);
                        }, []);
                      
                        return analytics;
                      };
                      
                      export default SolarMonitoringSystems;
                       
                       
                       