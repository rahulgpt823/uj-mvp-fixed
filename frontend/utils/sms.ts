import twilio from 'twilio'

export interface SMSOptions {
  to: string
  message: string
}

export async function sendSMS({ to, message }: SMSOptions): Promise<boolean> {
  try {
    const config = useRuntimeConfig()

    const accountSid = config.twilioAccountSid
    const authToken = config.twilioAuthToken
    const fromNumber = config.twilioPhoneNumber

    // Debug logging
    console.log('🔧 Twilio Config Check:')
    console.log('- Account SID:', accountSid ? `"${accountSid}"` : 'Missing')
    console.log('- Auth Token:', authToken ? 'Set' : 'Missing')
    console.log('- Phone Number:', fromNumber ? `"${fromNumber}"` : 'Missing')
    console.log('- Environment variables check:')
    console.log('  - TWILIO_ACCOUNT_SID:', process.env.TWILIO_ACCOUNT_SID ? `"${process.env.TWILIO_ACCOUNT_SID}"` : 'Missing')
    console.log('  - TWILIO_AUTH_TOKEN:', process.env.TWILIO_AUTH_TOKEN ? 'Set' : 'Missing')
    console.log('  - TWILIO_PHONE_NUMBER:', process.env.TWILIO_PHONE_NUMBER ? `"${process.env.TWILIO_PHONE_NUMBER}"` : 'Missing')

    if (!accountSid || !authToken || !fromNumber) {
      console.error('❌ Twilio credentials not configured')
      return false
    }

    // Check if using default placeholder values
    const defaultAccountSid = 'ACbbeb6ddedfc84ea677161484cc1a2366'
    const defaultAuthToken = '005c24e9df2d824c44eca3ed5b8ac57a'
    const defaultPhoneNumber = '7080677160'

    if (accountSid === defaultAccountSid || authToken === defaultAuthToken || fromNumber === defaultPhoneNumber) {
      console.error('❌ Using default placeholder Twilio credentials!')
      console.error('💡 Please add your real Twilio credentials to your .env file')
      return false
    }

    // Initialize Twilio client
    const client = twilio(accountSid, authToken)

    // Format phone number (remove + if present and add country code if needed)
    let formattedNumber = to
    if (!formattedNumber.startsWith('+')) {
      formattedNumber = `+${formattedNumber}`
    }

    console.log(`📤 Attempting to send SMS to ${formattedNumber}...`)

    // Send SMS via Twilio
    const result = await client.messages.create({
      body: message,
      from: fromNumber,
      to: formattedNumber
    })

    console.log(`✅ SMS sent successfully to ${formattedNumber}`)
    console.log(`📱 Message SID: ${result.sid}`)
    console.log(`📊 Status: ${result.status}`)
    return true
  } catch (error: any) {
    console.error('❌ Failed to send SMS:', error.message)

    if (error.message.includes('AuthenticationError')) {
      console.error('🔍 Authentication failed - check your Twilio credentials')
    } else if (error.message.includes('Invalid phone number')) {
      console.error('🔍 Invalid phone number format')
    } else if (error.message.includes('Trial account')) {
      console.error('🔍 Trial account limitations - verify the destination number')
    }

    return false
  }
}

export function createOTPMessage(otp: string, companyName: string = 'Urvashi Jewellers'): string {
  return `Your ${companyName} verification code is: ${otp}. Valid for 10 minutes. Do not share this code with anyone.`
}

export function createWelcomeMessage(userName: string, companyName: string = 'Urvashi Jewellers'): string {
  return `Welcome to ${companyName}, ${userName}! Your account has been successfully created. Thank you for choosing us.`
}

export function createLoginMessage(userName: string, companyName: string = 'Urvashi Jewellers'): string {
  return `Welcome back to ${companyName}, ${userName}! You have successfully logged in to your account.`
} 