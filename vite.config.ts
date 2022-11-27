import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import Sitemap from 'vite-plugin-sitemap';
import { paths } from './src/navigation/Paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    Sitemap({
      dynamicRoutes: Object.keys(paths).map((e) => paths[e]),
      hostname: 'http://localhost',
      robots: [{ userAgent: '*', allow: '/' }],
    }),
  ],
});
