
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',  // This will help in resolving paths like '@/components/YourComponent'
    },
  },
  optimizeDeps: {
    exclude: ['chunk-REFQX4J5'],  // Replace with the actual package causing the issue if known
  },
  build: {
    rollupOptions: {
      input: '/src/main.jsx',  // Ensure this points to your main.jsx file
    },
  },

});

