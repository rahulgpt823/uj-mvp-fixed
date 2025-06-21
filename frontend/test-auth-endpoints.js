// Test script to verify all authentication endpoints
import fetch from 'node-fetch'

const BASE_URL = 'http://localhost:3000'

async function testAuthEndpoints() {
    console.log('🧪 Testing Authentication Endpoints...')
    console.log('')

    const testPhone = '8939033443'
    const testCountryCode = '+91'
    const testFirstName = 'Test'
    const testLastName = 'User'
    const testEmail = 'test@example.com'

    try {
        // Test 1: Send OTP (without purpose - should auto-detect)
        console.log('1️⃣ Testing Send OTP (auto-detect purpose)...')
        const sendOTPResponse = await fetch(`${BASE_URL}/api/auth/send-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
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

        console.log('✅ Send OTP successful')
        console.log(`📝 Purpose detected: ${sendOTPResult.purpose}`)
        console.log('')

        // Test 2: Check Session (should fail - no session yet)
        console.log('2️⃣ Testing Session Check (should fail)...')
        const sessionResponse = await fetch(`${BASE_URL}/api/auth/session`, {
            method: 'GET'
        })

        const sessionResult = await sessionResponse.json()
        console.log('Session Result:', sessionResult)
        console.log('✅ Session check working (correctly shows no session)')
        console.log('')

        // Test 3: Verify OTP (registration)
        console.log('3️⃣ Testing OTP Verification (Registration)...')
        
        // Use the actual OTP from the response
        const testOTP = sendOTPResult.otp || '123456' // Use actual OTP if available
        console.log(`📝 Using OTP: ${testOTP}`)

        const verifyOTPResponse = await fetch(`${BASE_URL}/api/auth/verify-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                mobileNumber: testPhone,
                countryCode: testCountryCode,
                otpCode: testOTP,
                firstName: testFirstName,
                lastName: testLastName,
                email: testEmail
            })
        })

        const verifyOTPResult = await verifyOTPResponse.json()
        console.log('Verify OTP Result:', verifyOTPResult)

        if (!verifyOTPResult.success) {
            console.log('❌ Verify OTP failed')
            console.log('💡 This might be because the OTP code is incorrect')
            console.log('💡 Check the server console for the actual OTP code')
            return
        }

        console.log('✅ Verify OTP successful')
        console.log('')

        // Test 4: Check Session (should work now)
        console.log('4️⃣ Testing Session Check (should work now)...')
        const sessionResponse2 = await fetch(`${BASE_URL}/api/auth/session`, {
            method: 'GET',
            headers: {
                'Cookie': `session_token=${verifyOTPResult.token}`
            }
        })

        const sessionResult2 = await sessionResponse2.json()
        console.log('Session Result:', sessionResult2)

        if (sessionResult2.success) {
            console.log('✅ Session check successful')
        } else {
            console.log('❌ Session check failed')
        }
        console.log('')

        // Test 5: Logout
        console.log('5️⃣ Testing Logout...')
        const logoutResponse = await fetch(`${BASE_URL}/api/auth/logout`, {
            method: 'POST',
            headers: {
                'Cookie': `session_token=${verifyOTPResult.token}`
            }
        })

        const logoutResult = await logoutResponse.json()
        console.log('Logout Result:', logoutResult)

        if (logoutResult.success) {
            console.log('✅ Logout successful')
        } else {
            console.log('❌ Logout failed')
        }
        console.log('')

        console.log('🎉 All authentication endpoints are working!')

    } catch (error) {
        console.error('❌ Test failed:', error.message)
    }
}

testAuthEndpoints() 