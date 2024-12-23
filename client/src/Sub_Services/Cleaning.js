import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar.js';
import Footer from '../components/Footer.js';

function Cleaning() {
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
	    <h1 className='text-center'><b>Welcome to Cleaning</b></h1>
		<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<Link to="/Cleaning/residential-cleaning" style={{ textDecoration: 'none', color: 'inherit' }}>
						<div className="p_10 text-center ">
						<img src="/images/house (1).png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
						<div className="repair text-center"><b>Residential Cleaning</b></div>
						<div className="maintenance text-center">PoaFix offers deep cleaning for specific areas or upon request.</div>
						</div>
					</Link>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<Link to="/Cleaning/garden-cleaning" style={{ textDecoration: 'none', color: 'inherit' }}>
						<div className="p_10 text-center ">
						<img src="/images/gardener.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
						<div className="repair text-center"><b>Garden Cleaning</b></div>
						<div className="maintenance text-center">A smarter way to implementing sustainable cleaning practices.</div>
						</div>
					</Link>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<Link to="/Cleaning/carpet-and-upholstery" style={{ textDecoration: 'none', color: 'inherit' }}>
						<div className="p_10 text-center ">
						<img src="/images/power-washing.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
						<div className="repair text-center"><b>Carpet and Upholstery Cleaning</b></div>
						<div className="maintenance text-center">PoaFix helps to steam cleaning or dry cleaning for carpets and rugs.</div>
						</div>
					</Link>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<Link to="/Cleaning/speciality-floor-care" style={{ textDecoration: 'none', color: 'inherit' }}>
						<div className="p_10 text-center ">
						<img src="/images/floor.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
						<div className="repair text-center"><b>Specialty Floor Care</b></div>
						<div className="maintenance text-center">Stripping, waxing, and polishing hard floors.</div>
						</div>
					</Link>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<Link to="/Cleaning/water-tank-cleaning" style={{ textDecoration: 'none', color: 'inherit' }}>
						<div className="p_10 text-center ">
						<img src="/images/water-tank.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
						<div className="repair text-center"><b>Water Tank</b></div>
						<div className="maintenance text-center">Rapid response to water damage, fire damage, or other emergencies.</div>
						</div>
					</Link>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<Link to="/Cleaning/curtain-cleaning" style={{ textDecoration: 'none', color: 'inherit' }}>
						<div className="p_10 text-center ">
						<img src="/images/curtains.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
						<div className="repair text-center"><b>Curtain Cleaning</b></div>
						<div className="maintenance text-center"> Using steam to remove wrinkles and refresh the appearance of curtains.</div>
						</div>
					</Link>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<Link to="/Cleaning/sofa-cleaning" style={{ textDecoration: 'none', color: 'inherit' }}>
						<div className="p_10 text-center ">
						<img src="/images/sofa.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
						<div className="repair text-center"><b>Sofa Cleaning</b></div>
						<div className="maintenance text-center">Cleaning and conditioning leather sofas to maintain their appearance.</div>
						</div>
					</Link>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<Link to="/Cleaning/air-duct-cleaning" style={{ textDecoration: 'none', color: 'inherit' }}>
						<div className="p_10 text-center ">
						<img src="/images/air duct.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
						<div className="repair text-center"><b>Air Duct Cleaning</b></div>
						<div className="maintenance text-center">Removing dust, debris, and allergens from HVAC systems.</div>
						</div>
					</Link>
				</div>
				<div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
					<Link to="/Cleaning/odor-removal-services" style={{ textDecoration: 'none', color: 'inherit' }}>
						<div className="p_10 text-center ">
						<img src="/images/love.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='beautsalon'/>
						<div className="repair text-center"><b>Odor Removal Services</b></div>
						<div className="maintenance text-center">Identifying and eliminating unpleasant odors from homes or businesses</div>
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

export default Cleaning;