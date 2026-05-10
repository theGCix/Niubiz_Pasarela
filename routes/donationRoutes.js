import express from 'express';
import { success, getToken } from '../controllers/donationController.js';

const router = express.Router();

router.post('/success', success);
router.post('/token', getToken);

// Exportar por defecto
export default router;