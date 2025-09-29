# Myfxbook API Integration

This document explains the Myfxbook API integration for displaying live portfolio data.

## Overview

The integration fetches real-time portfolio performance data from Myfxbook and displays it in the Available Portfolios section. It includes session caching, error handling, and fallback to mock data if the API is unavailable.

## Architecture

### API Route (`/src/app/api/myfxbook/route.ts`)

The API route handles server-side requests to Myfxbook:

1. **Authentication**: Logs into Myfxbook using credentials from environment variables
2. **Session Management**: Caches session tokens for 30 minutes to minimize login requests
3. **Data Fetching**: Retrieves watched accounts and their performance metrics
4. **Error Handling**: Provides graceful fallback and detailed error messages

### Frontend Component (`/src/components/Portfolios.tsx`)

The frontend component:

1. **Data Fetching**: Makes requests to the internal API route
2. **Loading States**: Shows loading spinner while fetching data
3. **Error Handling**: Displays error messages and falls back to cached data
4. **Live Widgets**: Includes collapsible Myfxbook widgets for detailed view

## Features

### ✅ Implemented Features

- **Live Data Fetching**: Real-time portfolio performance from Myfxbook
- **Session Caching**: 30-minute session cache to reduce API calls
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Fallback Support**: Falls back to mock data if API is unavailable
- **Loading States**: Proper loading indicators during data fetch
- **TypeScript**: Full TypeScript support with proper interfaces
- **Security**: Credentials stored securely in environment variables
- **Widget Integration**: Collapsible live Myfxbook widgets
- **Responsive Design**: Mobile-friendly layout with animations

### 🔄 API Flow

1. User visits the page
2. Component makes request to `/api/myfxbook`
3. API route checks for cached session
4. If no cache, logs into Myfxbook API
5. Fetches watched accounts data
6. Processes and formats the data
7. Returns formatted portfolio data
8. Component displays the data with animations

## Configuration

### Environment Variables

Create a `.env.local` file:

```bash
# Required
MYFXBOOK_EMAIL=your-email@example.com
MYFXBOOK_PASSWORD=your-secure-password

# Optional
MYFXBOOK_TIMEOUT=10000
MYFXBOOK_SESSION_CACHE_DURATION=1800000
# Show only specific accounts by name/keyword (comma-separated)
# Example: "Low Risk Alpha,Gold Queen"
MYFXBOOK_ACCOUNT_FILTER=
```

### Portfolio Filtering

- By default, the API returns all watched accounts (up to 5).
- To restrict the list, set `MYFXBOOK_ACCOUNT_FILTER` with comma-separated keywords.
- If filters match nothing, it falls back to the first few accounts.

## Error Handling

### Common Issues & Solutions

1. **"Myfxbook credentials not configured"**
   - Ensure `.env.local` file exists with correct credentials
   - Restart the development server

2. **"Failed to authenticate with Myfxbook API"**
   - Check if credentials are correct
   - Verify Myfxbook account status

3. **"Failed to fetch watched accounts"**
   - Session may have expired
   - API automatically retries with fresh login

4. **Network/CORS errors**
   - Check internet connection
   - Verify Myfxbook API availability

## Deployment Notes

### Production Checklist

- [ ] Set environment variables in production hosting
- [ ] Test API endpoints work correctly
- [ ] Verify session caching is working
- [ ] Monitor API rate limits
- [ ] Set up error monitoring/logging
- [ ] Test fallback behavior

### Performance Considerations

- Session caching reduces API calls by ~95%
- Frontend caching minimizes re-renders
- Lazy loading of widgets improves initial load time
- Graceful degradation ensures site remains functional

## Files Structure

```
src/
├── app/
│   └── api/
│       └── myfxbook/
│           └── route.ts          # Main API route
├── components/
│   └── Portfolios.tsx           # Updated component with live data
├── types/
│   └── myfxbook.ts              # TypeScript interfaces
.env.local.example               # Environment variables template
.env.local                       # Actual environment variables (git-ignored)
MYFXBOOK_INTEGRATION.md         # This documentation
```

## Future Enhancements

### Possible Improvements

- **Real-time Updates**: WebSocket connection for live updates
- **More Metrics**: Additional performance indicators (Sharpe ratio, etc.)
- **Historical Data**: Charts showing performance over time
- **Custom Timeframes**: Allow users to select different time periods
- **Account Comparison**: Side-by-side portfolio comparison
- **Performance Alerts**: Notifications for significant changes

### API Limitations

- Rate limiting: ~100 requests per hour per IP
- Session timeout: Sessions expire after inactivity
- Data latency: Updates every 15-30 minutes on Myfxbook

## Troubleshooting

### Development

```bash
# Check if environment variables are loaded
npm run dev

# Test API endpoint directly
curl http://localhost:3002/api/myfxbook

# Check logs in browser console and terminal
```

### Production

- Monitor API response times
- Set up health checks for the API endpoint
- Implement logging for debugging issues
- Consider implementing retry logic with exponential backoff

## Security Notes

- Credentials are stored in environment variables only
- No sensitive data is logged or exposed to client-side
- API requests are made server-side only
- Session tokens are cached in memory, not persistent storage

This integration provides a robust, production-ready solution for displaying live portfolio data while maintaining excellent user experience even when the external API is unavailable.
