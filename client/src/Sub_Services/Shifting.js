import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar.js';
import Footer from '../components/Footer.js';

function Shifting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update links to match your route structure
  const shiftingServices = [
    {
      id: 1,
      image: "/images/shift.png",
      title: "Local Residential Moving",
      description: "PoaFix provides transportation of household items to the new location.",
      link: "/Shifting/LocalResidentialMoving" // Update to match your route structure
    },
    {
      id: 2,
      image: "/images/piano.png",
      title: "Specialty Item Moving",
      description: "Transporting large or fragile items (e.g., pianos, artwork).",
      link: "/Shifting/special-items-moving" // Update to match your route structure
    },
    {
      id: 3,
      image: "/images/sofay.png",
      title: "Furniture Rental Services",
      description: "Providing temporary furniture solutions during the moving process.",
      link: "/Shifting/furniture-rental-services"
    },
    {
      id: 4,
      image: "/images/pet.png",
      title: "Pet Relocation Services",
      description: "PoaFix offers Coordination of pet transportation.",
      link: "/Shifting/pet-relocation"
    },
    {
      id: 5,
      image: "/images/bycicle (1).png",
      title: "Vehicle Transport",
      description: "PoaFix provides transporting cars, motorcycles, or other vehicles.",
      link: "/Shifting/vehicle-transport"
    },
    {
      id: 6,
      image: "/images/moving.png",
      title: "Long-Distance or Interstate Moving",
      description: "PoaFix helps specialized packing for long-distance transport.",
      link: "/Shifting/long-distance-moving"
    }
  ];

  const ServiceCard = ({ service }) => {
    return (
      <div 
        className="col-lg-4 col-md-4 col-sm-4 text-center mb-4" 
        data-aos="fade-left" 
        data-aos-duration="2000"
      >
        <Link 
          to={service.link} 
          className="text-decoration-none text-dark"
        >
          <div className="p_10 text-center shadow-sm rounded h-100">
            <img 
              src={service.image} 
              height="100rem" 
              width="100rem" 
              className="img-responsiv images_padding" 
              alt={service.title}
            />
            <div className="repair text-center mt-3">
              <b>{service.title}</b>
            </div>
            <div className="maintenance text-center">
              {service.description}
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <>
      <SubNavbar />
      <div id="services">
        <div className="container">
          <br/>
          <br/>
          <h1 className='text-center'><b>Welcome to Shifting</b></h1>
          <div className="row">
            {shiftingServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Shifting;
