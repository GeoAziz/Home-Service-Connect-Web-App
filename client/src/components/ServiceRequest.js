// client/src/components/ServiceRequest.js
import React, { useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const ServiceRequest = ({ 
  serviceId, 
  providerId, 
  clientId 
}) => {
  const [details, setDetails] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Connect to socket
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    // Register user
    newSocket.emit('register', clientId);

    // Listen for notifications
    newSocket.on('notification', (data) => {
      // Handle notification (e.g., show toast)
      console.log('Received Notification:', data);
    });

    return () => newSocket.close();
  }, [clientId]);

  const handleSubmitRequest = async () => {
    try {
      const response = await axios.post('/api/requests', {
        clientId,
        providerId,
        serviceId,
        details
      });

      // Optionally emit socket event
      socket.emit('request_action', {
        type: 'new_request',
        recipientId: providerId
      });

      // Show success message
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <textarea 
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Request details"
      />
      <button onClick={handleSubmitRequest}>
        Send Request
      </button>
    </div>
  );
};