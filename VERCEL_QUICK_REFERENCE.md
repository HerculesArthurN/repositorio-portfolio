# ⚡ Vercel Quick Reference

## 🎯 Deployment Type
**Static Site (SSG)** - Best for portfolios

## 📦 Build Settings
```
Framework: Create React App
Build Command: npm run build
Output Directory: build
Install Command: npm install
Node Version: 18.x
```

## 🚀 Deploy Now
1. Push code to GitHub
2. Visit https://vercel.com/new
3. Import `repositorio-portfolio`
4. Click Deploy (settings auto-detected)

## 🔧 Key Files Created
- `vercel.json` - Vercel configuration
- `.nvmrc` - Node version lock
- `VERCEL_DEPLOYMENT_GUIDE.md` - Full guide

## ⚠️ Important Changes Made
- ❌ Removed `homepage` field from package.json (GitHub Pages specific)
- ✅ Added Node.js version lock (18.x)
- ✅ Enhanced SEO meta tags
- ✅ Added performance optimizations

## 🎨 Performance
- Bundle Size: ~78KB (Excellent!)
- Target Lighthouse Score: 90+
- CDN: Global edge caching enabled

## 🔄 Auto-Deploy
Every push to `main` branch automatically deploys to production

## 📊 Monitor
- Vercel Dashboard: https://vercel.com/dashboard
- Enable Analytics in Project Settings

## 🌐 Custom Domain (Optional)
Project Settings → Domains → Add Domain

## 🆘 Troubleshooting
- **404 on refresh?** ✅ Fixed with rewrites in vercel.json
- **Build fails?** ✅ Fixed with .nvmrc
- **Assets missing?** ✅ Fixed by removing homepage field

## 📞 Need Help?
- Full Guide: `VERCEL_DEPLOYMENT_GUIDE.md`
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
