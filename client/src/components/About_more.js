import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.js';
import SubNavbar from './SubNavbar.js';

const AboutUs = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
<>
<SubNavbar/>
<br/>
<br/>
<br/>
<br/>
<div className="about-us-container" >
      <section className="about-us">
      <Link to="/AboutMore" className='Link'>

      <div className="container" data-aos="fade-right" data-aos-duration="2000">
          <div className="row justify-content-center">
            <div className="col-md-7">
            <h1><b>Welcome to PoaFix</b></h1>
              <p>At PoaFix, we believe that accessing quality home and clinical services should be a seamless and enriching experience. In a world where time is precious and well-being is paramount, we have created a dynamic platform that bridges the gap between clients and dedicated service providers. Our journey began with a vision to revolutionize the way essential care is delivered, and today, we are proud to lead the charge in transforming this vital landscape.</p>
            </div>
            <div className='col-md-5 text-center'>
              <img className='rounded' src="/images/about.png" alt="Main" height="400" />
            </div>
          </div><br/><br/><br/>

          <div className="mission-vision-passion">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 text-center">
              <div className="mission">
                <img src="/images/mission.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='mission' />
                <div className="mission text-left"><b> Our Mission</b></div>
                <div className="mission text-left">
                We are on a mission to elevate your experience by combining top-tier services with genuine compassion. At PoaFix, we understand that every individual has unique needs, and our commitment is to ensure that your journey through our platform is tailored to you. We prioritize your well-being, recognizing that it is the cornerstone of a fulfilling life.
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 text-center">
              <div className="vision">
                <img src="/images/vision.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='vision' />
                <div className="vision text-left"><b>Vision</b></div>
                <div className="vision text-left">
                We aspire to be the leading platform that redefines the service experience through innovation, transparency, and empathy. By harnessing advanced technology and a user-centric approach, we aim to simplify the process of finding and engaging with the right care, ensuring that every interaction contributes to a healthier, happier community.
                </div>
              </div>
            </div>
          </div>
        </div><br/><br/><br/>
      </div>
 
        <div className="container" data-aos="fade-right" data-aos-duration="2000">
          <div className="row justify-content-center">


        <div className="col-md-7">
          <h1><b>About Our Mobile App</b></h1>
          <p>
            PoaFix mobile app puts the essence of exceptional service right in your pocket. Enjoy effortless browsing, quick bookings, and access to a diverse range of services—all at your fingertips..
          </p>
          <p>
          With a user-friendly interface and streamlined features, our app makes managing your home and clinical needs simpler than ever. Wave goodbye to complicated searches and embrace the convenience of handling everything with just a few taps.
          </p>
          <p>
          Dive into our extensive service catalog, explore provider profiles, and schedule appointments seamlessly—all from the comfort of your mobile device. Experience the PoaFix difference, ensuring your home is a sanctuary of care and comfort, wherever you are.
          </p>
          <p>
          The map integration feature in the PoaFix mobile app empowers you with complete control and visibility over your service options. Easily select the most convenient service provider based on their location, availability, and customer reviews. Say goodbye to uncertainty and make informed decisions with confidence—experience the convenience of PoaFix's map integration today!.
          </p><br/><br/><br/><br/>
        </div>
            <div className='col-md-5 text-center'>
              <img className='rounded' src="/images/about.png" alt="Main" height="400" />
            </div>


    <div className="row" >
      <div className="col-lg-6 col-md-6 col-sm-6 text-center" >
          <div className="empower text-right">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3">
                <img src="/images/empowering.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Empowering' />
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="empower text-left"><h3><b>Empowering Convenience</b></h3></div>
                <div className="Empowering text-left">PoaFix is dedicated to revolutionizing the way you access essential services. Our mission is to simplify your life by connecting you with skilled professionals who offer a wide range of services right at your doorstep.
            </div>
              </div>
            </div>
          </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 text-center" >
          <div className="become_pvdr text-right">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-2">
                <img src="/images/Become.png" height="100rem" width="100rem" className="img-responsive images_padding" alt='Become Provider' />
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10">
                <div className="Become_pvdr text-left"><h3><b>Become a Service Provider</b></h3></div>
                <div className="Become_pvdr text-left"> Are you a skilled professional seeking new opportunities? Join our network of service providers! PoaFix offers a platform for talented individuals to showcase their expertise. By meeting specific criteria such as experience, background checks, and having a registered business, you can become a valued member of our team.</div>
                <br/>
              </div>
            </div>
          </div>
      </div>
    </div>


        <div className="how-it-works" ><br/><br/><br/>
          <h2><b>Seamless Workflow</b></h2>
          <p>
          Our platform is designed to simplify your life. Users can effortlessly browse services, view provider details on a map, and book appointments with just a click. For service providers, the registration process is straightforward: fill out a detailed form, undergo verification, and gain access to job opportunities.
          </p><br/>
        </div>
        <div className="join-us" >
          <h2><b>Join Our Community</b></h2>
          <p>
          Whether you're seeking services or looking to share your skills, PoaFix invites you to become part of our growing community. Experience the convenience of hassle-free home services. Sign up today and join us on our journey towards seamless living.
          </p><br/>
            <button type="button" className="btn btn-dark">Join Now</button><br/><br/><br/>
        </div>

       </div>
       </div>

      </Link>
      </section>
 </div>
<Footer/>
</>
);
};

export default AboutUs;
