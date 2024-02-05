<script setup lang="ts">
const title = `RCI Registered Clinical Psychologist in Kolkata`
const description = `Monalisa Bairagi is a trusted RCI registered clinical psychologist based in Kolkata.
She provides counseling sessions tailored to your unique needs near Rajpur, Sonarpur, Baruipur, Subhasgram, Harinavi & Narendrapur Area`
const url = "https://monalisa-bairagi.com"

useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap",
    },
  ]
})

useSeoMeta({
  ogType: "profile",
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: url + "/previews/landing.webp",
  ogImageWidth: 1280,
  ogImageHeight: 640,
  ogUrl: url,
  fbAppId: 966242223397117,
  twitterCard: "summary_large_image",
  colorScheme: "light dark",
})

useSchemaOrg([
  definePerson({
    name: "Monalisa Bairagi",
    description: "She is a RCI registered clinical psychologist",
    image: url + "/logo.png",
    sameAs: [
      "https://linkedin.com/in/monalisa-bairagi",
      "https://instagram.com/mindful.healing.path",
      "https://youtube.com/@mindful-healing-path",
    ],
  }),
  defineLocalBusiness({
    name: "Monalisa Bairagi",
    address: {
      streetAddress: "RN Bhattacharya Road, Kumorpara 2nd Lane",
      addressLocality: "Kolkata",
      addressRegion: "WB",
      postalCode: "700146",
      addressCountry: "IN",
    },
    image: url + "/logo.png",
  }),
  defineWebPage({
    datePublished: new Date(2024, 0, 1).toISOString(),
    dateModified: new Date(2024, 0, 1).toISOString(),
    author: "Shirsendu Bairagi",
  }),
  defineWebSite({
    url: url,
    name: title,
    description: description,
  }),
])
</script>

<template>
  <NuxtPwaManifest />
  <!-- <NuxtLoadingIndicator /> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@font-face {
  font-family: "Sansation";
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url("/fonts/Sansation_Light_Italic.ttf");
}

@font-face {
  font-family: "Sansation";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/Sansation_Italic.ttf");
}

@font-face {
  font-family: "Sansation";
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url("/fonts/Sansation_Bold_Italic.ttf");
}

@font-face {
  font-family: "Sansation";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url("/fonts/Sansation_Light.ttf");
}

@font-face {
  font-family: "Sansation";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/Sansation_Regular.ttf");
}

@font-face {
  font-family: "Sansation";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("/fonts/Sansation_Bold.ttf");
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  scrollbar-width: 6px
}

*::-webkit-scrollbar {
  @apply block w-[6px] bg-light-400;
}

*::-webkit-scrollbar-thumb {
  @apply rounded-md bg-light-600;
}

html {
  @apply relative scroll-smooth overflow-x-hidden;
}

body {
  @apply relative min-h-screen font-main text-black bg-light-400 overflow-x-hidden;
}

.nuxt-icon>svg {
  @apply !m-0;
}

.scrollbar-hidden {
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
  scrollbar-width: none;
  /* Firefox */
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
  /* Safari and Chrome */
}
</style>