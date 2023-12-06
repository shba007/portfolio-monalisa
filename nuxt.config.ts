// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@nuxtseo/module",
    "@vite-pwa/nuxt",
    "@vueuse/nuxt",
    "nuxt-gtag",
    "nuxt-icons",
    "nuxt-vitest",
  ],
  typescript: {
    shim: false,
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
  site: {
    url: 'https://shirsendu-bairagi.dev'
  },
  gtag: {
    id: 'G-ZMR7H4LPSK'
  },
})
