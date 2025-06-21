import fetch from 'node-fetch'

const BASE_URL = 'http://localhost:3000'

async function testFixes() {
  console.log('🧪 Testing fixes for Twilio and Database issues...')
  
  const testPhone = '7080677160'
  const testCountryCode = '+91'
  
  try {
    // Step 1: Test OTP sending
    console.log('\n1️⃣ Testing OTP sending with correct Twilio credentials...')
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
    
    console.log('✅ OTP sent successfully!')
    console.log('📱 Check your phone for the SMS')
    
    // Step 2: Wait and test OTP verification
    console.log('\n2️⃣ Waiting 3 seconds before testing verification...')
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Get the OTP from server logs (you'll need to check the console)
    console.log('📝 Please check the server console for the OTP code')
    console.log('💡 Look for: "OTP for +917080677160: XXXXXX"')
    
    // For testing, you can replace this with the actual OTP from logs
    const testOTP = '123456' // Replace with actual OTP from server logs
    
    console.log('\n3️⃣ Testing OTP verification with database fixes...')
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
      console.log('🎉 All fixes are working correctly!')
    } else {
      console.log('❌ OTP verification failed')
      console.log('💡 This might be because:')
      console.log('   - You need to enter the correct OTP from server logs')
      console.log('   - Database permissions still need to be fixed')
      console.log('   - Run the SQL script in Supabase dashboard')
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error)
  }
}

testFixes() 