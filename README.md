# silwolk

Landing page for early access: morning checks for AI-shipped apps that left something open.

## Product

Every morning, silwolk checks an app for exposed secrets, open databases, and unprotected customer data, then emails a plain-English note with what to fix. The agent is read-only.

## Run locally

```bash
npm start
```

Open [http://localhost:4173](http://localhost:4173).

## Deploy (required for the form)

The early-access form uses **Netlify Forms** (same-origin). It only collects signups after this folder is published on Netlify.

1. Open [Netlify Drop](https://app.netlify.com/drop) or your existing site’s deploy panel.
2. Publish this repo root (or drag `index.html`, `app.js`, `styles.css`, `favicon.svg`, `thanks.html`, `netlify.toml`).
3. In Netlify → Forms, confirm `pilot-signup` appears after the first deploy.
4. Optional: Forms → notification → email to `silwolk.com@gmail.com`.

### Why the old page got views but zero joins

The live page posted to `api.web3forms.com` via `fetch`. That request fails in the browser (CORS / Cloudflare), so visitors never actually joined.

## X post draft (post AFTER redeploy)

> Shipped an app with Cursor/Copilot? AI sometimes leaves secrets, DBs, or customer data open. silwolk checks every morning and emails what’s exposed + how to close it. Read-only. Free early access → YOUR_NETLIFY_URL
