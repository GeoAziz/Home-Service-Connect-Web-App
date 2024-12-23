import express from 'express';
import { 
  createService, 
  getAllServices, 
  getServiceById, 
  updateService, 
  deleteService 
} from '../controllers/serviceController.js';
import { 
  authMiddleware, 
  checkRole 
} from '../middleware/authMiddleware.js';
import { 
  validateServiceCreation 
} from '../middleware/validationMiddleware.js';

const router = express.Router();

// Public Routes
router.get('/', getAllServices);
router.get('/:id', getServiceById);

// Protected Routes
router.post('/', 
  authMiddleware, 
  checkRole(['admin', 'provider']), 
  validateServiceCreation, 
  createService
);

router.put('/:id', 
  authMiddleware, 
  checkRole(['admin', 'provider']), 
  updateService
);

router.delete('/:id', 
  authMiddleware, 
  checkRole(['admin']), 
  deleteService
);

export default router;