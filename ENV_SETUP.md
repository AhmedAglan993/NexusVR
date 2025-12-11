# Environment Variables Setup Guide

## How Environment Variables Work

Environment variables are **NOT** stored in git. They exist in **two different places** depending on where your app runs:

### 1. **Local Development** (Your Computer)
- The `.env.local` file stays **on your computer only**
- When you run `npm run dev`, Vite reads `.env.local` from your local filesystem
- Git ignores this file (it's in `.gitignore`), so it never gets committed to GitHub
- **Each developer** needs to create their own `.env.local` file with their own API key

### 2. **Production/Deployment** (Netlify, Vercel, etc.)
- Environment variables are set through your **hosting platform's dashboard**
- They are stored securely on the hosting platform's servers
- They are **NOT** in your git repository
- When Netlify/Vercel builds your site, they inject these variables during the build process

---

## Setup Instructions

### For Local Development:

1. Create `.env.local` file in the project root:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

2. The file is already in `.gitignore`, so it won't be committed

3. Restart your dev server:
   ```bash
   npm run dev
   ```

### For Production Deployment (Netlify):

1. Go to your Netlify dashboard
2. Navigate to: **Site Settings** → **Environment Variables**
3. Click **Add variable**
4. Add:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Your API key
5. Click **Save**
6. Redeploy your site (or push a new commit to trigger auto-deploy)

### For Production Deployment (Vercel):

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Your API key
   - **Environment**: Production (and Preview if needed)
5. Click **Save**
6. Redeploy your site

---

## Why This Works

- **Local**: Vite's `loadEnv()` function reads `.env.local` from your filesystem when you run `npm run dev`
- **Production**: The hosting platform sets environment variables on their servers, and Vite reads them during the build process
- **Security**: API keys never go into git, so they can't be exposed in your repository

---

## Important Notes

⚠️ **Never commit `.env.local` to git** - it's already in `.gitignore`  
⚠️ **Never hardcode API keys** in your source code  
✅ **Always use environment variables** for sensitive data  
✅ **Set environment variables** in your hosting platform's dashboard for production

