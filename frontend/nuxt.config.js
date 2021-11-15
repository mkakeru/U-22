import path from 'path'
import fs from 'fs'

const isProd = process.env.NODE_ENV === 'production'
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

export default {
  vue: {
    devtools: true
  },
  server: isProd
    ? false
    : {
        https: {
          key: fs.readFileSync(path.join(__dirname, '/localhost-key.pem')),
          cert: fs.readFileSync(path.join(__dirname, '/localhost.pem'))
        }
      },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ヒトコエ',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/tailwind-util.css',
    '@/assets/css/global.css'
  ],

  // router: {
  //   middleware: ['auth', 'cookie']
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios',
    { src: '@/plugins/api', mode: 'client' },
    { src: '@/plugins/webSocket', mode: 'client' },
    { src: '@/plugins/handle-s3', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  proxy: {
    '/api/': {
      target: `https://${process.env.RAILS_DOMAIN}`
    }
  },

  axios: {
    proxy: true
  },

  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cache: true
  },

  env: isProd
    ? {
        RAILS_DOMAIN: process.env.RAILS_DOMAIN,
        GEO_API_KEY: process.env.GEO_API_KEY
      }
    : {
        RAILS_IP: process.env.RAILS_IP,
        RAILS_PORT: process.env.RAILS_PORT,
        RAILS_DOMAIN: process.env.RAILS_DOMAIN,
        GEO_API_KEY: process.env.GEO_API_KEY,
        TEST: process.env.TEST
      }
}
