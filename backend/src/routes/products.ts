import express, { Request, Response } from 'express';

const router = express.Router();

// Sample data (will be replaced with database calls later)
const products = [
    {
        id: '1',
        name: 'Diamond Necklace',
        category: 'Necklaces',
        price: 45000,
        image: '/images/diamond-necklace.jpg',
        description: 'Elegant diamond necklace with 18K gold setting',
        inStock: true
    },
    {
        id: '2',
        name: 'Gold Bangles Set',
        category: 'Bangles',
        price: 28000,
        image: '/images/gold-bangles.jpg',
        description: 'Traditional gold bangles set with intricate design',
        inStock: true
    },
    {
        id: '3',
        name: 'Ruby Earrings',
        category: 'Earrings',
        price: 15000,
        image: '/images/ruby-earrings.jpg',
        description: 'Beautiful ruby earrings with diamond accents',
        inStock: false
    }
];

// Get all products
router.get('/', (req: Request, res: Response) => {
    res.json(products);
});

// Get product by ID
router.get('/:id', (req: Request, res: Response) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});

export default router; 