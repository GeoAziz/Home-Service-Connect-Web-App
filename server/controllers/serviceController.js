import Service from '../models/Service.js';
import mongoose from 'mongoose';

// Helper function for consistent error response
const handleError = (res, error, defaultMessage, statusCode = 500) => {
  console.error(`Service Error: ${defaultMessage}`, error);

  // Mongoose validation error handling
  if (error.name === 'ValidationError') {
    const validationErrors = Object.values(error.errors).map(err => err.message);
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: validationErrors
    });
  }

  // Mongoose cast error (invalid ID)
  if (error.name === 'CastError') {
    return res.status(400).json({
      success: false,
      message: 'Invalid service ID'
    });
  }

  res.status(statusCode).json({
    success: false,
    message: defaultMessage,
    error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
  });
};

// Create a new service
export const createService = async (req, res) => {
  try {
    const { 
      name, 
      category, 
      description, 
      basePrice, 
      requiredSkills,
      estimatedDuration
    } = req.body;

    // Check if service already exists in the same category
    const existingService = await Service.findOne({ 
      name: name.trim(), 
      category 
    });

    if (existingService) {
      return res.status(400).json({ 
        success: false,
        message: 'A service with this name already exists in the specified category' 
      });
    }

    // Create new service with additional validation
    const newService = new Service({
      name: name.trim(),
      category,
      description: description.trim(),
      basePrice: parseFloat(basePrice),
      requiredSkills: requiredSkills || [],
      estimatedDuration: estimatedDuration || 1,
      isActive: true
    });

    // Save the service
    const savedService = await newService.save();

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      service: savedService
    });
  } catch (error) {
    handleError(res, error, 'Service creation failed');
  }
};

// Get all services with optional category filtering
export const getAllServices = async (req, res) => {
  try {
    const { category, page = 1, limit = 10, search = '' } = req.query;
    
    // Build query
    const query = { isActive: true };
    if (category) query.category = category;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // Pagination and population
    const services = await Service.find(query)
      .populate('availableProviders', 'username email')
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    // Count total services for pagination
    const total = await Service.countDocuments(query);

    res.json({
      success: true,
      results: services.length,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      services
    });
  } catch (error) {
    handleError(res, error, 'Failed to fetch services');
  }
};

// Get a single service by ID
export const getServiceById = async (req, res) => {
  try {
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid service ID format'
      });
    }

    const service = await Service.findById(req.params.id)
      .populate('availableProviders', 'username email');
    
    if (!service) {
      return res.status(404).json({ 
        success: false,
        message: 'Service not found' 
      });
    }

    res.json({
      success: true,
      service
    });
  } catch (error) {
    handleError(res, error, 'Failed to fetch service');
  }
};

// Update a service
export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid service ID format'
      });
    }

    // Remove fields that shouldn't be updated
    delete updateData._id;
    delete updateData.createdAt;

    // Trim string fields
    if (updateData.name) updateData.name = updateData.name.trim();
    if (updateData.description) updateData.description = updateData.description.trim();

    const updatedService = await Service.findByIdAndUpdate(
      id, 
      updateData, 
      { 
        new: true, 
        runValidators: true,
        context: 'query'
      }
    );

    if (!updatedService) {
      return res.status(404).json({ 
        success: false,
        message: 'Service not found' 
      });
    }

    res.json({
      success: true,
      message: 'Service updated successfully',
      service: updatedService
    });
  } catch (error) {
    handleError(res, error, 'Service update failed');
  }
};

// Soft delete (mark as inactive)
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid service ID format'
      });
    }

    const deletedService = await Service.findByIdAndUpdate(
      id, 
      { 
        isActive: false,
        deletedAt: new Date() 
      }, 
      { 
        new: true,
        runValidators: true
      }
    );

    if (!deletedService) {
      return res.status(404).json({ 
        success: false,
        message: 'Service not found' 
      });
    }

    res.json({
      success: true,
      message: 'Service marked as inactive',
      service: deletedService
    });
  } catch (error) {
    handleError(res, error, 'Service deletion failed');
  }
};

// Optional: Restore a previously deleted service
export const restoreService = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid service ID format'
      });
    }

    const restoredService = await Service.findByIdAndUpdate(
      id, 
      { 
        isActive: true,
        deletedAt: null 
      }, 
      { 
        new: true,
        runValidators: true
      }
    );

    if (!restoredService) {
      return res.status(404).json({ 
        success: false,
        message: 'Service not found' 
      });
    }

    res.json({
      success: true,
      message: 'Service restored successfully',
      service: restoredService
    });
  } catch (error) {
    handleError(res, error, 'Service restoration failed');
  }
};

export default {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
  restoreService
};