// @ts-check
import { defineConfig } from 'astro/config';
// @ts-ignore: Ignore missing type declarations for Astro Tailwind integration
import tailwind from '@astrojs/tailwind'; // Pastikan pakai integrasi resmi
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://safestrip-three.vercel.app',
  integrations: [
    tailwind(), // Menjalankan Tailwind
    sitemap()   // Menjalankan Sitemap
  ],
});