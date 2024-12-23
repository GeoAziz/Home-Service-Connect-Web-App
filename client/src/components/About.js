//About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div id="about">
    <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1><b>About PoaFix</b></h1><br/>
            <p>At PoaFix, we believe that finding the right service provider should be a seamless and stress-free experience. Founded with a vision to bridge the gap between clients and skilled professionals, we have created a platform that empowers individuals and businesses to connect with trusted service providers across various industries.</p>
          </div>
          <div className='col-md-5'>
              <img className='rounded' src="/images/poaFix.jpg" alt="Main" height="400" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          <Link to="/AboutMore" className='btn btn-dark'>More About Us</Link><br/><br/><br/>
          </div>
        </div>
    </div>
    </div>
  );
}

export default About;