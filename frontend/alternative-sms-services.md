# Alternative SMS Services for Development

## 1. TextLocal (India - Free Trial)
- **Website:** https://www.textlocal.in/
- **Free Trial:** 100 SMS free
- **Cost:** ~₹0.30 per SMS
- **API:** REST API available
- **Setup:** Quick registration, instant activation

## 2. MSG91 (India - Free Trial)
- **Website:** https://msg91.com/
- **Free Trial:** 100 SMS free
- **Cost:** ~₹0.25 per SMS
- **API:** REST API available
- **Setup:** Simple integration

## 3. 2Factor (India - Free Trial)
- **Website:** https://2factor.in/
- **Free Trial:** 100 SMS free
- **Cost:** ~₹0.20 per SMS
- **API:** REST API available
- **Setup:** Easy to integrate

## 4. Fast2SMS (India - Free Trial)
- **Website:** https://www.fast2sms.com/
- **Free Trial:** 100 SMS free
- **Cost:** ~₹0.15 per SMS
- **API:** REST API available
- **Setup:** Quick setup

## Quick Setup Example (TextLocal):
```javascript
// Replace Twilio with TextLocal
const sendSMS = async (to, message) => {
  const response = await fetch('https://api.textlocal.in/send/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      apikey: 'your_textlocal_api_key',
      numbers: to,
      message: message,
      sender: 'TXTLCL'
    })
  });
  return response.ok;
};
```

## Recommendation:
For **development/testing**: Use TextLocal or MSG91
For **production**: Upgrade Twilio to paid account 