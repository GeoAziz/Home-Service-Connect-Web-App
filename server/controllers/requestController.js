// server/controllers/requestController.js
import Request from '../models/Request.js';
import { handleError } from '../utils/errorHandler.js'; // Create this utility if not exists

export const createServiceRequest = async (req, res) => {
  try {
    const { 
      clientId, 
      providerId, 
      serviceId, 
      details,
      scheduledDate,
      estimatedCost
    } = req.body;

    const newRequest = new Request({
      client: clientId,
      provider: providerId,
      service: serviceId,
      details,
      scheduledDate,
      estimatedCost,
      status: 'pending'
    });

    await newRequest.save();

    res.status(201).json({
      success: true,
      message: 'Service request created successfully',
      request: newRequest
    });
  } catch (error) {
    handleError(error, req, res);
  }
};

export const updateRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const providerId = req.user.id; // Assuming authMiddleware adds user to req

    // Validate status
    const validStatuses = ['pending', 'accepted', 'declined', 'completed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status',
        validStatuses
      });
    }

    // Find and update the request
    const updatedRequest = await Request.findOneAndUpdate(
      { 
        _id: id, 
        provider: providerId 
      }, 
      { 
        status,
        updatedAt: new Date()
      }, 
      { 
        new: true, 
        runValidators: true 
      }
    ).populate('client provider service');

    // Check if request was found and updated
    if (!updatedRequest) {
      return res.status(404).json({
        success: false,
        message: 'Request not found or you are not authorized to update this request'
      });
    }

    res.json({
      success: true,
      message: 'Request status updated successfully',
      request: updatedRequest
    });
  } catch (error) {
    handleError(error, req, res);
  }
};

// Additional method to get user's requests
export const getUserRequests = async (req, res) => {
  try {
    const userId = req.user.id;

    const requests = await Request.find({
      $or: [
        { client: userId },
        { provider: userId }
      ]
    })
    .populate('client', 'username email')
    .populate('provider', 'username email')
    .populate('service', 'name category')
    .sort({ createdAt: -1 });

    res.json({
      success: true,
      results: requests.length,
      requests
    });
  } catch (error) {
    handleError(error, req, res);
  }
};