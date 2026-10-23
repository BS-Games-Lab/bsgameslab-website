# BS Games Lab — website

A minimal, single-page studio site built with [Astro](https://astro.build), deployed on [Vercel](https://vercel.com).

## Local development

Requires **Node.js 24** (see `.nvmrc`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to ./dist
npm run preview   # serve the production build locally
```

## Project structure

```
public/            favicons, social share image, manifest, robots.txt
src/assets/        transparent cut-outs of the logo (optimised at build time)
src/layouts/       Base.astro — <head>, meta tags, fonts, global styles
src/pages/         index.astro (home) and 404.astro
src/styles/        global.css — colour tokens sampled from the logo
```

Editing content: the home page copy and the two game cards live in `src/pages/index.astro`
(the `games` array near the top). When a game is announced, give it a title there.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, click **Add New → Project** and import the repository.
   Vercel detects Astro automatically — keep the defaults
   (build command `npm run build`, output directory `dist`).
3. Click **Deploy**.

### Connecting your domain

1. In the Vercel project, open **Settings → Domains** and add your domain
   (e.g. `yourdomain.com`, and also `www.yourdomain.com` to redirect to it).
2. Vercel shows the DNS records to add. At your domain registrar, set either:
   - an **A record** for `@` pointing to the IP Vercel shows, and a **CNAME** for `www`
     pointing to the value Vercel shows, **or**
   - switch the domain's nameservers to Vercel's.
3. Wait for DNS to propagate (minutes to a few hours). Vercel issues HTTPS automatically.
4. Optional: add an environment variable `SITE_URL=https://yourdomain.com` under
   **Settings → Environment Variables** and redeploy, so canonical and social-share links
   always use your domain. (Without it, Vercel's production domain is used automatically.)
