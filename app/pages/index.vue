<script setup lang="ts">
const title = `RCI Registered Clinical Psychologist in Kolkata`
const description = `Monalisa Bairagi is a trusted RCI registered clinical psychologist based in Kolkata.
She provides counseling sessions tailored to your unique needs near Rajpur, Sonarpur, Baruipur, Subhasgram, Harinavi & Narendrapur Area`
const {
  public: { siteUrl },
} = useRuntimeConfig()
const imageUrl = `${siteUrl}/previews/landing.webp`

useHead({
  bodyAttrs: {
    class: 'scrollbar-hidden',
  },
})

useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  description: description,
  ogDescription: description,
  twitterDescription: description,
  ogImage: imageUrl,
  twitterImage: imageUrl,
  ogUrl: siteUrl,
})

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Location', item: '/location' },
      { name: 'Workshop', item: '/workshop' },
      { name: 'About', item: '/about' },
    ],
  }),
])

const { proxy: gaProxy } = useScriptGoogleAnalytics()

const isModalContactOpen = useState<boolean>('Modal-contact', () => false)

function onContact(action: boolean) {
  if (action) {
    isModalContactOpen.value = true
    gaProxy.gtag('event', 'contact_open')
  } else {
    isModalContactOpen.value = false
    gaProxy.gtag('event', 'contact_close')
  }
}
</script>

<template>
  <div>
    <SectionHero @contact="onContact(true)" />
    <SectionVideo />
    <SectionTestimonial />
    <ModalContact :is-open="isModalContactOpen" @close="onContact(false)" />
  </div>
</template>
