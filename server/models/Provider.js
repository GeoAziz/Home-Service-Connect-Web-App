import mongoose from 'mongoose';

const providerSchema = new mongoose.Schema({
  name: String,
  services: [String],
  location: {
    lat: Number,
    lng: Number,
  },
  // Other provider details
});

const Provider = mongoose.model('Provider', providerSchema);
export default Provider;