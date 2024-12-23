import React from 'react';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  FaTree,
  FaLeaf,
  FaShieldAlt,
  FaClipboardList,
  FaWrench,
  FaSeedling,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const TreeCareAndArboriculture = () => {
  // Tree Care Services
  const treeCareServices = [
    {
      icon: <FaTree size={50} className="text-success" />,
      title: "Tree Health Assessment",
      description: "Comprehensive tree health evaluation",
      features: [
        "Detailed diagnostic analysis",
        "Disease identification",
        "Treatment recommendations"
      ]
    },
    {
      icon: <FaSeedling size={50} className="text-primary" />,
      title: "Pruning & Maintenance",
      description: "Professional tree trimming and care",
      features: [
        "Structural pruning",
        "Crown cleaning",
        "Seasonal maintenance"
      ]
    },
    {
      icon: <FaShieldAlt size={50} className="text-warning" />,
      title: "Tree Protection",
      description: "Preventive tree care solutions",
      features: [
        "Pest management",
        "Root system protection",
        "Environmental stress mitigation"
      ]
    }
  ];

  // Tree Care Packages
  const carePackages = [
    {
      title: "Basic Tree Care",
      price: 299,
      features: [
        "Single tree health assessment",
        "Basic pruning",
        "Pest initial evaluation",
        "Annual consultation"
      ]
    },
    {
      title: "Comprehensive Tree Management",
      price: 799,
      features: [
        "Multiple tree health assessment",
        "Advanced pruning techniques",
        "Detailed pest control",
        "Bi-annual professional care",
        "Soil health analysis"
      ]
    },
    {
      title: "Premium Arborist Solution",
      price: 1499,
      features: [
        "Full property tree ecosystem management",
        "Advanced diagnostic testing",
        "Comprehensive pruning",
        "Quarterly professional inspections",
        "Emergency tree care",
        "Customized tree preservation plan"
      ]
    }
  ];

  // Validation Schema
  const treeCareSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Full name is required'),
    
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    
    propertyType: Yup.string()
      .required('Property type is required'),
    
    numberOfTrees: Yup.number()
      .positive('Number of trees must be positive')
      .required('Number of trees is required')
  });

  // Initial Form Values
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    numberOfTrees: '',
    treeIssues: '',
    carePackage: '',
    additionalComments: ''
  };

  // Form Submit Handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Tree Care Request:', values);
      alert('Your tree care request has been submitted successfully!');
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
      className="tree-care-services container-fluid py-5 bg-light"
    >
      {/* Hero Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="display-4 text-success"
          >
            Professional Tree Care & Arboriculture
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lead text-muted"
          >
            Expert Care for Your Trees and Landscape
          </motion.p>
        </div>
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded shadow"
          >
            <FaTree size={80} className="text-success mb-3" />
            <h3>Healthy. Strong. Sustainable.</h3>
            <p>Nurturing trees for a greener future</p>
          </motion.div>
        </div>
      </div>

      {/* Tree Care Services */}
      <div className="row mb-5">
        {treeCareServices.map((service, index) => (
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
                    <FaLeaf className="mr-2 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Tree Care Packages */}
      <div className="row mb-5 justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2 className="text-success">Tree Care Packages</h2>
          <p className="lead text-muted">Comprehensive Tree Management Solutions</p>
        </div>
        {carePackages.map((pkg, index) => (
          <div key={index} className="col-md-4">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="package-card text-center bg-white p-4 rounded shadow mb-4"
            >
              <h4 className="text-success">{pkg.title}</h4>
              <p className="display-4 text-primary">${pkg.price}</p>
              <ul className="list-unstyled">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    <FaWrench className="mr-2 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Tree Care Request Form */}
      <div className="row justify-content-center">
        <div className="col-md- ```jsx
8">
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="tree-care-form bg-white p-5 rounded shadow"
          >
            <h2 className="text-center mb-4 text-success">
              Request Tree Care Services
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={treeCareSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
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
                      <label>Property Type</label>
                      <Field 
                        as="select"
                        name="propertyType"
                        className={`form-control ${touched.propertyType && errors.propertyType ? 'is-invalid' : ''}`}
                      >
                        <option value="">Select Property Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="municipal">Municipal</option>
                        <option value="agricultural">Agricultural</option>
                      </Field>
                      <ErrorMessage name="propertyType" component="div" className="invalid-feedback" />
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label>Number of Trees</label>
                    <Field 
                      name="numberOfTrees"
                      type="number"
                      className={`form-control ${touched.numberOfTrees && errors.numberOfTrees ? 'is-invalid' : ''}`}
                      placeholder="Number of Trees"
                    />
                    <ErrorMessage name="numberOfTrees" component="div" className="invalid-feedback" />
                  </div>

                  <div className="form-group mb-3">
                    <label>Tree Issues or Concerns</label>
                    <Field 
                      name="treeIssues"
                      as="textarea"
                      className="form-control"
                      placeholder="Describe any tree issues or concerns"
                      rows={4}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Tree Care Package</label>
                    <Field 
                      as="select"
                      name="carePackage"
                      className="form-control"
                    >
                      <option value="">Select Tree Care Package</option>
                      {carePackages.map((pkg, index) => (
                        <option key={index} value={pkg.title}>
                          {pkg.title} - ${pkg.price}
                        </option>
                      ))}
                    </Field>
                  </div>

                  <div className="form-group mb-3">
                    <label>Additional Comments</label>
                    <Field 
                      name="additionalComments"
                      as="textarea"
                      className="form-control"
                      placeholder="Describe any specific concerns or additional information"
                      rows={4}
                    />
                  </div>

                  <div className="row mt-4">
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-success btn-block"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Request Tree Care'}
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
          <h2 className="text-success">Why Choose Our Tree Care Services</h2>
        </div>
        <div className="col-md-4 text-center">
          <FaShieldAlt size={50} className="text-success mb-3" />
          <h4>Professional Expertise</h4>
          <p>Trained and certified arborists</p>
        </div>
        <div className="col-md-4 text-center">
          <FaLeaf size={50} className="text-success mb-3" />
          <h4>Environmental Stewardship</h4>
          <p>Eco-friendly tree care practices</p>
        </div>
        <div className="col-md-4 text-center">
          <FaWrench size={50} className="text-success mb-3" />
          <h4>Effective Results</h4>
          <p>Long-term tree health and sustainability</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="row mt-5 bg-white p-5 rounded shadow">
        <div className="col-12 text-center mb-4">
          <h2 className="text-success">Contact Our Tree Care Experts</h2>
        </div>
        <div className="col-md-4 text-center">
          <FaEnvelope size={50} className="text-success mb-3" />
          <h4>Email</h4>
          <p>treeservices@treecareexperts.com</p>
        </div>
        <div className="col-md-4 text-center">
          <FaPhone size={50} className="text-success mb-3" />
          <h4>Phone</h4>
          <p>(555) 123-4567</p>
        </div>
        <div className="col-md-4 text-center">
          <FaMapMarkerAlt size={50} className="text-success mb-3" />
          <h4>Address</h4>
          <p>123 Main St, Anytown, ST 12345</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="row mt-5">
        <div className="col-12 text-center mb-4">
          <h2 className="text-success">What Our Clients Say</h2>
        </div>
        <div className="col-md-4">
          <div className="testimonial bg-white p-4 rounded shadow">
            <p>"The tree care service was prompt and professional. Highly recommended."</p>
            <h5>- John Doe</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial bg-white p-4 rounded shadow">
            <p>"Their tree pruning techniques were impressive. We're very satisfied."</p>
            <h5>- Jane Smith</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial bg-white p-4 rounded shadow">
            <p>"We were amazed by the effectiveness of their tree care methods. Great job!"</p>
            <h5>- Bob Johnson</h5>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TreeCareAndArboriculture;