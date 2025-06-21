import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class OrdersController {
    // Get all orders with pagination and filters
    async getOrders(req: Request, res: Response) {
        try {
            const {
                page = 1,
                limit = 10,
                search = '',
                status,
                fromDate,
                toDate,
                sortBy = 'createdAt',
                sortOrder = 'desc'
            } = req.query;

            const skip = (Number(page) - 1) * Number(limit);
            const take = Number(limit);

            const where: any = {
                ...(search && {
                    OR: [
                        { id: { contains: search } },
                        {
                            user: {
                                OR: [
                                    { email: { contains: search, mode: 'insensitive' } },
                                    { firstName: { contains: search, mode: 'insensitive' } },
                                    { lastName: { contains: search, mode: 'insensitive' } }
                                ]
                            }
                        }
                    ]
                }),
                ...(status && { status: status as string }),
                ...(fromDate && toDate && {
                    createdAt: {
                        gte: new Date(fromDate as string),
                        lte: new Date(toDate as string)
                    }
                })
            };

            const [orders, total] = await Promise.all([
                prisma.order.findMany({
                    where,
                    include: {
                        user: {
                            select: {
                                id: true,
                                email: true,
                                firstName: true,
                                lastName: true
                            }
                        },
                        items: {
                            include: {
                                product: {
                                    select: {
                                        id: true,
                                        name: true,
                                        sku: true,
                                        images: {
                                            take: 1
                                        }
                                    }
                                }
                            }
                        },
                        shippingAddress: true
                    },
                    skip,
                    take,
                    orderBy: {
                        [sortBy as string]: sortOrder
                    }
                }),
                prisma.order.count({ where })
            ]);

            res.json({
                data: orders,
                meta: {
                    total,
                    page: Number(page),
                    limit: Number(limit),
                    totalPages: Math.ceil(total / Number(limit))
                }
            });
        } catch (error) {
            console.error('Error getting orders:', error);
            res.status(500).json({ error: 'Failed to get orders' });
        }
    }

    // Get single order by ID
    async getOrder(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const order = await prisma.order.findUnique({
                where: { id },
                include: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            firstName: true,
                            lastName: true,
                            phone: true
                        }
                    },
                    items: {
                        include: {
                            product: true
                        }
                    },
                    shippingAddress: true,
                    billingAddress: true,
                    transactions: true
                }
            });

            if (!order) {
                return res.status(404).json({ error: 'Order not found' });
            }

            res.json(order);
        } catch (error) {
            console.error('Error getting order:', error);
            res.status(500).json({ error: 'Failed to get order' });
        }
    }

    // Update order status
    async updateStatus(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { status } = req.body;

            const validStatuses = [
                'PENDING',
                'PROCESSING',
                'SHIPPED',
                'DELIVERED',
                'CANCELLED',
                'REFUNDED'
            ];

            if (!validStatuses.includes(status)) {
                return res.status(400).json({ error: 'Invalid status' });
            }

            const order = await prisma.order.update({
                where: { id },
                data: {
                    status,
                    ...(status === 'SHIPPED' && { shippedAt: new Date() }),
                    ...(status === 'DELIVERED' && { deliveredAt: new Date() }),
                    ...(status === 'CANCELLED' && { cancelledAt: new Date() }),
                    ...(status === 'REFUNDED' && { refundedAt: new Date() })
                },
                include: {
                    user: {
                        select: {
                            email: true,
                            firstName: true,
                            lastName: true
                        }
                    }
                }
            });

            // TODO: Send email notification to customer about status update

            res.json(order);
        } catch (error) {
            console.error('Error updating order status:', error);
            res.status(500).json({ error: 'Failed to update order status' });
        }
    }

    // Add tracking information
    async addTracking(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { trackingNumber, carrier } = req.body;

            if (!trackingNumber || !carrier) {
                return res.status(400).json({ error: 'Tracking number and carrier are required' });
            }

            const order = await prisma.order.update({
                where: { id },
                data: {
                    trackingNumber,
                    carrier,
                    status: 'SHIPPED',
                    shippedAt: new Date()
                }
            });

            // TODO: Send shipping confirmation email to customer

            res.json(order);
        } catch (error) {
            console.error('Error adding tracking information:', error);
            res.status(500).json({ error: 'Failed to add tracking information' });
        }
    }

    // Cancel order
    async cancelOrder(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { reason } = req.body;

            const order = await prisma.order.update({
                where: { id },
                data: {
                    status: 'CANCELLED',
                    cancelledAt: new Date(),
                    cancellationReason: reason
                }
            });

            // TODO: Send cancellation email to customer
            // TODO: Handle refund if payment was already processed

            res.json(order);
        } catch (error) {
            console.error('Error cancelling order:', error);
            res.status(500).json({ error: 'Failed to cancel order' });
        }
    }

    // Process refund
    async processRefund(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { amount, reason } = req.body;

            if (!amount) {
                return res.status(400).json({ error: 'Refund amount is required' });
            }

            const order = await prisma.order.findUnique({
                where: { id }
            });

            if (!order) {
                return res.status(404).json({ error: 'Order not found' });
            }

            if (amount > order.totalAmount) {
                return res.status(400).json({ error: 'Refund amount cannot exceed order total' });
            }

            // TODO: Process refund through payment gateway

            const updatedOrder = await prisma.order.update({
                where: { id },
                data: {
                    status: 'REFUNDED',
                    refundedAt: new Date(),
                    refundAmount: amount,
                    refundReason: reason
                }
            });

            // TODO: Send refund confirmation email to customer

            res.json(updatedOrder);
        } catch (error) {
            console.error('Error processing refund:', error);
            res.status(500).json({ error: 'Failed to process refund' });
        }
    }
} 