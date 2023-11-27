import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'sentry-spotlight',
      // the proper extensions will be added
      fileName: 'sentry-spotlight',
    },
    // rollupOptions: {
    //   plugins: [
    //     inject({
    //       process: 'process',
    //     }),
    //   ],
    // },
  },
});
