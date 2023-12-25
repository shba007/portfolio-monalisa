// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtseo/module',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    'nuxt-gtag',
    'nuxt-icons',
  ],
  typescript: {
    shim: false,
  },
  image: {
    format: ['avif', 'webp'],
    width: 1920,
    quality: 80,
  },
  site: {
    url: 'https://monalisa-bairagi.com'
  },
  gtag: {
    id: 'G-SYMDMKBF8R'
  },
})
