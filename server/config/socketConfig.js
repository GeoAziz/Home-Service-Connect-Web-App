import { Server } from 'socket.io';

class SocketService {
  constructor(server) {
    this.io = new Server(server, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
      }
    });

    this.setupSocketEvents();
  }

  setupSocketEvents() {
    this.io.on('connection', (socket) => {
      console.log('New client connected');

      // Join user-specific room
      socket.on('register', (userId) => {
        socket.join(userId);
        console.log(`User ${userId} registered`);
      });

      // Handle request actions
      socket.on('request_action', (data) => {
        // Broadcast to specific user
        this.io.to(data.recipientId).emit('notification', data);
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  }

  sendNotification(userId, notification) {
    this.io.to(userId).emit('notification', notification);
  }
}

export default SocketService;