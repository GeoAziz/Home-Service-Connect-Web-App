import React, { createContext, useContext, useEffect, useState } from 'react';
import socketService from '../services/socketService';
import { useAuth } from './AuthContext';

const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState({
    isConnected: false,
    error: null
  });
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    let socketInstance = null;

    const connectSocket = () => {
      if (isAuthenticated && user) {
        try {
          socketInstance = socketService.connect();
          setSocket(socketInstance);

          // Connection event listeners
          socketInstance.on('connect', () => {
            setConnectionStatus({
              isConnected: true,
              error: null
            });
            socketInstance.emit('register', user._id);
          });

          socketInstance.on('connect_error', (error) => {
            setConnectionStatus({
              isConnected: false,
              error: error.message
            });
            console.error('Socket connection error:', error);
          });

          socketInstance.on('disconnect', (reason) => {
            setConnectionStatus({
              isConnected: false,
              error: reason
            });
          });
        } catch (error) {
          setConnectionStatus({
            isConnected: false,
            error: error.message
          });
        }
      }
    };

    connectSocket();

    return () => {
      if (socketInstance) {
        socketService.disconnect();
        setSocket(null);
      }
    };
  }, [isAuthenticated, user]);

  return (
    <SocketContext.Provider value={{ 
      socket, 
      connectionStatus 
    }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};