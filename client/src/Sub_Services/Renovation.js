import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar.js';
import Footer from '../components/Footer.js';
import './Renovation.css';

function Renovation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hoveredCard, setHoveredCard] = useState(null);

  const renovationServices = [
    {
      id: 1,
      image: "/images/revo.png",
      title: "Whole House Renovation",
      description: "Addressing structural changes, layout modifications, and aesthetic upgrades.",
      route: "/Sub_Services/renovation/whole-house"
    },
    {
      id: 2,
      image: "/images/kitchen.png",
      title: "Kitchen Remodeling",
      description: "Cabinet installation, countertop replacement, and appliance upgrades.",
      route: "/Sub_Services/renovation/kitchen-remodeling"
    },
    {
      id: 3,
      image: "/images/bathroom.png",
      title: "Bathroom Renovation",
      description: "Full bathroom remodel, including layout changes if necessary.",
      route: "/Sub_Services/renovation/bathroom-renovation"
    },
    {
      id: 4,
      image: "/images/floor.png",
      title: "Flooring Installation",
      description: "Installing hardwood, laminate, tile, or carpet flooring.",
      route: "/Sub_Services/renovation/flooring-installation"
    },
    {
      id: 5,
      image: "/images/wallpaper.png",
      title: "Interior Painting and Wallpapering",
      description: "Painting walls, ceilings, and trim in various rooms.",
      route: "/Sub_Services/renovation/interior-painting"
    },
    {
      id: 6,
      image: "/images/window.png",
      title: "Windows and Doors Replacement",
      description: "Upgrading windows and doors for energy efficiency.",
      route: "/Sub_Services/renovation/window-and-door-replacement"
    }
  ];

  return (
    <>
      <SubNavbar />
      <div id="services">
        <div className="container">
          <br/>
          <br/>
          <h1 className='text-center'><b>Welcome to Renovation</b></h1>
          <div className="row">
            {renovationServices.slice(0, 3).map((service) => (
              <div 
                key={service.id} 
                className="col-lg-4 col-md-4 col-sm-4 text-center" 
                data-aos="fade-left" 
                data-aos-duration="2000"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link 
                  to={service.route} 
                  className="service-card-link"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className={`p_10 text-center service-card ${hoveredCard === service.id ? 'hovered' : ''}`}>
                    <img 
                      src={service.image} 
                      height="100rem" 
                      width="100rem" 
                      className="img-responsiv images_padding" 
                      alt={service.title}
                    />
                    <div className="repair text-center"><b>{service.title}</b></div>
                    <div className="maintenance text-center">{service.description}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="row">
            {renovationServices.slice(3).map((service) => (
              <div 
                key={service.id} 
                className="col-lg-4 col-md-4 col-sm-4 text-center" 
                data-aos="fade-left" 
                data-aos-duration="2000"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link 
                  to={service.route} 
                  className="service-card-link"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className={`p_10 text-center service-card ${hoveredCard === service.id ? 'hovered' : ''}`}>
                    <img 
                      src={service.image} 
                      height="100rem" 
                      width="100rem" 
                      className="img-responsiv images_padding" 
                      alt={service.title}
                    />
                    <div className="repair text-center"><b>{service.title}</b></div>
                    <div className="maintenance text-center">{service.description}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Renovation;
