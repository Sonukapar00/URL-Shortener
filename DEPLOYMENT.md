# 🚀 Deployment Guide

Complete guide for deploying the URL Shortener application to Vercel and Render.

## Table of Contents
- [Frontend Deployment (Vercel)](#frontend-deployment-vercel)
- [Backend Deployment (Render)](#backend-deployment-render)
- [Environment Configuration](#environment-configuration)
- [Post-Deployment Verification](#post-deployment-verification)
- [Troubleshooting](#troubleshooting)

---

## Frontend Deployment (Vercel)

### Prerequisites
- GitHub account with the repository pushed
- Vercel account (free tier available)
- Environment variables configured

### Step 1: Prepare Your Repository

1. **Ensure all changes are committed**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Verify .env.local is in .gitignore** (it should be)
   ```bash
   cat .gitignore | grep .env
   ```

### Step 2: Connect to Vercel

1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Select "Import Git Repository"
4. Select your `URL-Shortener` repository
5. Click "Import"

### Step 3: Configure Project Settings

1. **Select Framework**: Vite
2. **Root Directory**: `./client`
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. **Install Command**: `npm install`

### Step 4: Set Environment Variables

In the Vercel dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following variables:

```
Name: VITE_API_BASE_URL
Value: https://your-backend-url.render.com/api
Environments: All (Production, Preview, Development)
```

Replace `your-backend-url` with your actual Render backend URL.

### Step 5: Deploy

1. Click **Deploy**
2. Wait for the build to complete (typically 1-3 minutes)
3. You'll receive a URL like: `https://url-shortener-xxxxx.vercel.app`

### Step 6: Verify Deployment

1. Visit your Vercel URL
2. Test creating a short URL
3. Verify analytics are working
4. Check console for any errors (F12 → Console)

---

## Backend Deployment (Render)

### Prerequisites
- Render account (free tier available)
- MongoDB Atlas account (free tier available)
- Backend code pushed to GitHub

### Step 1: Set Up MongoDB Atlas

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new project (e.g., "url-shortener")
4. Create a new cluster (free tier - M0)
5. Wait for cluster to deploy (5-10 minutes)
6. Click "Connect"
7. Choose "Drivers" and copy the connection string
8. Replace `<password>` with your database password

Connection string format:
```
mongodb+srv://username:password@cluster.mongodb.net/url-shortener
```

### Step 2: Deploy to Render

1. Go to [https://render.com](https://render.com)
2. Sign in with GitHub
3. Create a **New** → **Web Service**
4. Connect your GitHub repository
5. Configure:
   - **Name**: url-shortener-api
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Branch**: main
   - **Root Directory**: `./server`

### Step 3: Set Environment Variables

In Render dashboard → Environment:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/url-shortener
PORT=3000
NODE_ENV=production
CORS_ORIGIN=https://your-vercel-url.vercel.app
```

Replace the values with your actual URLs and credentials.

### Step 4: Deploy

1. Click **Create Web Service**
2. Wait for deployment to complete (3-5 minutes)
3. You'll receive a URL like: `https://url-shortener-api-xxxxx.onrender.com`

### Step 5: Verify Backend

Test the API endpoints:

```bash
# Test health check (if implemented)
curl https://your-api-url/api/health

# Test getting URLs
curl https://your-api-url/api/shorturls

# Test creating a short URL
curl -X POST https://your-api-url/api/shorturls \
  -H "Content-Type: application/json" \
  -d '{"fullUrl":"https://example.com"}'
```

---

## Environment Configuration

### Frontend Environment Variables

**Production** (.env deployed on Vercel):
```
VITE_API_BASE_URL=https://url-shortener-api-xxxxx.onrender.com/api
```

**Development** (.env.local - not committed):
```
VITE_API_BASE_URL=http://localhost:3000/api
```

### Backend Environment Variables

**Production** (set in Render):
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/url-shortener
PORT=3000
NODE_ENV=production
CORS_ORIGIN=https://url-shortener-xxxxx.vercel.app
```

**Development** (.env - not committed):
```
MONGO_URI=mongodb://localhost:27017/url-shortener
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

---

## Post-Deployment Verification

### Checklist

- [ ] Frontend loads without console errors
- [ ] API connection is working
- [ ] Can create a short URL
- [ ] Can view the URL in the dashboard
- [ ] Analytics show correct click count
- [ ] Can delete a URL
- [ ] Can copy short URL to clipboard
- [ ] Mobile responsive design works
- [ ] Toast notifications appear correctly
- [ ] Page performance is acceptable

### Performance Testing

Check Lighthouse scores:
1. Open your Vercel URL
2. Press F12 → Lighthouse
3. Run audit
4. Target: 90+ for all metrics

### SSL Certificate

Vercel and Render automatically provide SSL certificates. Verify:
- Your URL shows 🔒 locked padlock in browser
- No mixed content warnings in console

---

## Troubleshooting

### Frontend Issues

**Issue: "Cannot find module"**
```bash
# Solution: Clear and reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Issue: API not responding**
1. Check Vercel environment variables are set correctly
2. Verify `VITE_API_BASE_URL` points to correct backend
3. Check backend is running on Render
4. Check CORS configuration on backend

**Issue: Build fails**
1. Check build logs in Vercel dashboard
2. Ensure `dist/` directory is being generated
3. Verify all imports are correct

### Backend Issues

**Issue: Database connection fails**
1. Verify MongoDB URI in environment variables
2. Check MongoDB Atlas allows connection from Render IP
3. Ensure database user has correct permissions

**Issue: CORS errors**
1. Backend CORS_ORIGIN must match frontend URL exactly
2. Include protocol (https://) and domain

**Issue: Render instance keeps restarting**
1. Check Render logs for errors
2. Verify environment variables are set
3. Check for infinite loops in code

---

## Monitoring & Maintenance

### Vercel Monitoring
- Check deployment logs: Vercel Dashboard → Deployments
- Set up error tracking: Integrations → Sentry (optional)
- Monitor analytics: Dashboard → Analytics

### Render Monitoring
- Check logs: Render Dashboard → Logs
- Monitor metrics: Service → Metrics
- Set up alerts: Settings → Alerts (optional)

### Database Monitoring
- MongoDB Atlas: Cluster → Monitoring
- Check cluster stats and performance
- Monitor storage usage

---

## Redeployment

### Deploy Frontend Updates
```bash
git add .
git commit -m "Description of changes"
git push origin main
# Vercel automatically redeploys on push
```

### Deploy Backend Updates
```bash
git add .
git commit -m "Description of changes"
git push origin main
# Render automatically redeploys on push
```

---

## Security Best Practices

1. **Never commit .env files**
   - Use .env.example as template
   - Add to .gitignore

2. **Rotate credentials regularly**
   - Database passwords
   - API keys
   - Session secrets

3. **Use HTTPS everywhere**
   - All URLs should be https://

4. **Validate all inputs**
   - Frontend and backend validation
   - Sanitize user inputs

5. **Keep dependencies updated**
   - Run `npm audit` regularly
   - Update packages: `npm update`

---

## Rollback Procedure

### Rollback Vercel
1. Go to Deployments
2. Find the previous successful deployment
3. Click the three dots → Redeploy

### Rollback Render
1. Go to Logs
2. Find the previous successful deployment
3. Click Redeploy for that version

---

## Support & Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas Guide](https://docs.atlas.mongodb.com/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

**Last Updated**: 2024
**Maintainer**: URL Shortener Team
