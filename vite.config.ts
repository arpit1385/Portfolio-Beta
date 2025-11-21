import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This ensures assets are loaded relatively, 
  // preventing 404 errors on GitHub Pages (e.g. https://user.github.io/repo/)
  base: './', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});