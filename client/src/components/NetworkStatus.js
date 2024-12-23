import React, { useState, useEffect } from 'react';
import { useSocket } from '../context/SocketContext';

const NetworkStatus = () => {
  const { connectionStatus } = useSocket();
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div>
      <div>
        Network Status: {isOnline ? 'Online' : ' Offline'}
      </div>
      <div>
        WebSocket Status: {connectionStatus.isConnected ? 'Connected' : 'Disconnected'}
      </div>
      {connectionStatus.error && (
        <div style={{ color: 'red' }}>
          Error: {connectionStatus.error}
        </div>
      )}
    </div>
  );
};

export default NetworkStatus;