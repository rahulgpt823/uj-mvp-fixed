import prisma from '../utils/prisma'

async function testPrismaConnection() {
    try {
        console.log('Testing Prisma connection...')

        // Try to connect to the database
        await prisma.$connect()
        console.log('✅ Prisma connected successfully!')

        // Try a simple query
        const result = await prisma.$queryRaw`SELECT 1 as test`
        console.log('✅ Database query successful:', result)

    } catch (error) {
        console.error('❌ Prisma connection failed:', error)
    } finally {
        await prisma.$disconnect()
        console.log('Prisma disconnected')
    }
}

testPrismaConnection() 