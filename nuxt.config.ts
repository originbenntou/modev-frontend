import { resolve } from 'path'
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'MO-TECH',
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        {
          type: 'text/javascript',
          async: true,
          src: 'https://platform.twitter.com/widgets.js'
        }
      ],
    }
  },
  css: [
    '~/src/assets/css/style.scss',
  ],
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
  runtimeConfig: {
    public: {
      baseURL: 'http://localhost',
    }
  },
  typescript: {
    tsConfig: {
      extends: '@tsconfig/strictest/tsconfig.json',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
  ],
  plugins: [
    { src: 'src/plugins/msw.ts' }
  ],
  content: {
    highlight: {
      theme: 'github-dark-dimmed',
    },
  },
})
