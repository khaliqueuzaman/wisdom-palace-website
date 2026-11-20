// @ts-check
import { defineConfig } from 'astro/config';

// PREVIEW=1 builds one .html file per page so the static preview host can serve it.
// The production build (Hostinger) uses clean folder URLs: /products/apple/iphone-17/
const preview = process.env.PREVIEW === '1';

export default defineConfig({
  site: process.env.SITE_URL || 'https://wisdompalace.ae',
  trailingSlash: preview ? 'ignore' : 'always',
  build: { format: preview ? 'file' : 'directory', assets: 'assets', inlineStylesheets: preview ? 'always' : 'auto' },
  compressHTML: true
});
