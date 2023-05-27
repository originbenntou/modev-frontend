import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  nitro: {
    preset: 'node',
  },
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    },
  },
  devServer: {
    host: 'localhost',
  },
  // srcDir: 'src',
  typescript: {
    tsConfig: {
      extends: '@tsconfig/strictest/tsconfig.json',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
})
