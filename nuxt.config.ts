// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/base.css'],
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPBASE_URL,
      supabaseKey: process.env.NUXT_PUBLIC_SUPBASE_KEY
    }
  },
  app: {
    head: {
      title: 'JS Conf'
    }
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  }
})
