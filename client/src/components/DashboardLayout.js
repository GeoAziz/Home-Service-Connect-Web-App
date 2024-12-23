// client/src/components/DashboardLayout.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import styles

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <nav className="sidebar">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/dashboard/profile">Profile</Link></li>
          <li><Link to="/dashboard/requests">Service Requests</Link></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;