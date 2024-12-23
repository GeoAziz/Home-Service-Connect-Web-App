import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Service name is required'],
    trim: true,
    unique: true
  },
  category: { 
    type: String, 
    required: [true, 'Service category is required'],
    enum: [
      'Cleaning', 
      'Maintenance', 
      'Renovation', 
      'Shifting', 
      'Solar', 
      'Gardening', 
      'Clinical', 
      'Catering'
    ]
  },
  description: { 
    type: String, 
    required: [true, 'Service description is required'],
    trim: true,
    minlength: [10, 'Description must be at least 10 characters'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  basePrice: { 
    type: Number, 
    required: [true, 'Base price is required'],
    min: [0, 'Price must be a positive number']
  },
  availableProviders: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }],
  requiredSkills: [String],
  estimatedDuration: {
    type: Number,
    default: 1,
    min: [0.5, 'Estimated duration must be at least 0.5 hours']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Service', serviceSchema);