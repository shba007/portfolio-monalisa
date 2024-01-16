// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/color-mode',
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
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },
  site: {
    name: 'Monalisa Bairagi',
    url: 'https://monalisa-bairagi.com'
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Monalisa Bairagi',
      short_name: 'Monalisa Bairagi',
      description: 'Monalisa Bairagi is a RCI Licensed Clinical Psychologist',
      theme_color: '#98DA8B',
      background_color: '#98DA8B',
      orientation: 'portrait',
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
      screenshots: [
        {
          src: 'screenshot-desktop-1.webp',
          sizes: '1024x576',
          type: 'image/webp',
          form_factor: 'wide',
          label: 'Screenshot 1'
        },
        {
          src: 'screenshot-desktop-2.webp',
          sizes: '1024x576',
          type: 'image/webp',
          form_factor: 'wide',
          label: 'Screenshot 2'
        },
        {
          src: 'screenshot-desktop-3.webp',
          sizes: '1024x576',
          type: 'image/webp',
          form_factor: 'wide',
          label: 'Screenshot 3'
        },
        {
          src: 'screenshot-mobile-1.webp',
          sizes: '576x1024',
          type: 'image/webp',
          form_factor: 'narrow',
          label: 'Screenshot 1'
        },
        {
          src: 'screenshot-mobile-2.webp',
          sizes: '576x1024',
          type: 'image/webp',
          form_factor: 'narrow',
          label: 'Screenshot 2'
        },
        {
          src: 'screenshot-mobile-3.webp',
          sizes: '576x1024',
          type: 'image/webp',
          form_factor: 'narrow',
          label: 'Screenshot 3'
        },
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,jpg,png,webp,svg,ico}'],
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
