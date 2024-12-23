import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext, useAuth } from '../context/AuthContext';

function ProtectedRoute({ children, requiredRoles = [] }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // If still loading, show a loading state
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // If no user, redirect to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If roles are specified and user doesn't have required role
  if (requiredRoles.length > 0 && !requiredRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default ProtectedRoute;