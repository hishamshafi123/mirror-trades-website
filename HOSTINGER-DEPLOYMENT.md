# Hostinger Deployment Guide for Mirror Trades

This guide will help you deploy your Mirror Trades website to Hostinger shared hosting.

## 🚀 Quick Start

### Step 1: Build the Static Files

Run the build script in your terminal:

```bash
./build-for-hostinger.sh
```

Or manually:
```bash
npm install
npm run build
```

This will create an `out` folder with all your static files.

### Step 2: Upload Files to Hostinger

1. **Login to Hostinger Control Panel** (hPanel)
2. Go to **File Manager**
3. Navigate to `public_html` folder
4. **IMPORTANT**: Backup and delete all existing files in `public_html` (keep only `.htaccess` if you want)
5. **Upload EVERYTHING from the `out` folder to `public_html`**

#### Critical Upload Checklist:
- ✅ `index.html` (root redirect file)
- ✅ `404.html`
- ✅ `.htaccess` (enable "Show Hidden Files" in File Manager to see it)
- ✅ **ENTIRE `_next` folder** (contains ALL JavaScript, CSS, fonts)
- ✅ **ENTIRE `el` folder** (Greek pages with subfolders)
- ✅ **ENTIRE `en` folder** (English pages with subfolders)
- ✅ All image files (`favicon.ico`, `your-logo.png`, `finance-bg.jpg`, etc.)

**⚠️ CRITICAL**: You MUST upload the ENTIRE `_next` directory with ALL subdirectories and files. Missing JavaScript files will cause a blank page!

### Step 3: Environment Variables (Optional)

If you need to add environment variables:

1. Go to **Advanced** → **PHP Configuration** in hPanel
2. Add your environment variables there

OR create a `.env.production` file and upload it to `public_html`:

```env
MYFXBOOK_HARDCODED_SESSION=your_session_here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Step 4: Verify Deployment

Visit your domain:
- `https://yourdomain.com` → Should redirect to `/el/` (Greek - default)
- `https://yourdomain.com/en/` → English version
- `https://yourdomain.com/el/` → Greek version

## 📁 File Structure

After uploading, your `public_html` should look like:

```
public_html/
├── .htaccess                  # URL rewriting rules
├── index.html                 # Homepage redirect
├── 404.html                   # Error page
├── _next/                     # Next.js assets
│   ├── static/
│   └── ...
├── el/                        # Greek pages
│   ├── index.html
│   ├── terms/
│   └── risk-disclosure/
├── en/                        # English pages
│   ├── index.html
│   ├── terms/
│   └── risk-disclosure/
├── favicon.ico
├── your-logo.png
└── other image files
```

## ⚙️ .htaccess Configuration

The `.htaccess` file is automatically included in the build. It handles:

✅ Force HTTPS
✅ URL rewriting for clean URLs
✅ Language routing (Greek/English)
✅ Browser caching
✅ Gzip compression
✅ Security headers

## 🔧 Troubleshooting

### Issue: Website shows completely blank/white page ⚠️ MOST COMMON
**Root Cause**: Missing JavaScript files from `_next` folder

**Solution**:
1. Open browser console (F12 → Console tab)
2. Look for 404 errors loading `/_next/static/chunks/*.js` files
3. **FIX**: Re-upload the ENTIRE `_next` folder from `out` to `public_html`
   - DO NOT upload just individual files
   - Upload the whole `_next` folder with all subdirectories
4. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
5. Refresh the page

### Issue: Pages show 404 error
**Solution**: Make sure `.htaccess` file is uploaded and visible (enable "Show Hidden Files" in File Manager)

### Issue: Styles/images not loading
**Solution**:
- Check that `_next` folder is uploaded completely
- Clear browser cache
- Check file permissions (should be 644 for files, 755 for folders)

### Issue: Content is invisible (opacity issue)
**Solution**: This has been fixed in the latest build. Rebuild with `npm run build` and re-upload

### Issue: Gold particles not showing
**Solution**:
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for JavaScript errors
- Make sure `_next/static/chunks/` folder is uploaded completely

## 🌐 Domain Setup

1. Point your domain to Hostinger nameservers:
   - `ns1.dns-parking.com`
   - `ns2.dns-parking.com`

2. In Hostinger, add your domain:
   - Go to **Domains** → **Add Domain**
   - Enter your domain name
   - Point it to `public_html`

## 📝 Notes

- **API Routes**: The Myfxbook API is pre-rendered with mock data for static export
- **No Server Required**: Everything runs client-side (JavaScript in browser)
- **Updates**: To update your site, rebuild (`npm run build`) and re-upload the `out` folder

## 🆘 Need Help?

If you encounter issues:

1. Check Hostinger Error Logs (in hPanel → Error Log)
2. Enable browser developer console (F12) to see JavaScript errors
3. Contact Hostinger support for server-related issues

## ✅ Final Checklist

- [ ] Built static files (`npm run build`)
- [ ] Uploaded all files from `out` folder to `public_html`
- [ ] Uploaded `.htaccess` file
- [ ] Domain points to Hostinger
- [ ] Website loads at your domain
- [ ] Both `/en/` and `/el/` routes work
- [ ] Gold particles are visible
- [ ] Images and styles load correctly

---

**Your site is now live!** 🎉

Visit your domain to see it in action.
