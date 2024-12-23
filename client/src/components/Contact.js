import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm"; // Import the ContactForm component

export default function ContactUS() {
  const [submittedData, setSubmittedData] = useState([]); // State to hold submitted data

  const contactSectionStyle = {
    backgroundColor: '#E8E8E8',
  };

  // Fetch submitted data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/connect'); // Adjust the URL as needed
      const data = await response.json();
      setSubmittedData(data);
    };

    fetchData();
  }, []);

  const handleNewSubmission = async () => {
    const response = await fetch('/api/connect'); // Fetch updated data
    const data = await response.json();
    setSubmittedData(data);
  };

  return (
    <div id="contact">
      <section style={contactSectionStyle} className="py-5">
        <div className="container">
          <div className="row">
            {/* Section Title */}
            <div className="col-lg-8 mx-auto text-center" data-aos="fade-right" data-aos-duration="2000">
              <h1 className="section-heading text-black">Contact Us</h1>
              <hr className="my-4" />
              <p className="text-muted mb-5">Your thoughts and feedback are important to us. Don’t hesitate to reach out—connect with us today!</p>
            </div>
          </div>
          <div className="row">
            {/* Phone Info */}
            <div className="col-lg-4 col-md-6 ml-auto text-center mb-4" data-aos="fade-right" data-aos-duration="2000">
              <i className="fas fa-phone fa-2x mb-3 text-black"></i>
              <p className="text-muted">+254-793966910</p>
            </div>
            {/* Email Info */}
            <div className="col-lg-4 col-md-6 text-center mb-4" data-aos="fade-right" data-aos-duration="2000">
              <i className="fas fa-envelope fa-2x mb-3 text-black"></i>
              <p>
                <a href="mailto:info@PoaFix.com" className="text-dark">info@PoaFix.com</a>
              </p>
            </div>
            {/* Location Info */}
            <div className="col-lg-4 col-md-6 mr-auto text-center mb-4" data-aos="fade-right" data-aos-duration="2000">
              <i className="fas fa-map-marker-alt fa-2x mb-3 text-black"></i>
              <p className="text-muted">Nairobi, Kenya</p>
            </div>
          </div>
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-8 mx-auto text-center" data-aos="fade-right" data-aos-duration="2000">
              <ContactForm onNewSubmission={handleNewSubmission} /> {/* Pass the function to ContactForm */}
            </div>
          </div>
          <div className="row mt-4">
            {/* Contact Person Info */}
            <div className="col-lg-8 mx-auto text-center">
              <p className="text-muted">
                Contact Person: PoaFix | Email: 
                <a href="mailto:help@PoaFix.com" className="text-black"> help@PoaFix.com</a>
              </p>
            </div>
          </div>
          <div className="row mt-4">
            {/* Display Submitted Data */}
            <div className="col-lg-8 mx-auto text-center">
              <h3>Submitted Messages</h3>
              <ul>
                {submittedData.map((data, index) => (
                  <li key={index}>
                    <strong>{data.name}</strong>: {data.message} (Email: {data.email})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}