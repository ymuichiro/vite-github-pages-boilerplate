# Vite Github Pages boilerplate

Boilerplate for building Github Pages instantly. It incorporates the following frameworks

- Vite
- React
- mui-material

# Quick start

## Copy this repository

Just press `use this template` to copy it!

## Perform initial setup

Make sure your project is up and running without problems!

```sh
npm install
npm run start
```

Update `vite.config.ts` according to the information in your repository

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import Sitemap from 'vite-plugin-sitemap';
import { paths } from './src/navigation/Paths';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      /* site info */
    }),
    Sitemap({
      dynamicRoutes: Object.keys(paths).map((e) => paths[e]),
      hostname: 'http://localhost', // <-- github pages url
      robots: [{ userAgent: '*', allow: '/' }],
    }),
  ],
  base: '/vite-github-pages-boilerplate', // <-- github pages base paths
});
```

## Deploy

Build GitHub Pages.
Since GitHub Actions have already been built, simply push them to the repository to start deployment
