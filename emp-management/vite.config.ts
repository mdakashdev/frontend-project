import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'pinia',
      'axios',
      'vee-validate',
      '@vee-validate/zod',
      'zod',
      '@tanstack/vue-query',
      '@tanstack/vue-table',
      'reka-ui',
      'clsx',
      'tailwind-merge',
      'class-variance-authority',
      'lucide-vue-next',
      'apexcharts',
      'vue3-apexcharts',
      'vue-sonner',
      '@vueuse/core',
    ],
  },
})
