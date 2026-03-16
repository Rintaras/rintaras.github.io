import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'three', '@react-three/fiber', '@react-three/drei'],
    exclude: ['lucide-react']
  },
  build: {
    outDir: 'docs',
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false
  }
});
