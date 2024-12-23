import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

function Clinical() {
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
          <h1 className='text-center'><b>Welcome to Clinical</b></h1>
          <div className="row">
            {/* Primary Care Services */}
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <div className="p_10 text-center">
                <Link to="/Clinical/primary-care-Services" className="text-decoration-none">
                  <img src="/images/healthcare.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Primary Care'/>
                  <div className="repair text-center"><b>Primary Care Services</b></div>
                  <div className="maintenance text-center">Diagnosis and management of common health issues.</div>
                </Link>
              </div>
            </div>

            {/* Telemedicine Services */}
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <div className="p_10 text-center">
                <Link to="/Clinical/tele-medicine-services" className="text-decoration-none">
                  <img src="/images/telemedicine.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Telemedicine'/>
                  <div className="repair text-center"><b>Telemedicine Services</b></div>
                  <div className="maintenance text-center">Providing virtual consultations with healthcare professionals.</div>
                </Link>
              </div>
            </div>

            {/* Chronic Disease Management */}
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <div className="p_10 text-center">
                <Link to="/Clinical/chronic-disease-management" className="text-decoration-none">
                  <img src="/images/lungs.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Chronic Disease'/>
                  <div className="repair text-center"><b>Chronic Disease Management</b></div>
                  <div className="maintenance text-center">Specialized care for patients with chronic conditions.</div>
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Vaccination Clinics */}
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <div className="p_10 text-center">
                <Link to="/Clinical/Vaccination-clinics" className="text-decoration-none">
                  <img src="/images/vaccine.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Vaccination Clinics'/>
                  <div className="repair text-center"><b>Vaccination Clinics</b></div>
                  <div className="maintenance text-center">Administering routine vaccinations for children and adults.</div>
                </Link>
              </div>
            </div>

            {/* Mental Health Services */}
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <div className="p_10 text-center">
                <Link to="/Clinical/mental-health-services" className="text-decoration-none">
                  <img src="/images/psychology.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Mental Health'/>
                  <div className="repair text-center"><b>Mental Health Services</b></div>
                  <div className="maintenance text-center">Offering psychiatric services and medication management.</div>
                </Link>
              </div>
            </div>

            {/* Diagnostic Imaging Services */}
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <div className="p_10 text-center">
                <Link to="/Clinical/diagnostic-imaging-services" className="text-decoration-none">
                  <img src="/images/test.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Diagnostic Imaging'/>
                  <div className="repair text-center"><b>Diagnostic Imaging Services</b></div>
                  <div className="maintenance text-center">In-house imaging services (e.g., X-rays, ultrasound, CT scans).</div>
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Pharmacy Services */}
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <div className="p_10 text-center">
                <Link to="/Clinical/pharmacy-services" className="text-decoration-none">
                  <img src="/images/pharmacy.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Pharmacy Services'/>
                  <div className="repair text-center"><b>Pharmacy Services</b></div>
                  <div className="maintenance text-center">Integrating an in-house pharmacy for prescription services.</div>
                </Link>
              </div>
            </div>

            {/* Corporate Health and Occupational Medicine */}
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <div className="p_10 text-center">
                <Link to="/Clinical/corporate-health-and-occupational-medicine" className="text-decoration-none">
                  <img src="/images/medicine.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Corporate Health'/>
                  <div className="repair text-center"><b>Corporate Health and Occupational Medicine</b></div>
                  <div className="maintenance text-center">Pre-employment screenings and occupational health assessments.</div>
                </Link>
              </div>
            </div>

            {/* Pediatric Clinics */}
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <div className="p_10 text-center">
                <Link to="/Clinical/pediatric-clinics" className="text-decoration-none">
                  <img src="/images/protection.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Pediatric Clinics'/>
                  <div className="repair text-center"><b>Pediatric Clinics</b></div>
                  <div className="maintenance text-center">Well-child check-ups, vaccinations, and developmental screenings.</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Clinical;
