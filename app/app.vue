<script setup lang="ts">
const title = `RCI Registered Clinical Psychologist in Kolkata`
const description = `Monalisa Bairagi is a trusted RCI registered clinical psychologist based in Kolkata.
She provides counseling sessions tailored to your unique needs near Garia, Moulali, Malancha bazar`

const {
  app: { buildTime },
  public: { siteUrl, vapidKey },
} = useRuntimeConfig()

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
})

useSeoMeta({
  ogType: 'profile',
  ogImageWidth: 1280,
  ogImageHeight: 640,
  fbAppId: 966242223397117,
  twitterCard: 'summary_large_image',
  colorScheme: 'light dark',
})

useSchemaOrg([
  defineWebPage({
    datePublished: new Date(2023, 10, 22).toISOString(),
    dateModified: buildTime,
    author: 'Shirsendu Bairagi',
  }),
  defineWebSite({
    url: siteUrl,
    name: title,
    description: description,
  }),
  definePerson({
    name: 'Monalisa Bairagi',
    description: 'She is a RCI registered clinical psychologist',
    image: siteUrl + '/logo.png',
    sameAs: ['https://linkedin.com/in/monalisa-bairagi', 'https://instagram.com/mindful.healing.path', 'https://youtube.com/@mindful-healing-path'],
  }),
  defineLocalBusiness({
    '@type': 'ProfessionalService',
    name: 'Monalisa Bairagi',
    description: description,
    image: `${siteUrl}/previews/landing.webp`,
    logo: siteUrl + '/logo.png',
    url: siteUrl,
    address: {
      streetAddress: 'RN Bhattacharya Road, Kumorpara 2nd Lane',
      addressLocality: 'Kolkata',
      addressRegion: 'WB',
      postalCode: '700146',
      addressCountry: 'IN',
    },
    sameAs: ['https://linkedin.com/in/monalisa-bairagi', 'https://instagram.com/mindful.healing.path', 'https://youtube.com/@mindful-healing-path'],
  }),
])

const { isSupported, permissionGranted } = useWebNotification()

async function getExistingSubscription() {
  const registration = await navigator.serviceWorker.ready
  let subscription = await registration.pushManager.getSubscription()

  if (!subscription) {
    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: vapidKey,
    })
  }

  await $fetch('/api/notification/push/subscribe', {
    method: 'POST',
    body: subscription.toJSON(),
  })

  return subscription
}

onMounted(async () => {
  if (isSupported.value && permissionGranted.value) await getExistingSubscription()
})

watch(permissionGranted, async (value) => {
  if (value) await getExistingSubscription()
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPwaAssets />
  <NuxtLoadingIndicator color="#98DA8B" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <LazyAppInstallPrompt hydrate-on-idle />
</template>

<style>
* {
  -webkit-tap-highlight-color: transparent;
  scrollbar-width: 6px;
  @apply antialiased;
}

*::-webkit-scrollbar {
  @apply block size-[6px] bg-light-400;
}

*::-webkit-scrollbar-thumb {
  @apply rounded-md bg-light-600;
}

html {
  @apply relative overflow-x-hidden scroll-smooth;
}

body {
  @apply relative min-h-screen overflow-x-hidden bg-primary-400 fill-black font-main text-black;
}

svg.iconify--local {
  @apply !m-0 !box-content;
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.scrollbar-hidden::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
