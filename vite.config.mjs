import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins:[
    tailwindcss()
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  root: 'src',
  server: {
    open: 'index.html',
  },
});