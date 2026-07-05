import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://safestrip-three.vercel.app',

  // FIX: Minify HTML output — hapus whitespace & komentar dari build
  // Tidak ada risiko apapun, gratis ~5-15% pengurangan ukuran file HTML.
  compressHTML: true,

  // FIX: Aktifkan prefetch bawaan Astro untuk navigasi antar halaman
  // defaultStrategy 'hover' = prefetch saat user hover link (tidak terlalu agresif)
  // Berguna saat website berkembang menjadi multi-page.
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      // FIX: Tambah hint crawl frequency & prioritas relatif untuk Googlebot
      // 'monthly' cocok untuk landing page yang tidak berubah setiap hari
      changefreq: 'monthly',
      priority: 0.8,
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
