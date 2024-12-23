import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function SubNavbar() {
  return (
    <nav className="sub-navbar navbar navbar-dark bg-black fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink to="/" className="navbar-brand fw-bold fs-4 d-flex align-items-center">
          <img src="../images/poafix_logo1.png" alt="Logo" height="50" className="me-2" />
        </NavLink>

        <div className="d-flex">
          <NavLink to="/connect" className="btn btn-outline-light me-2">
            Connect with Provider
          </NavLink>
          <NavLink to="/" className="btn btn-outline-light">
            <span className="me-2">Back to Home</span>
            <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default SubNavbar;