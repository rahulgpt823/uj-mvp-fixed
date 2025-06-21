import { Router } from 'express';
import { UsersController } from '../controllers/users.controller';
import { isAuthenticated, isAdmin } from '../middleware/auth.middleware';

const router = Router();
const usersController = new UsersController();

// Protected admin routes
router.get('/', isAuthenticated, isAdmin, usersController.getUsers);
router.get('/:id', isAuthenticated, isAdmin, usersController.getUser);
router.put('/:id', isAuthenticated, isAdmin, usersController.updateUser);
router.delete('/:id', isAuthenticated, isAdmin, usersController.deleteUser);
router.patch('/:id/role', isAuthenticated, isAdmin, usersController.updateRole);

export default router; 