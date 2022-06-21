import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: /~(.+)/, replacement: path.resolve(__dirname, 'node_modules/$1') },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  server: { hmr: { clientPort: process.env.CODESPACES ? 443 : undefined } },
})
