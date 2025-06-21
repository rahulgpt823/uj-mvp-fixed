import { PrismaClient } from '@prisma/client'
import net from 'net'

async function testDatabaseConnection() {
    console.log('Testing database connection...')
    console.log('Environment variables:')
    console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set (hidden for security)' : 'Not set')
    console.log('SUPABASE_URL:', process.env.SUPABASE_URL)
    console.log('SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? 'Set (hidden for security)' : 'Not set')
    
    const prisma = new PrismaClient({
        log: ['query', 'info', 'warn', 'error'],
    })

    try {
        console.log('\n1. Testing Prisma connection...')
        await prisma.$connect()
        console.log('✅ Prisma connected successfully!')

        console.log('\n2. Testing database query...')
        const result = await prisma.$queryRaw`SELECT 1 as test`
        console.log('✅ Database query successful:', result)

        console.log('\n3. Testing if tables exist...')
        try {
            const categories = await prisma.category.findMany({ take: 1 })
            console.log('✅ Category table exists, found', categories.length, 'records')
        } catch (error) {
            console.log('❌ Category table error:', error.message)
        }

        try {
            const products = await prisma.product.findMany({ take: 1 })
            console.log('✅ Product table exists, found', products.length, 'records')
        } catch (error) {
            console.log('❌ Product table error:', error.message)
        }

    } catch (error) {
        console.log('❌ Database connection failed:')
        console.log('Error code:', error.code)
        console.log('Error message:', error.message)
        
        if (error.message.includes("Can't reach database server")) {
            console.log('\n🔍 Possible issues:')
            console.log('1. Database server is down')
            console.log('2. Incorrect database URL')
            console.log('3. Network/firewall issues')
            console.log('4. Database credentials are wrong')
            console.log('5. Database is paused (Supabase free tier)')
        }
    } finally {
        await prisma.$disconnect()
        console.log('\n🔌 Prisma disconnected')
    }
}

// Test Supabase REST API connection
async function testSupabaseAPI() {
    console.log('\n\n=== Testing Supabase REST API ===')
    
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseKey) {
        console.log('❌ Supabase URL or Key not set')
        return
    }
    
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/`, {
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`
            }
        })
        
        if (response.ok) {
            console.log('✅ Supabase REST API is reachable')
        } else {
            console.log('❌ Supabase REST API error:', response.status, response.statusText)
        }
    } catch (error) {
        console.log('❌ Supabase REST API connection failed:', error.message)
    }
}

// Test basic network connectivity
async function testNetworkConnectivity() {
    console.log('\n\n=== Testing Network Connectivity ===')
    
    const hostname = 'db.bclkkbinnlxxsucnwlfj.supabase.co'
    const port = 5432
    
    return new Promise((resolve) => {
        try {
            const socket = new net.Socket()
            
            const timeout = setTimeout(() => {
                socket.destroy()
                console.log(`❌ Connection to ${hostname}:${port} timed out`)
                resolve()
            }, 5000)
            
            socket.connect(port, hostname, () => {
                clearTimeout(timeout)
                console.log(`✅ Network connection to ${hostname}:${port} successful`)
                socket.destroy()
                resolve()
            })
            
            socket.on('error', (error) => {
                clearTimeout(timeout)
                console.log(`❌ Network connection to ${hostname}:${port} failed:`, error.message)
                resolve()
            })
            
        } catch (error) {
            console.log('❌ Network test error:', error.message)
            resolve()
        }
    })
}

async function main() {
    console.log('🔍 Database Connection Diagnostic Tool')
    console.log('=====================================')
    
    await testNetworkConnectivity()
    await testSupabaseAPI()
    await testDatabaseConnection()
    
    console.log('\n✅ Diagnostic complete!')
}

main().catch(console.error) 