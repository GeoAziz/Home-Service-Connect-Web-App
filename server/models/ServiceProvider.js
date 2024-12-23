// server/models/ServiceProvider.js
import mongoose from 'mongoose';

const serviceProviderSchema = new mongoose.Schema({
  name: String,
  services: [String],
  location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true }
  }
});

export default mongoose.model('ServiceProvider', serviceProviderSchema);