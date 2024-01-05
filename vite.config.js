import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  // Use a pattern to include all image assets
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.JPG', '**/*.jpeg', '**/*.svg']
});
