import { Request, Response, NextFunction } from 'express';
import { supabase } from '../lib/supabase';

// Extend Request type to include user
declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ error: 'No authorization header' });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }

        const { data: { user }, error } = await supabase.auth.getUser(token);

        if (error || !user) {
            return res.status(401).json({ error: 'Invalid or expired token' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(401).json({ error: 'Authentication failed' });
    }
};

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: 'User not authenticated' });
        }

        // Check if user has admin role in their metadata
        if (req.user.user_metadata?.role !== 'ADMIN') {
            return res.status(403).json({ error: 'Access denied. Admin privileges required.' });
        }

        next();
    } catch (error) {
        console.error('Authorization error:', error);
        res.status(403).json({ error: 'Authorization failed' });
    }
};

const uploadImages = async (productId: number, files: File[]) => {
    const formData = new FormData();
    files.forEach(file => {
        formData.append('images', file);
    });

    const response = await fetch(`/api/product-images/${productId}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${authToken}`
        },
        body: formData
    });

    return response.json();
}; 