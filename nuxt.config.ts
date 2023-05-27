import { resolve } from 'path'
export default defineNuxtConfig({
  nitro: {
    preset: 'node',
  },
  srcDir: 'src/',
  // buildDir: 'dist',
  alias: {
    '~': resolve(__dirname),
    '@': resolve(__dirname),
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
    // port: 80,
  },
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
