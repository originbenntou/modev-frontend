import { resolve } from 'path'
import type { NitroConfig } from 'nitropack'

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'MOV',
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
    preset: 'node-server',
  },
  srcDir: 'src/',
  alias: {
    '~': resolve(__dirname),
    '@': resolve(__dirname),
  },
  runtimeConfig: {
    public: {
      baseURL: process.env['NUXT_API_URL'] || 'http://localhost',
    }
  },
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    },
  },
  devServer: {
    // host: 'localhost',
    // port: 80,
  },
  hooks: {
    'nitro:config': (config: NitroConfig) => {
      if (isDebugMode()) {
        const mockServer = resolve(__dirname, './src/mock/server')
        config.srcDir = mockServer
        config.scanDirs = [mockServer]
      }
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
  content: {
    highlight: {
      theme: 'github-dark-dimmed',
    },
  },
})

const isDebugMode = (): boolean => {
  return process.env['NUXT_APP_ENV'] == 'LOCAL'
}