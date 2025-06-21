import { Router } from 'express';
import { ProductsController } from '../controllers/products.controller';
import { isAuthenticated, isAdmin } from '../middleware/auth.middleware';

const router = Router();
const productsController = new ProductsController();

// Public routes
router.get('/', productsController.getProducts);
router.get('/:id', productsController.getProduct);

// Protected admin routes
router.post('/', isAuthenticated, isAdmin, productsController.createProduct);
router.put('/:id', isAuthenticated, isAdmin, productsController.updateProduct);
router.delete('/:id', isAuthenticated, isAdmin, productsController.deleteProduct);
router.patch('/:id/publish', isAuthenticated, isAdmin, productsController.togglePublish);

export default router; 