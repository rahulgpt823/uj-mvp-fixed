// Debug script for phone number validation
import { validatePhoneNumber } from './utils/auth.js'

console.log('🔍 Debugging Phone Number Validation...\n')

const testNumbers = [
    '9876543210',
    '+919876543210',
    '919876543210',
    '9876543210',
    '987654321'
]

testNumbers.forEach(number => {
    console.log(`Testing: ${number}`)
    const result = validatePhoneNumber(number, '+91')
    console.log('Result:', result)
    console.log('---')
}) 