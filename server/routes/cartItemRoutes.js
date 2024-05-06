import express from 'express';
import requireAuth from '../middleware/requireAuth.js';
import { addToCart, getCartItems, removeFromCart, updateQuantity } from '../controllers/cartControllers.js';

const router = express.Router();

router.get('/', requireAuth,getCartItems)
router.post('/', requireAuth,addToCart);
router.patch('/',requireAuth,updateQuantity);
router.delete('/',requireAuth,removeFromCart);

export default router;