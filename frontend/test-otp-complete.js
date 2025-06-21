import fetch from 'node-fetch'

const BASE_URL = 'http://localhost:3000'

async function testCompleteOTPFlow() {
  console.log('🧪 Testing Complete OTP Flow with SMS...')
  
  const testPhone = '7080677160' // Your Twilio number for testing
  const testCountryCode = '+91'
  
  try {
    // Step 1: Send OTP
    console.log('\n1️⃣ Sending OTP via SMS...')
    const sendOTPResponse = await fetch(`${BASE_URL}/api/auth/send-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mobileNumber: testPhone,
        countryCode: testCountryCode
      })
    })
    
    const sendOTPResult = await sendOTPResponse.json()
    console.log('Send OTP Result:', sendOTPResult)
    
    if (!sendOTPResult.success) {
      console.log('❌ Send OTP failed')
      return
    }
    
    console.log('✅ OTP sent successfully via SMS!')
    console.log('📱 Check your phone for the SMS')
    
    // Step 2: Wait for user to check SMS
    console.log('\n2️⃣ Waiting for SMS...')
    console.log('💡 Check your phone for the OTP code')
    console.log('⏳ You have 10 minutes to enter the OTP')
    
    // Wait a moment for user to check SMS
    await new Promise(resolve => setTimeout(resolve, 5000))
    
    console.log('\n3️⃣ Ready to verify OTP...')
    console.log('📝 Enter the OTP code you received via SMS')
    
    // For testing, you can modify this OTP code
    const testOTP = '123456' // Replace with actual OTP from SMS
    
    const verifyOTPResponse = await fetch(`${BASE_URL}/api/auth/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mobileNumber: testPhone,
        countryCode: testCountryCode,
        otpCode: testOTP,
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com'
      })
    })
    
    const verifyOTPResult = await verifyOTPResponse.json()
    console.log('Verify OTP Result:', verifyOTPResult)
    
    if (verifyOTPResult.success) {
      console.log('✅ OTP verification successful!')
      console.log('👤 User:', verifyOTPResult.user)
      console.log('🆕 New user:', verifyOTPResult.isNewUser)
      console.log('🎉 Authentication flow completed successfully!')
    } else {
      console.log('❌ OTP verification failed')
      console.log('💡 Make sure you entered the correct OTP from the SMS')
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error)
  }
}

testCompleteOTPFlow() 