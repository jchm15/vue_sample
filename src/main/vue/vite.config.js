import { defineConfig } from 'vite'
import commonConfig from './vite.config.common';
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  ...commonConfig,
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
});
