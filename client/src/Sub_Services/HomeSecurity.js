import React from 'react'; // Removed unused useState
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  FaShieldAlt,
  FaHome,
  FaLock,
  FaCamera,
  FaWrench,
  FaUserShield,
  FaFireExtinguisher,
  FaSatelliteDish,
  FaMobileAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const CommercialHomeSecurity = () => {
  // Security Services
  const securityServices = [
    {
      icon: <FaShieldAlt size={50} className="text-primary" />,
      title: "Advanced Surveillance",
      description: "Comprehensive monitoring solutions",
      features: [
        "24/7 Video Surveillance",
        "High-Resolution Cameras",
        "Cloud Storage",
        "Mobile App Integration"
      ]
    },
    {
      icon: <FaLock size={50} className="text-success" />,
      title: "Smart Access Control",
      description: "Intelligent security management",
      features: [
        "Biometric Entry Systems",
        "Keyless Access",
        "Remote Locking/Unlocking",
        "Visitor Management"
      ]
    },
    {
      icon: <FaFireExtinguisher size={50} className="text-danger" />,
      title: "Integrated Safety Systems",
      description: "Comprehensive protection solutions",
      features: [
        "Fire Detection",
        "Carbon Monoxide Monitoring",
        "Emergency Response",
        "Automated Alerts"
      ]
    }
  ];

  // Security Packages
  const securityPackages = [
    {
      title: "Basic Commercial Protection",
      price: 1499,
      features: [
        "Basic Surveillance System",
        "Perimeter Monitoring",
        "Mobile App Access",
        "Annual Security Assessment",
        "24/7 Customer Support"
      ]
    },
    {
      title: "Advanced Business Security",
      price: 2999,
      features: [
        "Comprehensive Surveillance",
        "Smart Access Control",
        "Integrated Alarm Systems",
        "Biometric Entry",
        "Advanced Analytics",
        "Quarterly Security Audits",
        "Priority Emergency Response"
      ]
    },
    {
      title: "Enterprise Security Solution",
      price: 4999,
      features: [
        "Multi-Location Monitoring",
        "AI-Powered Threat Detection",
        "Advanced Cybersecurity Integration",
        "Customized Security Protocols",
        "Executive Protection Services",
        "Continuous Threat Assessment",
        "Dedicated Security Consultant"
      ]
    }
  ];

  // Technology Highlights
  const technologyHighlights = [
    {
      icon: <FaSatelliteDish size={50} className="text-info" />,
      title: "Cutting-Edge Technology",
      description: "State-of-the-art security innovations"
    },
    {
      icon: <FaMobileAlt size={50} className="text-primary" />,
      title: "Mobile Integration",
      description: "Control and monitor from anywhere"
    }
  ];

  // Validation Schema
  const securityRequestSchema = Yup.object().shape({
    companyName: Yup.string()
      .min(2, 'Company name must be at least 2 characters')
      .required('Company name is required'),
    
    contactPerson: Yup.string()
      .required('Contact person name is required'),
    
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    
    propertySize: Yup.number()
      .positive('Property size must be positive')
      .required('Property size is required')
  });

  // Initial Form Values
  const initialValues = {
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    propertySize: '',
    securityPackage: '',
    additionalRequirements: ''
  };

  // Form Submit Handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Security Request:', values);
      alert('Your security consultation request has been submitted successfully!');
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
      className="commercial-security-services container-fluid py-5 bg-light"
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
            Enterprise Security Solutions
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lead text-muted"
          >
            Comprehensive Protection for Your Business
          </motion.p>
        </div>
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded shadow"
          >
            <FaUserShield size={80} className="text-primary mb-3" />
            <h3>Secure. Smart. Reliable.</h3>
            <p>Protecting your business with advanced technology</p>
          </motion.div>
        </div>
      </div>

      {/* Security Services */}
      <div className="row mb-5">
        {securityServices.map((service, index) => (
          <div key={index} className="col-md-4">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="service-card text-center bg-white p-4 rounded shadow mb-4"
            >
              {service.icon}
              <h4 className="mt-3">{service.title}</h4>
              <p className="text-muted">{service.description}</p>
              <ul className="list-unstyled">
                {service.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    <FaLock className="mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Security Packages */}
      <div className="row mb-5 justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2 className="text-primary">Commercial Security Packages</h2>
          <p className="lead text-muted">Tailored Protection for Every Business</p>
        </div>
        {securityPackages.map((pkg, index) => (
          <div key={index} className="col-md-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="package-card text-center bg-white p-4 rounded shadow mb-4"
            >
              <h4 className="text-primary">{pkg.title}</h4>
              <p className="display-4 text-success">${pkg.price}</p>
              <ul className="list-unstyled">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    <FaWrench className="mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Technology Highlights */}
      <div className="row mb-5">
        {technologyHighlights.map((highlight, index) => (
          <div key={index} className="col-md-6">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="highlight-card text-center bg-white p-4 rounded shadow mb-4"
            >
              {highlight.icon}
              <h4 className="mt-3">{highlight.title}</h4>
              <p className="text-muted">{highlight.description}</p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Security Request Form */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="security-request-form bg-white p-5 rounded shadow"
          >
            <h2 className="text-center mb-4 text-primary">
              Request a Security Consultation
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={securityRequestSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  <div className="row">
                    <div className="col-md-6 form-group mb-3">
                      <label>Company Name</label>
                      <Field 
                        name="companyName" 
                        type="text" 
                        className={`form-control ${touched.companyName && errors.companyName ? 'is-invalid' : ''}`}
                        placeholder="Your Company Name"
                      />
                      <ErrorMessage name="companyName" component="div" className="invalid-feedback" />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label>Contact Person</label>
                      <Field 
                        name="contactPerson" 
                        type="text" 
                        className={`form-control ${touched.contactPerson && errors.contactPerson ? 'is-invalid' : ''}`}
                        placeholder="Your Name"
                      />
                      <ErrorMessage name="contactPerson" component="div" className="invalid-feedback" />
                    </div>
                  </div>

                  <div className="row">
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
                  </div>

                  <div className="form-group mb-3">
                    <label>Property Size (sqft)</label>
                    <Field 
                      name="propertySize"
                      type="number"
                      className={`form-control ${touched.propertySize && errors.propertySize ? 'is-invalid' : ''}`}
                      placeholder="Property Size"
                    />
                    <ErrorMessage name="propertySize" component="div" className="invalid-feedback" />
                  </div>

                  <div className="form-group mb-3">
                    <label>Security Package</label>
                    <Field 
                      as="select"
                      name="securityPackage"
                      className="form-control"
                    >
                      <option value="">Select Security Package</option>
                      {securityPackages.map((pkg, index) => (
                        <option key={index} value={pkg.title}>
                          {pkg.title} - ${pkg.price}
                        </option>
                      ))}
                    </Field>
                  </div>

                  <div className="form-group mb-3">
                    <label>Additional Requirements</label>
                    <Field 
                      name="additionalRequirements"
                      as="textarea"
                      className="form-control"
                      placeholder="Describe any specific security requirements"
                      rows={4}
                    />
                  </div>

                  <div className="row mt-4">
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-primary btn-block"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Request Security Consultation'}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="row mt-5 bg-white p-5 rounded shadow">
        <div className="col-12 text-center mb-4">
          <h2 className="text-primary">Why Choose Our Security Services</h2>
        </div>
        <div className="col-md-4 text-center">
          <FaShieldAlt size={50} className="text-primary mb-3" />
          <h4>Expert Security Solutions</h4>
          <p>Comprehensive protection for your business</p>
        </div>
        <div className="col-md-4 text-center">
          <FaLock size={50} className="text-success mb-3" />
          <h4>Advanced Technology</h4>
          <p>State-of-the-art security innovations</p>
        </div>
        <div className="col-md-4 text-center">
          <FaUserShield size={50} className="text-primary mb-3" />
          <h4>Personalized Service</h4>
          <p>Dedicated security consultants for your business</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="row mt-5 bg-white p-5 rounded shadow">
        <div className="col-12 text-center mb-4">
          <h2 className="text-primary">Contact Our Security Experts</h2>
        </div>
        <div className="col-md-4 text-center">
          <FaPhone size={50} className="text-info mb-3" />
          <p className="lead">Call Us: (123) 456-7890</p>
        </div>
        <div className="col-md-4 text-center">
          <FaEnvelope size={50} className="text-info mb-3" />
          <p className="lead">Email: support@security.com</p>
        </div>
        <div className="col-md-4 text-center">
          <FaMapMarkerAlt size={50} className="text-info mb-3" />
          <p className="lead">Visit Us: 123 Security St, Business City</p>
        </div>
      </div>
    </motion.div>
  );
}

export default CommercialHomeSecurity;
