import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import Sitemap from 'vite-plugin-sitemap';
import { paths } from './src/navigation/Paths';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        theme_color: '#B32AF9',
        background_color: '#000',
        display: 'fullscreen',
        scope: '/',
        start_url: '/',
        name: 'vite-github-pages-boilerplate',
        short_name: 'vite-github-pages-boilerplate',
        description: 'vite-github-pages-boilerplate',
        icons: [],
      },
    }),
    Sitemap({
      dynamicRoutes: Object.keys(paths).map((e) => paths[e]),
      hostname: 'http://localhost',
      robots: [{ userAgent: '*', allow: '/' }],
    }),
  ],
  base: '/vite-github-pages-boilerplate',
});
