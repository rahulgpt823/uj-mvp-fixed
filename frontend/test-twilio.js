// Test script to verify Twilio configuration
import twilio from 'twilio'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config()

console.log('🔧 Testing Twilio Configuration...')
console.log('')

// Check environment variables
console.log('Environment Variables:')
console.log('- TWILIO_ACCOUNT_SID:', process.env.TWILIO_ACCOUNT_SID ? `"${process.env.TWILIO_ACCOUNT_SID}"` : '❌ Missing')
console.log('- TWILIO_AUTH_TOKEN:', process.env.TWILIO_AUTH_TOKEN ? '✅ Set' : '❌ Missing')
console.log('- TWILIO_PHONE_NUMBER:', process.env.TWILIO_PHONE_NUMBER ? `"${process.env.TWILIO_PHONE_NUMBER}"` : '❌ Missing')
console.log('')

// Check if using default values from nuxt.config.ts
const defaultAccountSid = 'ACbbeb6ddedfc84ea677161484cc1a2366'
const defaultAuthToken = '005c24e9df2d824c44eca3ed5b8ac57a'
const defaultPhoneNumber = '7080677160'

const accountSid = process.env.TWILIO_ACCOUNT_SID || defaultAccountSid
const authToken = process.env.TWILIO_AUTH_TOKEN || defaultAuthToken
const fromNumber = process.env.TWILIO_PHONE_NUMBER || defaultPhoneNumber

console.log('Current Configuration:')
console.log('- Account SID:', accountSid === defaultAccountSid ? `"${accountSid}" (DEFAULT - INVALID)` : `"${accountSid}"`)
console.log('- Auth Token:', authToken === defaultAuthToken ? `"${authToken}" (DEFAULT - INVALID)` : '✅ Custom')
console.log('- Phone Number:', fromNumber === defaultPhoneNumber ? `"${fromNumber}" (DEFAULT - INVALID)` : `"${fromNumber}"`)
console.log('')

// Test Twilio connection
async function testTwilio() {
    try {
        console.log('🧪 Testing Twilio connection...')
        
        // Initialize Twilio client
        const client = twilio(accountSid, authToken)
        
        // Try to get account info to verify credentials
        const account = await client.api.accounts(accountSid).fetch()
        console.log('✅ Twilio connection successful!')
        console.log('Account Name:', account.friendlyName)
        console.log('Account Status:', account.status)
        console.log('')
        
        // Test SMS sending (to a test number)
        console.log('📤 Testing SMS sending...')
        console.log('💡 Note: This will send a real SMS if credentials are valid')
        
        const testNumber = '+917080677160' // Replace with your test number
        const message = 'Test message from Urvashi Jewellers - ' + new Date().toISOString()
        
        const result = await client.messages.create({
            body: message,
            from: fromNumber,
            to: testNumber
        })
        
        console.log('✅ SMS sent successfully!')
        console.log('Message SID:', result.sid)
        console.log('Status:', result.status)
        
    } catch (error) {
        console.error('❌ Twilio test failed:')
        console.error('Error:', error.message)
        
        if (error.message.includes('AuthenticationError')) {
            console.error('')
            console.error('🔍 Troubleshooting:')
            console.error('1. Check if your Account SID is correct')
            console.error('2. Check if your Auth Token is correct')
            console.error('3. Make sure your Twilio account is active')
            console.error('4. Verify your account has SMS capabilities')
        }
        
        if (error.message.includes('Invalid phone number')) {
            console.error('')
            console.error('🔍 Troubleshooting:')
            console.error('1. Check if your Twilio phone number is correct')
            console.error('2. Make sure the phone number is verified in Twilio')
            console.error('3. For trial accounts, verify the destination number')
        }
        
        if (accountSid === defaultAccountSid || authToken === defaultAuthToken) {
            console.error('')
            console.error('⚠️  You are using default Twilio credentials!')
            console.error('These are placeholder values and will not work.')
            console.error('Please add your real Twilio credentials to your .env file:')
            console.error('')
            console.error('TWILIO_ACCOUNT_SID=your_real_account_sid')
            console.error('TWILIO_AUTH_TOKEN=your_real_auth_token')
            console.error('TWILIO_PHONE_NUMBER=your_real_twilio_number')
        }
    }
}

testTwilio() 