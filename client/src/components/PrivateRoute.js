// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = () => {
  const { user } = useAuth();

  // If not authenticated, redirect to login
  // Otherwise, render the child routes
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;