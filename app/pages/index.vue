<script setup lang="ts">
const title = `RCI Registered Clinical Psychologist in Kolkata`
const description = `Monalisa Bairagi is a trusted RCI registered clinical psychologist based in Kolkata.
She provides counseling sessions tailored to your unique needs near Rajpur, Sonarpur, Baruipur, Subhasgram, Harinavi & Narendrapur Area`
const url = 'https://monalisa-bairagi.com'

const { proxy: gaProxy } = useScriptGoogleAnalytics()

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: url + '/previews/landing.webp',
  ogUrl: url,
})

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
    <!-- <AppFooter @contact="onContact" /> -->
  </div>
</template>
