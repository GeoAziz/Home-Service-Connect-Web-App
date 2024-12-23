// client/src/routes/DashboardRoutes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import UserProfile from '../components/UserProfile'; // Example component
import ServiceRequests from '../components/ServiceRequests'; // Example component

const DashboardRoutes = () => {
  return (
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/dashboard/profile" component={UserProfile} />
      <Route path="/dashboard/requests" component={ServiceRequests} />
      {/* Add more routes as needed */}
    </Switch>
  );
};

export default DashboardRoutes;