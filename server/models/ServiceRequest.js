// server/models/ServiceRequest.js
import mongoose from 'mongoose';

const ServiceRequestSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User ',
    required: true,
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceProvider', // Ensure this references the correct model
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'completed', 'cancelled'],
    default: 'pending',
  },
  // Add other relevant fields as needed
}, { timestamps: true });

export default mongoose.model('ServiceRequest', ServiceRequestSchema);