const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkDuplicateSku() {
    const duplicates = await prisma.$queryRaw`
        SELECT sku, COUNT(*) as count
        FROM "Product"
        GROUP BY sku
        HAVING COUNT(*) > 1
    `;
    console.log('Duplicate SKUs:', duplicates);
}

checkDuplicateSku()
    .catch(console.error)
    .finally(() => prisma.$disconnect()); 