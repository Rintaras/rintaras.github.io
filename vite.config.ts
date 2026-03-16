import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), glsl()],
  server: {
    port: 5173,
    host: true,
    hmr: {
      overlay: false
    }
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false
  }
});
