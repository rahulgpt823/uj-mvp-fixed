const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 10);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@urvashijewellers.com' },
        update: {},
        create: {
            email: 'admin@urvashijewellers.com',
            password: adminPassword,
            name: 'Admin User',
            role: 'ADMIN',
        },
    });

    // Create categories
    const categories = await Promise.all([
        prisma.category.upsert({
            where: { id: 1 },
            update: {},
            create: {
                name: 'Necklaces',
                description: 'Beautiful necklaces collection',
            },
        }),
        prisma.category.upsert({
            where: { id: 2 },
            update: {},
            create: {
                name: 'Earrings',
                description: 'Elegant earrings collection',
            },
        }),
    ]);

    // Create subcategories
    const subcategories = await Promise.all([
        prisma.subcategory.upsert({
            where: { id: 1 },
            update: {},
            create: {
                name: 'Gold Necklaces',
                description: 'Traditional gold necklaces',
                categoryId: 1,
            },
        }),
        prisma.subcategory.upsert({
            where: { id: 2 },
            update: {},
            create: {
                name: 'Diamond Earrings',
                description: 'Sparkling diamond earrings',
                categoryId: 2,
            },
        }),
    ]);

    console.log({ admin, categories, subcategories });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 