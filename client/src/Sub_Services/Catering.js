import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';  // Import Link from React Router
import SubNavbar from '../components/SubNavbar.js';
import Footer from '../components/Footer.js';

function Catering() {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SubNavbar/>
      <div id="services">
        <div className="container" data-aos="fade-left" data-aos-duration="2000">
          <br/>
          <br/>
          <h1 className='text-center'><b>Welcome to Catering </b></h1>
          <div className="row">
            {/* Event Catering Card with Navigation Link */}
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/catering/event-catering">  {/* Add Link for navigation */}
                <div className="p_10 text-center">
                  <img src="/images/banquet.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Event Catering'/>
                  <div className="repair text-center"><b>Event Catering</b></div>
                  <div className="maintenance text-center">Full-service catering for various events such as weddings.</div>
                </div>
              </Link>
            </div>

            {/* Corporate Catering Card with Navigation Link */}
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/catering/corporate-catering">  {/* Add Link for navigation */}
                <div className="p_10 text-center">
                  <img src="/images/buffet.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Corporate Catering'/>
                  <div className="repair text-center"><b>Corporate Catering</b></div>
                  <div className="maintenance text-center">Boxed lunches, buffet setups, and gourmet catering options.</div>
                </div>
              </Link>
            </div>

            {/* Meal Delivery Services Card with Navigation Link */}
            <div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/catering/meal-delivery">  {/* Add Link for navigation */}
                <div className="p_10 text-center">
                  <img src="/images/dinner.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Meal Delivery'/>
                  <div className="repair text-center"><b>Meal Delivery Services</b></div>
                  <div className="maintenance text-center">Delivering ready-to-eat meals to homes or offices.</div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            {/* Food Stations and Food Trucks Card with Navigation Link */}
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/catering/food-trucks">  {/* Add Link for navigation */}
                <div className="p_10 text-center">
                  <img src="/images/catering (1).png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Food Stations'/>
                  <div className="repair text-center"><b>Food Stations and Food Trucks</b></div>
                  <div className="maintenance text-center">Offering food truck services for a unique catering experience.</div>
                </div>
              </Link>
            </div>

            {/* Farm-to-Table Catering Card with Navigation Link */}
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/catering/farm-to-table">  {/* Add Link for navigation */}
                <div className="p_10 text-center">
                  <img src="/images/waiter.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Farm-to-Table'/>
                  <div className="repair text-center"><b>Farm-to-Table Catering</b></div>
                  <div className="maintenance text-center">Emphasizing the use of locally sourced and seasonal ingredients.</div>
                </div>
              </Link>
            </div>

            {/* Interactive Culinary Experiences Card with Navigation Link */}
            <div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/catering/culinary-experiences">  {/* Add Link for navigation */}
                <div className="p_10 text-center">
                  <img src="/images/cate.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Culinary Experiences'/>
                  <div className="repair text-center"><b>Interactive Culinary Experiences</b></div>
                  <div className="maintenance text-center">Providing live cooking demonstrations and interactive chef experiences.</div>
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

export default Catering;
