import express from 'express';
import requireAuth from '../middleware/requireAuth.js';
import { getProducts,addProduct } from '../controllers/productControllers.js';

const router = express.Router();

router.get('/', getProducts)
router.post('/', requireAuth,addProduct);

export default router;