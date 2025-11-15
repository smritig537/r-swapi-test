import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';  // New v4 plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // Enables Tailwind automatically
  ],
  base: './',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});