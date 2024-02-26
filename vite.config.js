import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import VitePluginCss from 'vite-plugin-css';

export default defineConfig({
  plugins: [
    react(),
    // VitePluginCss()
  ]
});
