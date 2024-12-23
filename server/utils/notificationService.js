import socketIO from '../config/socketConfig.js';

export const sendNotification = async (userId, notificationData) => {
  // Send via socket if user is online
  socketIO.to(userId).emit('notification', notificationData);

  // Optionally, save to database or send email
};