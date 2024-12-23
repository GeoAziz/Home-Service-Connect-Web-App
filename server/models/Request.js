// server/models/Request.js
import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  client: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User ', 
    required: true 
  },
  provider: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User ', 
    required: true 
  },
  service: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Service', 
    required: true 
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'declined', 'completed'],
    default: 'pending'
  },
  details: String,
  estimatedCost: Number,
  scheduledDate: Date,
  completedDate: Date,
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  feedback: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Static method to find requests by status
requestSchema.statics.findByStatus = function(status) {
  return this.find({ status: status });
};

// Instance method to update the status of the request
requestSchema.methods.updateStatus = async function(newStatus) {
  if (['pending', 'accepted', 'declined', 'completed'].includes(newStatus)) {
    this.status = newStatus;
    this.updatedAt = new Date(); // Update the timestamp
    await this.save();
    return this;
  } else {
    throw new Error('Invalid status');
  }
};

// Instance method to add feedback and rating
requestSchema.methods.addFeedback = async function(feedback, rating) {
  if (rating < 1 || rating > 5) {
    throw new Error('Rating must be between 1 and 5');
  }
  this.feedback = feedback;
  this.rating = rating;
  this.updatedAt = new Date(); // Update the timestamp
  await this.save();
  return this;
};

// Create and export the model
export default mongoose.model('Request', requestSchema);