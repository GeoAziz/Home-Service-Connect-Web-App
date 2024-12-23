class WebSocketDebugger {
    static logConnectionAttempt(url) {
      console.log(`[WebSocket] Attempting to connect to: ${url}`);
    }
  
    static logConnectionSuccess(socket) {
      console.log(`[WebSocket] Connected successfully. Socket ID: ${socket.id}`);
    }
  
    static logConnectionError(error) {
      console.error('[WebSocket] Connection Error:', error);
      console.group('Detailed Error Information');
      console.error('Error Name:', error.name);
      console.error('Error Message:', error.message);
      console.error('Error Stack:', error.stack);
      console.groupEnd();
    }
  
    static diagnoseConnectionIssues() {
      const networkStatus = navigator.onLine;
      const connectionType = navigator.connection?.effectiveType;
  
      console.group('[WebSocket] Connection Diagnostics');
      console.log('Network Online:', networkStatus);
      console.log('Connection Type:', connectionType);
      console.log('Browser Support:', 'WebSocket' in window);
      console.log('Secure Context:', window.isSecureContext);
      console.groupEnd();
    }
  }
  
  export default WebSocketDebugger;