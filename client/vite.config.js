import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // Development server configuration
  server: {
    port: 5173,
    open: true,
    cors: true,
  },

  // Build optimization configuration
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    esbuild: {
      drop: ['console'],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
  },

  // Optimization configuration
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
