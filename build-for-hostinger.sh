#!/bin/bash

# Build script for Hostinger deployment
echo "🚀 Building Mirror Trades for Hostinger..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the static site
echo "🔨 Building static site..."
npm run build

# Check if build was successful
if [ -d "out" ]; then
  echo "✅ Build successful!"
  echo ""
  echo "📁 Files ready in 'out' folder"
  echo ""
  echo "📋 Next steps:"
  echo "1. Go to your Hostinger File Manager"
  echo "2. Navigate to public_html folder"
  echo "3. Delete all existing files in public_html (backup first!)"
  echo "4. Upload ALL contents from the 'out' folder to public_html"
  echo "5. Upload the .htaccess file to public_html"
  echo ""
  echo "🌐 Your site will be live at your domain!"
else
  echo "❌ Build failed! Check the errors above."
  exit 1
fi
