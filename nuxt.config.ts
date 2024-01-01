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
  runtimeConfig: {
    private: {
      rootDir: '',
    },
  },
  image: {
    format: ['avif', 'webp'],
    width: 1024,
    quality: 80,
  },
  site: {
    url: 'https://monalisa-bairagi.com'
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Monalisa Bairagi\'s Portfolio',
      short_name: 'Monalisa Bairagi',
      theme_color: '#66CD5B',
      icons: [
        {
          src: 'logo-48.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          src: 'logo-72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: 'logo-96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'logo-144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'logo-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'logo-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'logo-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600,
    },
    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  gtag: {
    id: 'G-SYMDMKBF8R'
  },
})
