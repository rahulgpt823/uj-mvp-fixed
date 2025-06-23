// Quick debug script to test session
const response = await fetch('http://localhost:3000/api/auth/session', {
    credentials: 'include' // Include cookies
});

const result = await response.json();
console.log('Session check result:', result);

if (result.success) {
    console.log('✅ User is logged in:', result.user.firstName, result.user.lastName);
    console.log('📱 Mobile:', result.user.mobileNumber);
} else {
    console.log('❌ User is not logged in');
    console.log('💡 Please log in first by going to the login page');
} 