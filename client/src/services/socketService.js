import { io } from 'socket.io-client';
import WebSocketDebugger from '../utils/webSocketDebugger';

class SocketService {
  socket = null;

  connect(token = null) {
    // Disconnect existing connection if any
    if (this.socket) {
      this.socket.disconnect();
    }

    // Create new socket connection with comprehensive options
    this.socket = io(process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000', {
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      timeout: 20000,
      forceNew: true,
      multiplex: false,
      auth: {
        token: token || localStorage.getItem('token')
      },
      withCredentials: true,
      extraHeaders: {
        'Access-Control-Allow-Origin': '*'
      }
    });

    // Comprehensive connection event handlers
    this.socket.on('connect', () => {
      console.log('Socket Connected:', this.socket.id);
      
      // Send periodic ping to keep connection alive
      const pingInterval = setInterval(() => {
        this.socket.emit('ping', () => {
          console.log('Ping successful');
        });
      }, 25000);

      // Clear interval on disconnect
      this.socket.on('disconnect', () => {
        clearInterval(pingInterval);
      });
    });

    this.socket.on('connect_error', (error) => {
      console.error('Socket Connection Error:', error);
    });

    this.socket.on('reconnect', (attemptNumber) => {
      console.log('Socket Reconnected after', attemptNumber, 'attempts');
    });

    this.socket.on('reconnect_error', (error) => {
      console.error('Socket Reconnection Error:', error);
    });

    return this.socket;
  }

  // Method to emit events
  emit(event, data) {
    if (this.socket && this.socket.connected) {
      this.socket.emit(event, data);
    } else {
      console.warn('Socket not connected');
    }
  }

  // Method to listen to events
  on(event, callback) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  // Disconnect socket
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketService();