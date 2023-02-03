import { defineConfig } from 'vite';
import path from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    host: 'localhost', // has to be used instead of 127.0.0.1 because of backend cookie
    port: 3124,
    proxy: {
      '/query': {
        target: 'http://127.0.0.1:4000',
        changeOrigin: true,
      },
    },
  },
});
