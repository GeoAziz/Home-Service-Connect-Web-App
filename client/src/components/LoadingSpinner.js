// src/components/LoadingSpinner.js
import React from 'react';
import './LoadingSpinner.css'; // Optional: Create a CSS file for styling

const LoadingSpinner = () => {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
    );
};

export default LoadingSpinner;