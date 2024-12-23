import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link for routing
import SubNavbar from '../components/SubNavbar.js';
import Footer from '../components/Footer.js';

function Washing() {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SubNavbar />
      <div id="services">
        <div className="container">
          <br />
          <br />
          <h1 className="text-center"><b>Welcome to Washing</b></h1>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/Washing/car-washing" className="service-card-link">
                <div className="p_10 text-center">
                  <img src="/images/car-wash.png" height="100rem" width="100rem" className="img-fluid images_padding" alt="Car Washing" />
                  <div className="repair text-center"><b>Car Washing and Detailing</b></div>
                  <div className="maintenance text-center">Exterior washing and waxing services.</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/Washing/laundry-services" className="service-card-link">
                <div className="p_10 text-center">
                  <img src="/images/washing-machine.png" height="100rem" width="100rem" className="img-fluid images_padding" alt="Laundry Services" />
                  <div className="repair text-center"><b>Laundry Services</b></div>
                  <div className="maintenance text-center">Dry cleaning services for delicate or special garments.</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/Washing/window-cleaning" className="service-card-link">
                <div className="p_10 text-center">
                  <img src="/images/win.png" height="100rem" width="100rem" className="img-fluid images_padding" alt="Window Cleaning" />
                  <div className="repair text-center"><b>Window Cleaning</b></div>
                  <div className="maintenance text-center">Exterior and interior window cleaning for homes and businesses.</div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/Washing/gutter-cleaning" className="service-card-link">
                <div className="p_10 text-center">
                  <img src="/images/gutter.png" height="100rem" width="100rem" className="img-fluid images_padding" alt="Gutter Cleaning" />
                  <div className="repair text-center"><b>Gutter Cleaning</b></div>
                  <div className="maintenance text-center">Clearing debris from gutters and downspouts.</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/Washing/tile-grout-cleaning" className="service-card-link">
                <div className="p_10 text-center">
                  <img src="/images/tiles.png" height="100rem" width="100rem" className="img-fluid images_padding" alt="Tile and Grout Cleaning" />
                  <div className="repair text-center"><b>Tile and Grout Cleaning</b></div>
                  <div className="maintenance text-center">Cleaning and restoring tile and grout surfaces in kitchens and bathrooms.</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/Washing/solar-panel-cleaning" className="service-card-link">
                <div className="p_10 text-center">
                  <img src="/images/solar.png" height="100rem" width="100rem" className="img-fluid images_padding" alt="Solar Panel Cleaning" />
                  <div className="repair text-center"><b>Solar Panel Cleaning</b></div>
                  <div className="maintenance text-center">Cleaning and maintaining solar panels for optimal efficiency.</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Washing;
