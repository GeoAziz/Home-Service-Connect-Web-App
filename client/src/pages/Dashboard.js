import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { FaUser } from 'react-icons/fa'; // Import FaUser for default profile icon
import './Dashboard.css'; // Ensure you have styles for classic appeal

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    activeServices: 0,
    recentActivity: [],
    accountBalance: 0,
    upcomingAppointments: [],
    serviceStats: {
      maintenance: 0,
      cleaning: 0,
      beauty: 0,
      gardening: 0
    }
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get('/api/dashboard', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setDashboardData(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error('Dashboard Data Fetch Error:', err);
        setError('Failed to load dashboard data');
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading Dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-error">
        <h2>Dashboard Error</h2>
        <p>{error}</p>
        <button 
          className="btn btn-primary" 
          onClick={() => {
            logout();
            navigate('/login');
          }}
        >
          Return to Login
        </button>
      </div>
    );
  }

  const accountBalance = dashboardData.accountBalance || 0;

  return (
    <div className="dashboard-container container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 sidebar">
          <div className="profile-section text-center">
            {/* Use FaUser icon if no profile picture */}
            <span className="profile-image rounded-circle">
              {user?.profilePicture ? (
                <img src={user.profilePicture} alt="Profile" />
              ) : (
                <FaUser size={60} /> // Use FaUser icon as default
              )}
            </span>
            <h4>{user?.name || 'User'}</h4>
            <p>{user?.email}</p>
          </div>
          <nav className="nav flex-column">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="#overview" className="nav-link">Overview</Link>
            <Link to="#bookings" className="nav-link">My Bookings</Link>
            <Link to="#services" className="nav-link">Services</Link>
            <Link to="#profile" className="nav-link">Profile</Link>
            <Link to="#" className="nav-link" onClick={logout}>Logout</Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="col-md-9 main-content">
          <h1 className="classic-heading">Welcome Back, {user?.name}!</h1>

          {/* Quick Stats */}
          <div className="row quick-stats">
            <div className="col-md-3">
              <div className="card classic-card">
                <div className="card-body">
                  <h5>Total Bookings</h5>
                  <p className="stat-number">{dashboardData.totalBookings}</p>
                </div>
            
              </div>
            </div>
            <div className="col-md-3">
              <div className="card classic-card">
                <div className="card-body">
                  <h5>Active Services</h5>
                  <p className="stat-number">{dashboardData.activeServices}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card classic-card">
                <div className="card-body">
                  <h5>Account Balance</h5>
                  <p className="stat-number">${accountBalance.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="row recent-activity mt-4">
            <div className="col-md-12">
              <h3>Recent Activity</h3>
              <table className="table classic-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.recentActivity && dashboardData.recentActivity.map((activity, index) => (
                    <tr key={index}>
                      <td>{activity.service}</td>
                      <td>{new Date(activity.date).toLocaleDateString()}</td>
                      <td>
                        <span 
                          className={`badge ${
                            activity.status === 'Completed' ? 'bg-success' : 
                            activity.status === 'Pending' ? 'bg-warning' : 
                            'bg-danger'
                          }`}
                        >
                          {activity.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;