import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue(), vueJsx(), tailwindcss()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.mjs', '.js', '.jsx', '.json', '.vue'],
  },

  server: {
    port: 60172,
    watch: {
      ignored: [
        '**/.vs/**',
        '**/node_modules/**',
        '**/.git/**',
        '**/dist/**',
        '**/bin/**',
        '**/obj/**',
      ],
    },
  },

  optimizeDeps: {
    include: ['gsap', 'gsap/ScrollTrigger', 'three'],
  },

  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (/node_modules[\\/]three[\\/]/.test(id)) return 'three'
          if (/node_modules[\\/]gsap[\\/]/.test(id)) return 'gsap'
        },
      },
    },
  },
})
