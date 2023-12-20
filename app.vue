<script setup lang="ts">
useHead({
  title: "Monalisa's Portfolio",
  link: [
    /*   {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,300;0,400;0,500;1,400&display=swap',
      }, */
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://monalisa-bairagi.com',
    },
  ],
})

useSeoMeta({
  ogType: "profile",
  title: "Monalisa's Portfolio",
  ogTitle: "Monalisa's Portfolio",
  description: "I am a Clinical Psychologist, this is my psychologist's portfolio showcasing her experience and contacts in a visually appealing manner",
  ogDescription: "I am a clinical psychologist, this is my psychologist's portfolio showcasing her experience and contacts in a visually appealing manner",
  ogImage: "https://monalisa-bairagi.com/previews/landing.jpg",
  ogImageWidth: 1280,
  ogImageHeight: 640,
  ogUrl: 'https://monalisa-bairagi.com',
  fbAppId: 966242223397117,
  twitterCard: "summary_large_image",
})

useSchemaOrg([
  definePerson({
    name: "Monalisa Bairagi",
    description: "I am a Clinical Psychologist",
    image: "https://monalisa-bairagi.com/logo.png",
    sameAs: [
      // "https://x.com/monalis",
      "https://instagram.com/mindful.healing.path",
      "https://linkedin.com/in/monalisa-bairagi",
      "https://youtube.com/@mindful-healing-path",
    ],
  }),
  defineWebSite({
    name: "Monalisa's Portfolio",
    description: `I am a Clinical Psychologist, this is my psychologist's 
    portfolio showcasing her experience and contacts in a visually appealing manner`,
  }),
  defineWebPage({
    datePublished: new Date(2024, 0, 1).toISOString(),
    dateModified: new Date(2023, 0, 1).toISOString(),
    author: "Monalisa Bairagi",
  }),
])
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@font-face {
  font-family: 'Sansation';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url("/fonts/Sansation_Light_Italic.ttf");
}

@font-face {
  font-family: 'Sansation';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/Sansation_Italic.ttf");
}

@font-face {
  font-family: 'Sansation';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url("/fonts/Sansation_Bold_Italic.ttf");
}

@font-face {
  font-family: 'Sansation';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url("/fonts/Sansation_Light.ttf");
}

@font-face {
  font-family: 'Sansation';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/Sansation_Regular.ttf");
}

@font-face {
  font-family: 'Sansation';
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

body {
  @apply min-h-screen font-body text-black bg-light-400 overflow-x-hidden;
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