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
public/            favicons, social share image, manifest, robots.txt, app-ads.txt
src/assets/        logo cut-outs and game images (optimised at build time)
src/layouts/       Base.astro (<head>, meta tags, fonts, global styles)
                   Legal.astro (layout for policy pages)
src/pages/         index.astro (home), 404.astro
src/pages/maha-crush/, src/pages/maha-kumbh/
                   privacy.md and delete-data.md for each game
src/styles/        global.css (colour tokens sampled from the logo)
```

Editing content: the home page copy and the game details live in `src/pages/index.astro`
(`mahaCrush` and `upcoming` near the top). Game images are in `src/assets/games/`.
Policy pages are Markdown files: edit the text and the `updated` date in their frontmatter.

## Deployment

The site is hosted on [Vercel](https://vercel.com) (project `bsgameslab-website`, Hobby plan)
and served at **https://bsgameslab.space** (also https://bsgameslab-website.vercel.app).
The Vercel project is connected to the GitHub repo `BS-Games-Lab/bsgameslab-website`.

### Deploying a change

1. Check it locally: `npm run dev`, then `npm run build` to make sure the production build passes.
2. Commit and push to `main`:

   ```sh
   git add -A
   git commit -m "describe the change"
   git push origin main
   ```

3. Vercel builds and deploys automatically (about a minute). Follow it under
   **Vercel → bsgameslab-website → Deployments**; the newest entry goes from *Building* to **Ready**.
4. Open https://bsgameslab.space and hard refresh (Cmd+Shift+R) to see the change.

Pushes to any other branch create a **Preview** deployment with its own URL and leave the live
site unchanged, which is handy for checking a change before merging it into `main`.

### Deploying by hand

If a push doesn't show up in Deployments, open **Deployments → ⋯ → Create Deployment**,
enter `main` (or a commit hash) and deploy it.

### Rolling back

In **Deployments**, open an earlier **Ready** production deployment and choose
**⋯ → Instant Rollback** (or **Promote to Production**). The live site switches to it immediately.
To undo in code instead, run `git revert HEAD` and push.

### Requirements

- **The GitHub repo must stay public.** Vercel's Hobby plan cannot deploy private repos owned by a
  GitHub organisation. Making it private requires upgrading Vercel to Pro.
- **The Vercel GitHub app must have access to the `BS-Games-Lab` organisation**
  (Vercel → Team Settings → Git). If deploys stop appearing after pushes, check that the app is
  still installed there and that **Project Settings → Git** shows `BS-Games-Lab/bsgameslab-website`.
- Build settings are Vercel's Astro defaults: build command `npm run build`, output directory
  `dist`, Node.js 24.

### Domain and site URL

`bsgameslab.space` is set up under **Vercel → Settings → Domains**; Vercel manages HTTPS.
`astro.config.mjs` takes the site URL (used for canonical and social-share links) from the
`SITE_URL` environment variable, falling back to Vercel's production domain.

### Links used by Google Play and AdMob

These URLs are registered in Play Console and AdMob, so keep their paths unchanged:

| URL | Used for |
|---|---|
| `/app-ads.txt` | AdMob app-ads.txt verification |
| `/maha-crush/privacy` | Maha Crush privacy policy (Play Console → App content) |
| `/maha-crush/delete-data` | Maha Crush data deletion (Play Console → Data safety) |
| `/maha-kumbh/privacy` | Maha Kumbh Mela Game 3D privacy policy |
| `/maha-kumbh/delete-data` | Maha Kumbh Mela Game 3D data deletion |
