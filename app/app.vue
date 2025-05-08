<script setup lang="ts">
const title = `RCI Registered Clinical Psychologist in Kolkata`
const description = `Monalisa Bairagi is a trusted RCI registered clinical psychologist based in Kolkata.
She provides counseling sessions tailored to your unique needs near Rajpur, Sonarpur, Baruipur, Subhasgram, Harinavi & Narendrapur Area`
const {
  public: { siteUrl },
} = useRuntimeConfig()

useHead({
  bodyAttrs: {
    class: 'scrollbar-hidden',
  },
})

useSeoMeta({
  ogType: 'profile',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  fbAppId: 966242223397117,
  twitterCard: 'summary_large_image',
  colorScheme: 'light dark',
})

useSchemaOrg([
  definePerson({
    name: 'Monalisa Bairagi',
    description: 'She is a RCI registered clinical psychologist',
    image: siteUrl + '/logo.png',
    sameAs: ['https://linkedin.com/in/monalisa-bairagi', 'https://instagram.com/mindful.healing.path', 'https://youtube.com/@mindful-healing-path'],
  }),
  defineLocalBusiness({
    name: 'Monalisa Bairagi',
    address: {
      streetAddress: 'RN Bhattacharya Road, Kumorpara 2nd Lane',
      addressLocality: 'Kolkata',
      addressRegion: 'WB',
      postalCode: '700146',
      addressCountry: 'IN',
    },
    image: siteUrl + '/logo.png',
  }),
  defineWebPage({
    datePublished: new Date(2024, 0, 1).toISOString(),
    dateModified: new Date(2024, 0, 1).toISOString(),
    author: 'Shirsendu Bairagi',
  }),
  defineWebSite({
    siteUrl: siteUrl,
    name: title,
    description: description,
  }),
])
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPwaManifest />
  <NuxtPwaAssets />
  <NuxtLoadingIndicator color="#98DA8B" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <AppInstallPrompt />
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
  @apply relative min-h-screen overflow-x-hidden bg-primary-500 fill-black font-main text-black dark:fill-white;
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
