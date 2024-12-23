import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import SubNavbar from '../components/SubNavbar.js';
import Footer from '../components/Footer.js';

function Maintenance() {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
	<>
	  <SubNavbar />
    <div id="services">
      <div className="container">
      <br/>
	  <br/>
	    <h1 className='text-center'><b>Welcome to Maintenance</b></h1>
		<div className="row">
		<Link to="/Maintenance/ac-Maintenance" className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
							<img src="/images/air-conditioner.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
							<div className="repair text-center"><b>AC Maintenance</b></div>
							<div className="maintenance text-center">PoaFix offers Routine maintenance of HVAC systems.</div>
					</div>
				</Link>

				<Link to="/Maintenance/appliance-repair" className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/electric-appliance.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Appliance Repair</b></div>
					<div className="maintenance text-center">Fixing or servicing refrigerators, washing machines,and other appliances.</div>
					</div>
				</Link>

				<Link to="/Maintenance/Painting" className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/painting.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Painting</b></div>
					<div className="maintenance text-center">PoaFix helps Interior and exterior painting.</div>
					</div>
				</Link>
			</div>

			<div className="row">
			<Link to="/Maintenance/handyman-service" className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/man.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Handyman Service</b></div>
					<div className="maintenance text-center">PoaFix offers Installation of shelves, curtain rods, and other fixtures.</div>
					</div>
				</Link>

				<Link to="/Maintenance/electric-service" className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/electrical-service.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Electric Service</b></div>
					<div className="maintenance text-center">Installing or replacing light fixtures.Wiring and rewiring.</div>
					</div>
				</Link>

				<Link to="/Maintenance/home-inspection" className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/inspection.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Home Inspection</b></div>
					<div className="maintenance text-center">Providing inspections for potential issues in the home.</div>
					</div>
				</Link>
			</div>

			<div className="row">
			<Link to="/Maintenance/flooring-services" className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/floor.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Flooring Services</b></div>
					<div className="maintenance text-center">Installation or repair of various types of flooring.</div>
					</div>
				</Link>

				<Link to="/Maintenance/smart-home-integration" className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/timer.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Smart Home Integration</b></div>
					<div className="maintenance text-center">A smarter way to installing smart home devices and systems.</div>
					</div>
				</Link>

				<Link to="/Maintenance/roofing-and-gutter-services" className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<div className="p_10 text-center ">
					<img src="/images/roof.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
					<div className="repair text-center"><b>Roofing and gutter services</b></div>
					<div className="maintenance text-center">PoaFix helps Repairing or replacing damaged roof shingles.</div>
					</div>
				</Link>
			</div>
		</div>
	</div>
  	<Footer/>

	</>
  );
}

export default Maintenance;