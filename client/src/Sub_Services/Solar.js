import React, { Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar.js';
import Footer from '../components/Footer.js';

function Solar() {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  // Style for making the entire card clickable and look like a link
  const cardStyle = {
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  };

  return (
    <>
      <SubNavbar />
      <div id="services">
        <div className="container">
          <br/>
          <br/>
          <h1 className='text-center'><b>Welcome to Solar</b></h1>
          <div className="row">
            {/* First Row of Cards */}
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/solar/panel-installations" style={cardStyle}>
                <div className="p_10 text-center">
                  <img src="/images/solar.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Solar Panel Installation'/>
                  <div className="repair text-center"><b>Solar Panel Installation</b></div>
                  <div className="maintenance text-center">Designing and installing solar panel systems for residential and commercial properties.</div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/solar/maintenance-and-repair" style={cardStyle}>
                <div className="p_10 text-center">
                  <img src="/images/panel.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Solar Maintenance'/>
                  <div className="repair text-center"><b>Solar Maintenance and Repairs</b></div>
                  <div className="maintenance text-center">Providing routine maintenance services to ensure optimal performance.</div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/solar/energy-audits-and-consultations" style={cardStyle}>
                <div className="p_10 text-center">
                  <img src="/images/energy.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Energy Audits'/>
                  <div className="repair text-center"><b>Energy Audits and Consultations</b></div>
                  <div className="maintenance text-center">Conducting energy audits to assess energy consumption and potential savings.</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Second Row of Cards */}
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/solar/battery-storage-solutions" style={cardStyle}>
                <div className="p_10 text-center">
                  <img src="/images/battery.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Battery Storage'/>
                  <div className="repair text-center"><b>Solar Battery Storage Solutions</b></div>
                  <div className="maintenance text-center">Installing solar battery systems for energy storage.</div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/solar/financing-and-leasing" style={cardStyle}>
                <div className="p_10 text-center">
                  <img src="/images/spal.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Solar Financing'/>
                  <div className="repair text-center"><b>Solar Financing and Leasing</b></div>
                  <div className="maintenance text-center">Offering financing options or leasing programs for solar installations.</div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/solar/monitoring-systems" style={cardStyle}>
                <div className="p_10 text-center">
                  <img src="/images/monitor.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Monitoring Systems'/>
                  <div className="repair text-center"><b>Solar Monitoring Systems</b></div>
                  <div className="maintenance text-center">Implementing monitoring systems to track the performance of solar installations.</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Solar;