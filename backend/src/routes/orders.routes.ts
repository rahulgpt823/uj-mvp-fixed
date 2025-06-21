import { Router } from 'express';
import { OrdersController } from '../controllers/orders.controller';
import { isAuthenticated, isAdmin } from '../middleware/auth.middleware';

const router = Router();
const ordersController = new OrdersController();

// Protected admin routes
router.get('/', isAuthenticated, isAdmin, ordersController.getOrders);
router.get('/:id', isAuthenticated, isAdmin, ordersController.getOrder);
router.patch('/:id/status', isAuthenticated, isAdmin, ordersController.updateStatus);
router.patch('/:id/tracking', isAuthenticated, isAdmin, ordersController.addTracking);
router.post('/:id/cancel', isAuthenticated, isAdmin, ordersController.cancelOrder);
router.post('/:id/refund', isAuthenticated, isAdmin, ordersController.processRefund);

export default router; 