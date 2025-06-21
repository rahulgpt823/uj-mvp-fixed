# Database Troubleshooting Guide

## Issue: Server not pulling stored data after restart

### Symptoms
- Products page shows empty even after adding products
- Console shows "Database connection failed, returning empty array"
- Error messages about missing environment variables or database tables

### Root Causes & Solutions

## 1. Missing Environment Variables

**Problem**: The most common issue is missing or incorrect environment variables.

**Check**: Run this test script to verify your environment setup:
```bash
cd frontend
node test-connection-status.js
```

**Solution**:
1. Create a `.env` file in the `frontend/` directory:
```bash
touch frontend/.env
```

2. Add your Supabase credentials to the `.env` file:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

3. **Restart the development server** after adding environment variables:
```bash
# Stop the server (Ctrl+C if running)
npm run dev
```

## 2. Missing Database Tables

**Problem**: Database tables don't exist in Supabase.

**Symptoms**: Error messages like "relation 'products' does not exist"

**Solution**:
1. Go to your Supabase dashboard
2. Navigate to **SQL Editor**
3. Run the SQL from `create-tables.sql`:
```sql
-- Copy and paste the contents of create-tables.sql
-- This creates all necessary tables and sample data
```

4. Grant proper permissions by running `grant-all-permissions.sql`:
```sql
-- Copy and paste the contents of grant-all-permissions.sql
-- This ensures the API can access the tables
```

## 3. Supabase Project Issues

**Problem**: Supabase project is paused or has authentication issues.

**Common Issues**:
- Free tier projects pause after inactivity
- Invalid API keys
- Row Level Security blocking access

**Solutions**:

### A. Check Project Status
1. Go to your Supabase dashboard
2. Verify your project is active (not paused)
3. If paused, restart it

### B. Verify API Keys
1. Go to Settings > API in your Supabase dashboard
2. Copy the correct **Project URL** and **anon public** key
3. Update your `.env` file with the correct values

### C. Disable RLS for Development
Run this in Supabase SQL Editor:
```sql
-- Disable Row Level Security for development
ALTER TABLE categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE subcategories DISABLE ROW LEVEL SECURITY;
ALTER TABLE products DISABLE ROW LEVEL SECURITY;
ALTER TABLE product_images DISABLE ROW LEVEL SECURITY;
```

## 4. Network/Connectivity Issues

**Problem**: Network blocking access to Supabase.

**Check**:
1. Try accessing your Supabase dashboard directly
2. Check if you're behind a firewall/proxy
3. Test with different network connection

**Solution**:
1. Ensure stable internet connection
2. Check firewall settings
3. Try from different network if possible

## 5. API Error Handling Issues

**Problem**: The API was silently failing and returning empty data instead of proper errors.

**Fixed**: The API now properly reports database connection errors instead of returning empty arrays.

**What to expect now**:
- Clear error messages about connection issues
- Specific guidance on what to fix
- No more silent failures

## Quick Diagnostic Steps

### Step 1: Check Environment Variables
```bash
cd frontend
node test-connection-status.js
```

### Step 2: Test Direct Database Connection
```bash
node test-supabase-client.js
```

### Step 3: Check API Endpoint
With server running, visit: `http://localhost:3000/api/products/supabase`

Expected responses:
- **Success**: Array of products (even if empty)
- **Error**: Clear error message explaining the issue

### Step 4: Check Browser Console
1. Open browser dev tools (F12)
2. Go to Console tab
3. Look for error messages when loading products page

## Common Error Messages & Solutions

### "Missing Supabase configuration"
- **Cause**: Missing SUPABASE_URL or SUPABASE_ANON_KEY
- **Fix**: Add environment variables and restart server

### "Database table missing"
- **Cause**: Tables not created in Supabase
- **Fix**: Run create-tables.sql in Supabase SQL Editor

### "Database authentication failed"
- **Cause**: Invalid API keys or RLS blocking access
- **Fix**: Verify API keys and disable RLS for development

### "Database connection timeout"
- **Cause**: Network issues or Supabase project paused
- **Fix**: Check network and Supabase project status

### "Subcategory not found"
- **Cause**: Missing seed data in database
- **Fix**: Run the INSERT statements from create-tables.sql

## Prevention Tips

1. **Always use environment variables** - Never hardcode credentials
2. **Keep .env file backed up** - But never commit it to git
3. **Regular database backups** - Use Supabase backup features
4. **Monitor project status** - Check Supabase dashboard regularly
5. **Test after deployment** - Always verify connections work

## Still Having Issues?

If you're still experiencing problems:

1. **Check the console logs** - Look for specific error messages
2. **Run all test scripts** - Use the provided diagnostic tools
3. **Verify Supabase dashboard** - Ensure project is healthy
4. **Check network connectivity** - Try different connection
5. **Review environment variables** - Ensure all required vars are set

## Test Commands Summary

```bash
# Quick environment check
node test-connection-status.js

# Detailed Supabase test
node test-supabase-client.js

# General imports test
node test-supabase.js

# Database connection test
node test-db-connection.js

# Start development server
npm run dev
```

Remember: **Always restart your development server after changing environment variables!** 