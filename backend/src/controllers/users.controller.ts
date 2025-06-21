import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { supabase } from '../services/supabase';

const prisma = new PrismaClient();

export class UsersController {
    // Get all users with pagination and filters
    async getUsers(req: Request, res: Response) {
        try {
            const {
                page = 1,
                limit = 10,
                search = '',
                role,
                sortBy = 'createdAt',
                sortOrder = 'desc'
            } = req.query;

            const skip = (Number(page) - 1) * Number(limit);
            const take = Number(limit);

            const where: any = {
                ...(search && {
                    OR: [
                        { email: { contains: search, mode: 'insensitive' } },
                        { firstName: { contains: search, mode: 'insensitive' } },
                        { lastName: { contains: search, mode: 'insensitive' } }
                    ]
                }),
                ...(role && { role: role as string })
            };

            const [users, total] = await Promise.all([
                prisma.user.findMany({
                    where,
                    include: {
                        addresses: true,
                        orders: {
                            select: {
                                id: true,
                                createdAt: true,
                                status: true,
                                totalAmount: true
                            }
                        }
                    },
                    skip,
                    take,
                    orderBy: {
                        [sortBy as string]: sortOrder
                    }
                }),
                prisma.user.count({ where })
            ]);

            res.json({
                data: users,
                meta: {
                    total,
                    page: Number(page),
                    limit: Number(limit),
                    totalPages: Math.ceil(total / Number(limit))
                }
            });
        } catch (error) {
            console.error('Error getting users:', error);
            res.status(500).json({ error: 'Failed to get users' });
        }
    }

    // Get single user by ID
    async getUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await prisma.user.findUnique({
                where: { id },
                include: {
                    addresses: true,
                    orders: {
                        include: {
                            items: {
                                include: {
                                    product: true
                                }
                            }
                        }
                    }
                }
            });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(user);
        } catch (error) {
            console.error('Error getting user:', error);
            res.status(500).json({ error: 'Failed to get user' });
        }
    }

    // Update user
    async updateUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const userData = req.body;

            // Update user metadata in Supabase if role is being changed
            if (userData.role) {
                const { error: supabaseError } = await supabase.auth.admin.updateUserById(
                    id,
                    { user_metadata: { role: userData.role } }
                );

                if (supabaseError) throw supabaseError;
            }

            // Update user in database
            const user = await prisma.user.update({
                where: { id },
                data: userData,
                include: {
                    addresses: true
                }
            });

            res.json(user);
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({ error: 'Failed to update user' });
        }
    }

    // Delete user
    async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;

            // Delete user from Supabase
            const { error: supabaseError } = await supabase.auth.admin.deleteUser(id);
            if (supabaseError) throw supabaseError;

            // Delete user from database
            await prisma.user.delete({
                where: { id }
            });

            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ error: 'Failed to delete user' });
        }
    }

    // Update user role
    async updateRole(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { role } = req.body;

            if (!['ADMIN', 'CUSTOMER'].includes(role)) {
                return res.status(400).json({ error: 'Invalid role' });
            }

            // Update role in Supabase
            const { error: supabaseError } = await supabase.auth.admin.updateUserById(
                id,
                { user_metadata: { role } }
            );

            if (supabaseError) throw supabaseError;

            // Update role in database
            const user = await prisma.user.update({
                where: { id },
                data: { role }
            });

            res.json(user);
        } catch (error) {
            console.error('Error updating user role:', error);
            res.status(500).json({ error: 'Failed to update user role' });
        }
    }
} 