import React from 'react';
import { Link } from 'react-router-dom';

function AuthDropdown({ user, onLogout }) {
  return (
    <ul className="dropdown-menu" aria-labelledby="userDropdown">
      <li>
        <Link to="/profile" className="dropdown-item">
          My Profile
        </Link>
      </li>
      {user.role === 'provider' && (
        <li>
          <Link to="/provider-dashboard" className="dropdown-item">
            Provider Dashboard
          </Link>
        </li>
      )}
      <li>
        <Link to="/bookings" className="dropdown-item">
          My Bookings
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <button onClick={onLogout} className="dropdown-item text-danger">
          Logout
        </button>
      </li>
    </ul>
  );
}

export default AuthDropdown;