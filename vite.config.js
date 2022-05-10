import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    copy({
      targets: [
        {
          src: './node_modules/@arcgis/core/assets',
          dest: './public',
        },
      ],
      hook: 'writeBundle',
    }),
    VitePWA(),
  ],
});
