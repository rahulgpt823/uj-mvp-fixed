// Script to find your Twilio phone numbers
import twilio from 'twilio'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config()

console.log('🔍 Finding Your Twilio Phone Numbers...')
console.log('')

// Check environment variables
console.log('Environment Variables:')
console.log('- TWILIO_ACCOUNT_SID:', process.env.TWILIO_ACCOUNT_SID ? `"${process.env.TWILIO_ACCOUNT_SID}"` : '❌ Missing')
console.log('- TWILIO_AUTH_TOKEN:', process.env.TWILIO_AUTH_TOKEN ? '✅ Set' : '❌ Missing')
console.log('')

// Check if using default values
const defaultAccountSid = 'ACbbeb6ddedfc84ea677161484cc1a2366'
const defaultAuthToken = '005c24e9df2d824c44eca3ed5b8ac57a'

const accountSid = process.env.TWILIO_ACCOUNT_SID || defaultAccountSid
const authToken = process.env.TWILIO_AUTH_TOKEN || defaultAuthToken

console.log('Current Configuration:')
console.log('- Account SID:', accountSid === defaultAccountSid ? `"${accountSid}" (DEFAULT - INVALID)` : `"${accountSid}"`)
console.log('- Auth Token:', authToken === defaultAuthToken ? `"${authToken}" (DEFAULT - INVALID)` : '✅ Custom')
console.log('')

async function findTwilioNumbers() {
    try {
        console.log('🧪 Connecting to Twilio...')
        
        // Initialize Twilio client
        const client = twilio(accountSid, authToken)
        
        // Get account info
        const account = await client.api.accounts(accountSid).fetch()
        console.log('✅ Connected to Twilio account:', account.friendlyName)
        console.log('📊 Account Status:', account.status)
        console.log('')
        
        // Get all phone numbers
        console.log('📱 Fetching your phone numbers...')
        const phoneNumbers = await client.incomingPhoneNumbers.list()
        
        if (phoneNumbers.length === 0) {
            console.log('❌ No phone numbers found in your account!')
            console.log('')
            console.log('💡 To get a phone number:')
            console.log('1. Go to https://console.twilio.com/')
            console.log('2. Click "Phone Numbers" → "Manage" → "Buy a number"')
            console.log('3. Select your country and requirements')
            console.log('4. Choose a number that supports SMS')
            console.log('5. Complete the purchase')
            return
        }
        
        console.log(`✅ Found ${phoneNumbers.length} phone number(s):`)
        console.log('')
        
        phoneNumbers.forEach((number, index) => {
            console.log(`${index + 1}. Phone Number: ${number.phoneNumber}`)
            console.log(`   📍 Country: ${number.country}`)
            console.log(`   📍 Region: ${number.region}`)
            console.log(`   📍 Locality: ${number.locality}`)
            console.log(`   📱 SMS Capable: ${number.capabilities.SMS ? '✅ Yes' : '❌ No'}`)
            console.log(`   📞 Voice Capable: ${number.capabilities.voice ? '✅ Yes' : '❌ No'}`)
            console.log(`   📧 MMS Capable: ${number.capabilities.MMS ? '✅ Yes' : '❌ No'}`)
            console.log(`   🔗 SID: ${number.sid}`)
            console.log('')
        })
        
        // Show recommended configuration
        console.log('🔧 Recommended .env Configuration:')
        console.log('')
        
        const smsNumbers = phoneNumbers.filter(num => num.capabilities.SMS)
        
        if (smsNumbers.length > 0) {
            const recommendedNumber = smsNumbers[0]
            console.log(`TWILIO_ACCOUNT_SID=${accountSid}`)
            console.log(`TWILIO_AUTH_TOKEN=${authToken}`)
            console.log(`TWILIO_PHONE_NUMBER=${recommendedNumber.phoneNumber}`)
            console.log('')
            console.log(`💡 Using: ${recommendedNumber.phoneNumber} (SMS capable)`)
        } else {
            console.log('⚠️  No SMS-capable numbers found!')
            console.log('💡 You need a phone number that supports SMS for OTP functionality')
        }
        
    } catch (error) {
        console.error('❌ Failed to fetch phone numbers:')
        console.error('Error:', error.message)
        
        if (error.message.includes('AuthenticationError')) {
            console.error('')
            console.error('🔍 Authentication failed - check your Twilio credentials')
        }
        
        if (accountSid === defaultAccountSid || authToken === defaultAuthToken) {
            console.error('')
            console.error('⚠️  You are using default Twilio credentials!')
            console.error('Please add your real Twilio credentials to your .env file')
        }
    }
}

findTwilioNumbers() 