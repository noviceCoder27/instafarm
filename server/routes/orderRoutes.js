import express from 'express';
import requireAuth from '../middleware/requireAuth.js';
import { addOrder, getOrders } from '../controllers/orderControllers.js';

const router = express.Router();

router.get('/', requireAuth,getOrders)
router.post('/', requireAuth,addOrder);

export default router;