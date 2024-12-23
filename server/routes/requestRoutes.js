import express from 'express';
import { 
  createServiceRequest, 
  updateRequestStatus 
} from '../controllers/requestController.js';
import { 
  authMiddleware, 
  checkRole 
} from '../middleware/authMiddleware.js';
import { 
  validateRequestCreation 
} from '../middleware/validationMiddleware.js';

const router = express.Router();

// Create a new service request
router.post('/', 
  authMiddleware, 
  checkRole(['client']), 
  validateRequestCreation, 
  createServiceRequest
);

// Update request status (accept/decline)
router.patch('/:id/status', 
  authMiddleware, 
  checkRole(['provider']), 
  updateRequestStatus
);

// Get user's requests
router.get('/my-requests', 
  authMiddleware, 
  async (req, res) => {
    try {
      const requests = await Request.find({
        $or: [
          { client: req.user.id },
          { provider: req.user.id }
        ]
      }).populate('client provider service');
      
      res.json(requests);
    } catch (error) {
      res.status(500).json({ 
        message: 'Failed to fetch requests', 
        error: error.message 
      });
    }
  }
);

export default router;