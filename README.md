# Telegram Lead Page — Setup Guide

This one's simpler than Framecraft — no payment provider needed.

## What it does
1. Person enters their email
2. Clicking "Continue to Telegram" quietly logs their email in the background, then sends them straight to your Telegram invite link
3. You can see everyone who joined by checking Vercel's logs (steps below) — no dashboard/database needed

## 1. Deploy on Vercel (same routine as before)
1. Create a new GitHub repository (e.g. "telegram-leads")
2. Upload this folder's contents: `index.html`, `README.md`, and the `api` folder (with `lead.js` inside)
3. In Vercel, click **Add New → Project**, import this new repository, and click **Deploy** (no environment variables needed this time — nothing secret to add)
4. You'll get a live link like `telegram-leads-yourname.vercel.app`

## 2. How to see who joined
1. In Vercel, open this project → **Deployments** → click the latest one
2. Look for a **Logs** or **Functions** tab
3. Every time someone submits their email, a line appears like:
   `NEW LEAD: someone@email.com at 2026-09-29T12:00:00.000Z`
4. You can filter/search this list, but there's no export button — if you want a downloadable list later (like a spreadsheet), let me know and I can add proper storage for that.

## 3. Changing the Telegram link later
Open `index.html` on GitHub, find:
```
const TELEGRAM_LINK = "https://t.me/+YazVyR6kFc5jMDRk";
```
and replace the link inside the quotes. Commit, and Vercel redeploys automatically.

## 4. Changing the wording
Open `index.html` on GitHub — the visible text is near the top of the `<body>` section:
- `<h1>Join our Telegram Channel</h1>` — the main heading
- `<p class="sub">...</p>` — the subtext under it

Edit either directly, commit, and it updates live.
