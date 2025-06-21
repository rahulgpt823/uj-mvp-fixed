# Environment Setup for Urvashi Jewellers

## Required Environment Variables

Create a `.env` file in the `frontend/` directory with the following variables:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Database Configuration (for Prisma if used)
DATABASE_URL=your_postgresql_connection_string

# API Configuration
NUXT_PUBLIC_API_BASE=/api
API_URL=http://localhost:3000/api

# Google Maps (optional)
GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Other API Keys (optional)
RAPIDAPI_KEY=your_rapidapi_key
```

## Steps to Set Up

1. **Create `.env` file:**
   ```bash
   cd frontend
   touch .env
   ```

2. **Add your Supabase credentials:**
   - Go to your Supabase project dashboard
   - Navigate to Settings > API
   - Copy the Project URL and anon public key
   - Add them to your `.env` file

3. **Add your Cloudinary credentials:**
   - Go to your Cloudinary dashboard
   - Copy the Cloud Name, API Key, and API Secret
   - Add them to your `.env` file

4. **Test the connection:**
   ```bash
   npm run dev
   ```

## Common Issues and Solutions

### Issue: "Database connection failed, returning empty array"

This happens when:
1. Missing Supabase environment variables
2. Incorrect Supabase credentials
3. Supabase project is paused (free tier limitation)
4. Network connectivity issues

**Solution:**
1. Verify your `.env` file has correct Supabase credentials
2. Check if your Supabase project is active
3. Test connection using the provided test scripts

### Issue: Images not uploading

This happens when:
1. Missing Cloudinary environment variables
2. Incorrect Cloudinary credentials

**Solution:**
1. Verify your `.env` file has correct Cloudinary credentials
2. Test Cloudinary connection

## Test Scripts

Run these to verify your setup:

```bash
# Test Supabase connection
node test-supabase-client.js

# Test database connection
node test-db-connection.js

# Test general Supabase imports
node test-supabase.js
```

## Database Setup

If you get "table does not exist" errors:

1. **Create tables in Supabase:**
   - Go to Supabase Dashboard > SQL Editor
   - Run the SQL from `create-tables.sql`

2. **Grant permissions:**
   - Run the SQL from `grant-all-permissions.sql`

3. **Disable RLS for development:**
   - Run the SQL from `disable-rls.sql`

## Troubleshooting

### Check Environment Variables Loading

Add this to your API endpoint for debugging:

```javascript
console.log('Environment check:')
console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? 'Set' : 'Missing')
console.log('SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? 'Set' : 'Missing')
console.log('CLOUDINARY_CLOUD_NAME:', process.env.CLOUDINARY_CLOUD_NAME ? 'Set' : 'Missing')
```

### Restart Development Server

After adding environment variables:
```bash
# Stop the server (Ctrl+C)
# Then restart
npm run dev
```

### Check Network Connectivity

If you're having connection issues:
1. Check your internet connection
2. Verify Supabase project status
3. Try accessing your Supabase dashboard directly
4. Check if you're behind a firewall/proxy

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file should be in your `.gitignore`
- Use different credentials for development and production
- Regularly rotate your API keys 