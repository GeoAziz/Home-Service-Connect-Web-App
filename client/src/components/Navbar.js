import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLink from './NavLink.js'; 
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faYoutube, 
  faFacebook, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faUser  , 
  faSignInAlt, 
  faCog, 
  faSignOutAlt 
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

// Import the useAuth hook
import { useAuth } from '../context/AuthContext';

// Import the logo image
import logo from '../images/poafix_logo1.png'; // Adjust the path as necessary

function Navbar() {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const { user, logout } = useAuth(); // Use useAuth to access user and logout
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 50;

      setIsNavbarTransparent(scrollPosition < threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to home after logout
  };

  return (
    <nav 
      className={`
        navbar navbar-expand-lg navbar-dark bg-black py-0 
        sticky-top fixed-top 
        ${isNavbarTransparent ? 'transparent-navbar' : ''}
      `}
    >
      <div className="container">
        {/* Logo */}
        <NavLink 
          className="navbar-brand fw-bold fs-4 px-2" 
          to="/" 
          onClick={scrollToTop}
        >
          <img 
            src={logo} // Use the imported logo
            alt="Logo" 
            height="70" 
            style={{ marginRight: '30px' }} 
          />
        </NavLink>

        {/* Responsive Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>  
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link 
                to="servicesSection" // Use the ID of the services section
                smooth={true} 
                duration={500} 
                className="nav-link"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/become" className="nav-link">Become Provider</Link>
            </li>
           
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
          </ul>

          {/* Social Media Icons */}
          <ul className="navbar-nav ml-auto collapse navbar-collapse justify-content-end me-3">
            <li className="nav-item">
              <a className="nav-link" href="#Youtube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li className="nav-item">
 <a className="nav-link" href="#FaceBook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>

          {/* User Authentication Section */}
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              {user ? (
                <div className="dropdown">
                  <button 
                    className="btn btn-outline-light dropdown-toggle" 
                    type="button" 
                    id="userDropdown" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faUser } className="me-2" />
                    {user.username}
                  </button>
                  <ul 
                    className="dropdown-menu dropdown-menu-end" 
                    aria-labelledby="userDropdown"
                  >
                    <li>
                      <Link to="/profile" className="dropdown-item">
                        <FontAwesomeIcon icon={faCog} className="me-2" />
                        Profile Settings
                      </Link>
                    </li>
                    {user.role === 'provider' && (
                      <li>
                        <Link to="/provider-dashboard" className="dropdown-item">
                          <FontAwesomeIcon icon={faCog} className="me-2" />
                          Provider Dashboard
                        </Link>
                      </li>
                    )}
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button 
                        className="dropdown-item text-danger" 
                        onClick={handleLogout}
                      >
                        <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="d-flex">
                  <Link 
                    to="/login" 
                    className="btn btn-outline-light me-2"
                  >
                    <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="btn btn-light"
                  >
                    <FontAwesomeIcon icon={faCog} className="me-2" />
                    Register
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;