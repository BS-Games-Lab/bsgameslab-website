// @ts-check
import { defineConfig } from 'astro/config';

// Absolute site URL, used for canonical and social-share links.
// Set SITE_URL in Vercel (e.g. https://bsgameslab.com); otherwise Vercel's
// production domain is used automatically.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

export default defineConfig({
  site,
  trailingSlash: 'ignore',
});
