import { defineConfig } from 'vite';
import {ViteImageOptimizer} from 'vite-plugin-image-optimizer';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/wedding/',
  plugins: [
    ViteImageOptimizer({
      include: ['src/assets/*.{png,jpg,jpeg,gif,svg}'],
      exclude: [],
      webp: {
        quality: 75,
      },
      avif: {
        quality: 50,
      },
      png: {
        quality: [0.6, 0.8],
      },
      jpeg: {
        quality: 75,
      },
      svg: {
        multipass: true,
        datauri: 'base64',
      },
    }),
    viteStaticCopy({
      targets: [
        { src: 'src/assets/canva_ai_5.webp', dest: 'assets' }
      ]
    })
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'src/index.html',
      },
    },
  },
  server: {
    open: true,
  },
});