# Prisma Setup and Troubleshooting

## Why Prisma Errors Occur After Reinstallation

The error `"@prisma/client did not initialize yet. Please run 'prisma generate'"` occurs because:

1. **Prisma Client is generated code** - It's not part of the npm package but generated based on your schema
2. **Generated files are cleared** when you delete `node_modules`
3. **API files try to import Prisma** before it's generated during server startup

## Solutions Implemented

### 1. Automatic Generation via postinstall Script

The `package.json` now includes:
```json
{
  "scripts": {
    "postinstall": "nuxt prepare && prisma generate"
  }
}
```

This ensures Prisma client is generated automatically after every `npm install`.

### 2. Singleton Prisma Instance

Created `utils/prisma.ts` with a singleton pattern:
```typescript
import { PrismaClient } from '@prisma/client'

declare global {
  var __prisma: PrismaClient | undefined
}

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.__prisma) {
    global.__prisma = new PrismaClient()
  }
  prisma = global.__prisma
}

export default prisma
```

### 3. Updated All API Files

All server API files now import from the singleton:
```typescript
import prisma from '~/utils/prisma'
```

Instead of creating new instances:
```typescript
// ❌ Don't do this
const prisma = new PrismaClient()
```

## Environment Variables

Make sure you have a `.env` file with:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/urvashi_jewellers"
```

Or the `DATABASE_URL` is available in your environment.

## Manual Steps After Reinstallation

If you still encounter issues:

1. **Generate Prisma Client manually:**
   ```bash
   npx prisma generate
   ```

2. **Test the connection:**
   ```bash
   npx tsx scripts/test-prisma.ts
   ```

3. **Clear build cache if needed:**
   ```bash
   rm -rf .nuxt
   npm run dev
   ```

## Best Practices

1. **Never create multiple PrismaClient instances** in server-side code
2. **Always use the singleton pattern** for database connections
3. **Include prisma generate in postinstall** scripts
4. **Keep environment variables properly configured**

## Troubleshooting

If you still get Prisma errors:

1. Check if `node_modules/@prisma/client` exists
2. Verify `DATABASE_URL` is set
3. Run `npx prisma generate` manually
4. Restart the development server 