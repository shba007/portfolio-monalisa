// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils/module',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    'nuxt-splide',
  ],
  nitro: {
    compressPublicAssets: true,
    storage: {
      fs: {
        driver: 'fs',
        base: './static',
      },
    },
  },
  routeRules: {
    '/': { isr: 3600 },
    '/_ipx/**': { headers: { 'cache-control': 'max-age=31536000' } },
    '/images/**': { headers: { 'cache-control': 'max-age=31536000' } },
    '/fonts/**': { headers: { 'cache-control': 'max-age=31536000' } },
    '/locations/**': { redirect: { to: '/location/**', statusCode: 301 } },
    '/location/**': { headers: { 'cache-control': 'max-age=31536000' } },
    '/workshops/**': { redirect: { to: '/workshop/**', statusCode: 301 } },
    '/workshop/**': { headers: { 'cache-control': 'max-age=31536000' } },
    '/about': { ssr: true },
  },
  runtimeConfig: {
    app: {
      version: '',
      buildTime: '',
    },
    public: {
      siteUrl: '',
      scripts: {
        googleAnalytics: {
          id: '',
        },
      },
      vapidKey: '',
    },
    private: {
      rootDir: '',
      notionApiKey: '',
      notionDbId: '',
      youtubeBaseUrl: '',
      youtubeAnalyticsUrl: '',
      youtubeChannelId: '',
      youtubeApiKey: '',
      oauthClientId: '',
      oauthClientSecret: '',
      oauthRefreshToken: '',
      paymentUpiInfo: '',
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  icon: {
    componentName: 'NuxtIcon',
    provider: 'server',
    mode: 'svg',
    customCollections: [
      {
        prefix: 'local',
        dir: './app/assets/icons',
      },
    ],
  },
  image: {
    format: ['avif', 'webp'],
    quality: 80,
  },
  scripts: {
    registry: {
      googleAnalytics: true,
    },
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },
  site: {
    name: 'Monalisa Bairagi',
    url: process.env.NUXT_PUBLIC_SITE_URL,
  },
  sitemap: {
    autoLastmod: true,
    sources: ['/api/__sitemap__/urls'],
  },
  robots: {
    disallow: ['/_nuxt/'],
  },
  pwa: {
    scope: '/',
    base: '/',
    injectRegister: 'auto',
    registerType: 'autoUpdate',
    manifest: {
      name: 'Monalisa Bairagi',
      short_name: 'Monalisa Bairagi',
      description: 'Monalisa Bairagi is a RCI registered clinical psychologist',
      theme_color: '#98DA8B',
      background_color: '#98DA8B',
      orientation: 'portrait',
      shortcuts: [
        {
          name: 'Book an Appointment by call',
          short_name: 'Book Appointment (Call)',
          description: 'Book a therapy session by call',
          url: 'tel:+91798-002-4961',
          icons: [{ src: '/pwa/phone.png', sizes: '512x512' }],
        },
        {
          name: 'Book an Appointment by whatsapp',
          short_name: 'Book Appointment (Whatsapp)',
          description: 'Book a therapy session by whatsapp',
          url: 'https://wa.me/917980024961',
          icons: [{ src: '/pwa/whatsapp.png', sizes: '512x512' }],
        },
      ],
      icons: [
        {
          src: '/pwa/icon-48.png',
          sizes: '48x48',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/pwa/icon-72.png',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/pwa/icon-96.png',
          sizes: '96x96',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/pwa/icon-128.png',
          sizes: '128x128',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/pwa/icon-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/pwa/icon-384.png',
          sizes: '384x384',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/pwa/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/pwa/icon-maskable-48.png',
          sizes: '48x48',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: '/pwa/icon-maskable-72.png',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: '/pwa/icon-maskable-96.png',
          sizes: '96x96',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: '/pwa/icon-maskable-128.png',
          sizes: '128x128',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: '/pwa/icon-maskable-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: '/pwa/icon-maskable-384.png',
          sizes: '384x384',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: '/pwa/icon-maskable-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
      screenshots: [
        {
          src: '/pwa/screenshot-desktop-1.webp',
          sizes: '1024x576',
          type: 'image/webp',
          form_factor: 'wide',
          label: 'Screenshot 1',
        },
        {
          src: '/pwa/screenshot-desktop-2.webp',
          sizes: '1024x576',
          type: 'image/webp',
          form_factor: 'wide',
          label: 'Screenshot 2',
        },
        {
          src: '/pwa/screenshot-desktop-3.webp',
          sizes: '1024x576',
          type: 'image/webp',
          form_factor: 'wide',
          label: 'Screenshot 3',
        },
        {
          src: '/pwa/screenshot-mobile-1.webp',
          sizes: '576x1024',
          type: 'image/webp',
          form_factor: 'narrow',
          label: 'Screenshot 1',
        },
        {
          src: '/pwa/screenshot-mobile-2.webp',
          sizes: '576x1024',
          type: 'image/webp',
          form_factor: 'narrow',
          label: 'Screenshot 2',
        },
        {
          src: '/pwa/screenshot-mobile-3.webp',
          sizes: '576x1024',
          type: 'image/webp',
          form_factor: 'narrow',
          label: 'Screenshot 3',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{html,css,js,jpg,jpeg,png,svg,webp,ico,mp3,wav,ogg,mp4,webm,mov,m4a,aac}'],
      runtimeCaching: [
        {
          urlPattern: /\.(?:html|js|css)$/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'dynamic-assets',
          },
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|webp|ico|mp3|wav|ogg|mp4|webm|mov|m4a|aac)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'static-assets',
            expiration: { maxEntries: 100, maxAgeSeconds: 7 * 24 * 60 * 60 },
          },
        },
      ],
      navigateFallback: '/',
      cleanupOutdatedCaches: true,
      importScripts: ['/sw-push.js'],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600,
    },
    devOptions: {
      type: 'module',
      enabled: false,
      suppressWarnings: false,
      navigateFallback: undefined,
    },
  },
  splide: {
    theme: 'core',
  },
})
