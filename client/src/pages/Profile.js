import React from 'react';
import { useAuth } from '../context/AuthContext';

function Profile() {
  const { user } = useAuth();

  if (!user) {
    return <div>Please log in to view your profile</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Profile</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">User Information</h5>
          <p className="card-text"><strong>Username:</strong> {user.username}</p>
          <p className="card-text"><strong>Email:</strong> {user.email}</p>
          <p className="card-text"><strong>Role:</strong> {user.role}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;