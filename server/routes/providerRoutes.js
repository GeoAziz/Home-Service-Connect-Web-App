import express from 'express';
import { connectProvider } from '../controllers/providerController.js'; // Keep this import

const router = express.Router();

// Define your route
router.post('/connect-provider', connectProvider);

export default router;