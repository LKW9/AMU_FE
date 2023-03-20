import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcss from './postcss.config.cjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: { postcss },
  server: {
    proxy: {
      '/api': {
        target: 'http://54.180.137.224',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
