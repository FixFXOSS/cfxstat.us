# Cloudflare Workers Deployment Guide

This guide covers deploying FixFX Links to Cloudflare Workers.

## Prerequisites

1. Cloudflare account at https://dash.cloudflare.com
2. Workers enabled on your account
3. Wrangler CLI installed globally: `npm install -g wrangler`
4. Domain registered (for production deployment)

## Setup Steps

### 1. Authenticate with Cloudflare

```bash
wrangler login
```

This will open a browser to grant Wrangler access to your Cloudflare account.

### 2. Configure wrangler.toml

Update the `wrangler.toml` file with your settings:

```toml
account_id = "your-account-id"  # Found in Cloudflare dashboard
```

For production with a custom domain:

```toml
[env.production]
name = "fixfx-links-prod"
routes = [
  { pattern = "links.fixfx.wiki", zone_name = "fixfx.wiki" }
]
```

Replace `links.fixfx.wiki` and `fixfx.wiki` with your actual domain.

### 3. Deploy to Workers

Deploy to the default development environment:

```bash
bun run deploy
```

Or deploy to production:

```bash
bun run deploy -e production
```

The site will be available at:
- Development: `https://fixfx-links.workers.dev`
- Production: `https://links.fixfx.wiki` (if configured)

## Environment Variables

To set environment variables for your Workers:

```bash
wrangler secret put VARIABLE_NAME
```

Then access in your code:

```typescript
const value = process.env.VARIABLE_NAME
```

## Monitoring & Logs

View real-time logs:

```bash
wrangler tail
```

View in Cloudflare dashboard:
1. Log in to https://dash.cloudflare.com
2. Go to Workers > your-project > Logs

## Custom Domain Setup

To use a custom domain with Cloudflare Workers:

1. Buy domain through Cloudflare or point nameservers to Cloudflare
2. Update `wrangler.toml` with route configuration
3. Redeploy: `bun run deploy -e production`
4. Navigate to your domain in Cloudflare dashboard and verify Workers route

## Performance Optimization

Cloudflare Workers provides built-in optimizations:
- Global edge network distribution
- Automatic gzip compression
- HTTP/2 and HTTP/3 support
- Automatic HTTPS with free SSL

## Troubleshooting

### 401 Unauthorized
Run `wrangler login` again to re-authenticate.

### Build fails
Ensure all dependencies are installed:
```bash
bun install
```

### Site not loading
Check Workers dashboard for errors:
1. https://dash.cloudflare.com
2. Workers > fixfx-links > Deployments

### Custom domain not working
Verify in Cloudflare dashboard:
1. Domain is using Cloudflare nameservers
2. Workers route matches your domain exactly
3. SSL/TLS is set to "Full" or better

## Rollback

To rollback to a previous deployment:

1. Go to Cloudflare dashboard
2. Workers > fixfx-links > Deployments
3. Click the deployment you want to rollback to
4. Click "Rollback"

## Local Testing

Test the production build locally:

```bash
bun run build
bun run start
```

Then visit `http://localhost:3000`

## Additional Resources

- Cloudflare Workers Docs: https://developers.cloudflare.com/workers/
- Wrangler CLI Docs: https://developers.cloudflare.com/workers/wrangler/
- TanStack Start Deployment: https://tanstack.com/start/latest/docs/framework/react/guide/deploying
